import {
  createStore,
  createEvent,
  createEffect,
  forward,
  combine,
} from 'effector';

import { $feed, fetchFeedFx } from '@app/features/feed';
import { pageChanged } from '@app/features/viewer';

import { Author } from './types';

const authorPageOpen = createEvent<string>();

const fetchAuthorFx = createEffect(
  async (slug: string): Promise<Author> => {
    return { slug, name: 'Varlamov' };
  },
);

const fetchAuthorArticles = createEvent<string>();

const $author = createStore<Author | null>(null).on(
  fetchAuthorFx.doneData,
  (_, author) => author,
);

const $articles = combine([$feed, $author], ([articles, author]) =>
  articles.filter((article) => article.author.slug === author?.slug),
);

forward({ from: authorPageOpen, to: [fetchAuthorFx, fetchAuthorArticles] });

forward({
  from: fetchAuthorArticles,
  to: [
    fetchFeedFx.prepend((authorSlug: string) => ({ authorSlug })),
    pageChanged,
  ],
});

export { $author, authorPageOpen, $articles };
