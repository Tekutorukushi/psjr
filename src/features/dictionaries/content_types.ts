import { createEffect, forward, restore } from 'effector';

import { ContentApi } from '@app/api/content_api';
import { pageChanged } from '@app/features/viewer';
import { ContentType } from '@app/features/content_type';

const fetchTagsFx = createEffect(ContentApi.fetchTags);

const $fetchedTags = restore(fetchTagsFx, []);

const $contentTypes = $fetchedTags.map(
  (fetched): Array<ContentType> =>
    fetched.map((item) => ({ id: item.id, slug: item.slug, name: item.name })),
);

forward({ from: pageChanged, to: fetchTagsFx });

export { $contentTypes };
