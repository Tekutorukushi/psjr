import { forward, combine, restore } from 'effector';

import { $authors } from '@app/features/dictionaries';
import { $feed, fetchFeed } from '@app/features/feed';
import { pageChanged } from '@app/features/viewer';
import { root } from '@app/lib/root_domain';

const authorPageOpen = root.createEvent<string>();

const $author = combine(
  restore(authorPageOpen, null),
  $authors,
  (authorSlug, authors) =>
    authors.find((author) => author.slug === authorSlug) ?? null,
);

const $articles = combine($feed, $author, (articles, author) =>
  articles.filter((article) => article.author?.slug === author?.slug),
);

forward({
  from: authorPageOpen,
  to: [
    fetchFeed.prepend((authorSlug: string) => ({ authorSlug })),
    pageChanged,
  ],
});

export { $author, authorPageOpen, $articles };
