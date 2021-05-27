import { combine, createEvent, forward, restore } from 'effector';

import { $feed, fetchFeed } from '../feed';
import { pageChanged } from '../viewer';
import { $contentTypes } from '../dictionaries';

const contentTypePageOpen = createEvent<string>();

const $contentType = combine(
  restore(contentTypePageOpen, null),
  $contentTypes,
  (typeSlug, types) => types.find((type) => type.slug === typeSlug) ?? null,
);

const $articles = combine($feed, $contentType, (articles, type) =>
  articles.filter((article) => article.contentType?.slug === type?.slug),
);

forward({
  from: contentTypePageOpen,
  to: [
    fetchFeed.prepend((contentTypeSlug: string) => ({ contentTypeSlug })),
    pageChanged,
  ],
});

export { $contentTypes, $contentType, $articles, contentTypePageOpen };
