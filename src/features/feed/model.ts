import {
  combine,
  createEffect,
  createEvent,
  forward,
  restore,
  sample,
} from 'effector';

import { pageChanged } from '@app/features/viewer';
import { ContentApi } from '@app/api/content_api';
import {
  $authors,
  $countries,
  $contentTypes,
} from '@app/features/dictionaries';

import { normalizeArticle } from './lib/normalize_article';

const indexPageOpen = createEvent();

interface Filters {
  authorSlug?: string;
  countrySlug?: string;
  contentTypeSlug?: string;
  limit?: number;
}

const fetchPostsDirectoryFx = createEffect(ContentApi.fetchPostsDirectory);

const $fetchedPosts = restore(fetchPostsDirectoryFx.doneData, []);

const fetchFeed = createEvent<Filters>();

const $feed = combine(
  $fetchedPosts,
  $authors,
  $countries,
  $contentTypes,
  (posts, authors, countries, contentTypes) =>
    posts.map((post) =>
      normalizeArticle(post, { authors, contentTypes, countries }),
    ),
);

forward({
  from: indexPageOpen,
  to: [fetchFeed, pageChanged],
});

// TODO: add filters
sample({ source: fetchFeed, fn: () => null, target: fetchPostsDirectoryFx });

export { indexPageOpen, $feed, fetchFeed };
