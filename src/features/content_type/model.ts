import { combine, forward, restore } from 'effector';

import { root } from '@app/lib/root_domain';
import { $feed, fetchFeed } from '@app/features/feed';
import { pageChanged } from '@app/features/viewer';
import { $contentTypes } from '@app/features/dictionaries';

const contentTypePageOpen = root.createEvent<string>();

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
