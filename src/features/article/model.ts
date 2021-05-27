import { createEvent, createEffect, forward, restore, combine } from 'effector';

import { pageChanged } from '@app/features/viewer';
import {
  $authors,
  $contentTypes,
  $countries,
} from '@app/features/dictionaries';
import { normalizeArticle } from '@app/features/feed';
import { ContentApi } from '@app/api/content_api';

const articlePageOpen = createEvent<string>();

const fetchPostBySlugFx = createEffect(ContentApi.fetchPostBySlug);

const $fetchedPost = restore(fetchPostBySlugFx.doneData, null);

const $article = combine(
  $fetchedPost,
  $contentTypes,
  $countries,
  $authors,
  (post, contentTypes, countries, authors) => {
    if (!post) {
      return null;
    }

    return normalizeArticle(post, { contentTypes, countries, authors });
  },
);

forward({ from: articlePageOpen, to: [fetchPostBySlugFx, pageChanged] });

export { $article, articlePageOpen };
