import { createStore, createEvent, createEffect, forward } from 'effector';

import { pageChanged } from '@app/features/viewer';

import { Article } from './types';

const articlePageOpen = createEvent<string>();

const fetchArticleFx = createEffect(
  async (slug: string): Promise<Article> => {
    return {
      slug,
      title: 'AMAzing article',
      author: { slug: 'test', name: 'varlamov' },
      country: { slug: 'country', name: 'russia' },
      contentType: { slug: 'podcast', name: 'PodCast' },
      date: Date.now(),
      duration: 14,
      shortText: 'fdsf',
      fullText: 'fdf',
    };
  },
);

const $article = createStore<Article | null>(null).on(
  fetchArticleFx.doneData,
  (_, article) => article,
);

forward({ from: articlePageOpen, to: [fetchArticleFx, pageChanged] });

export { $article, articlePageOpen };
