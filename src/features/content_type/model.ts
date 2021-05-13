import { combine, createEffect, createEvent, forward, restore } from 'effector';

import { $feed, fetchFeedFx } from '../feed';
import { pageChanged } from '../viewer';
import { ContentType } from './types';

const fetchContentTypesFx = createEffect(async () => {
  return [{ slug: 'podcast', name: 'Podcast' }] as ContentType[];
});

const contentTypePageOpen = createEvent<string>();

const $contentTypes = restore(fetchContentTypesFx, []);
const $contentType = combine(
  [restore(contentTypePageOpen, null), $contentTypes],
  ([typeSlug, types]) => types.find((type) => type.slug === typeSlug) ?? null,
);

const $articles = combine([$feed, $contentType], ([articles, type]) =>
  articles.filter((article) => article.contentType.slug === type?.slug),
);

forward({
  from: contentTypePageOpen,
  to: [
    fetchFeedFx.prepend((contentTypeSlug: string) => ({ contentTypeSlug })),
    pageChanged,
  ],
});

forward({ from: pageChanged, to: fetchContentTypesFx });

export { $contentTypes, $contentType, $articles, contentTypePageOpen };
