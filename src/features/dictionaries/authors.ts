import { createEffect, forward, restore } from 'effector';

import { ContentApi } from '@app/api/content_api';
import { pageChanged } from '@app/features/viewer';
import { Author } from '@app/features/author';

const fetchAuthorsDirectoryFx = createEffect(ContentApi.fetchAuthorsDirectory);

const $fetchedAuthors = restore(fetchAuthorsDirectoryFx, []);

const $authors = $fetchedAuthors.map(
  (fetched): Array<Author> =>
    fetched.map((item) => ({ id: item.id, slug: item.slug, name: item.name })),
);

forward({ from: pageChanged, to: fetchAuthorsDirectoryFx });

export { $authors };
