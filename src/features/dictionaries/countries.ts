import { createEffect, forward, restore } from 'effector';

import { ContentApi } from '@app/api/content_api';
import { pageChanged } from '@app/features/viewer';
import { Country } from '@app/features/country';

const fetchCategoriesFx = createEffect(ContentApi.fetchCategories);

const $fetchedCategories = restore(fetchCategoriesFx, []);

const $countries = $fetchedCategories.map(
  (fetched): Array<Country> =>
    fetched.map((item) => ({ id: item.id, slug: item.slug, name: item.name })),
);

forward({ from: pageChanged, to: fetchCategoriesFx });

export { $countries };
