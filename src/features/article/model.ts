import { forward, restore, combine } from 'effector';

import { pageChanged } from '@app/features/viewer';
import {
  $authors,
  $contentTypes,
  $countries,
} from '@app/features/dictionaries';
import { normalizeArticle } from '@app/features/feed';
import { ContentApi } from '@app/api/content_api';
import { root } from '@app/lib/root_domain';

const articlePageOpen = root.createEvent<string>();

const fetchPostBySlugFx = root.createEffect(ContentApi.fetchPostBySlug);

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
