import { createEffect, createEvent, createStore, forward } from 'effector';
import { uniqBy } from 'lodash';

import { pageChanged } from '@app/features/viewer';

import { ArticlePreview } from './types';

const indexPageOpen = createEvent();

interface Filters {
  authorSlug?: string;
  countrySlug?: string;
  contentTypeSlug?: string;
  limit?: number;
}

const fetchFeedFx = createEffect((filters: Filters = {}): ArticlePreview[] => {
  return [
    {
      slug: 'TEST',
      title: 'HEllo article',
      author: { slug: 'TEST', name: 'Varlamov' },
      country: { slug: 'country', name: 'russia' },
      contentType: { slug: 'podcast', name: 'Podcast' },
      shortText: 'kjfdlksjflksdjfl kjflkdsjf lkjfsdl',
      duration: 12,
      date: Date.now(),
    },
    {
      slug: 'art',
      title: 'HEllo article 2',
      author: { slug: 'TEST', name: 'Varlamov' },
      country: { slug: 'country', name: 'russia' },
      contentType: { slug: 'podcast', name: 'Podcast' },
      duration: 15,
      date: Date.now(),
    },
  ];
});

const $feed = createStore<ArticlePreview[]>([]).on(
  fetchFeedFx.doneData,
  (oldArticles, newArticles) =>
    uniqBy([...oldArticles, ...newArticles], 'slug'),
);

forward({
  from: indexPageOpen,
  to: [fetchFeedFx.prepend(() => ({ limit: 100 })), pageChanged],
});

export { indexPageOpen, $feed, fetchFeedFx };
