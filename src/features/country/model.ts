import { combine, forward, restore } from 'effector';

import { root } from '@app/lib/root_domain';
import { $countries } from '@app/features/dictionaries';
import { $feed, fetchFeed } from '@app/features/feed';
import { pageChanged } from '@app/features/viewer';

const countryPageOpen = root.createEvent<string>();

const $country = combine(
  restore(countryPageOpen, null),
  $countries,
  (countrySlug, countries) =>
    countries.find((country) => country.slug === countrySlug) ?? null,
);

const $articles = combine($feed, $country, (articles, country) =>
  articles.filter((article) => article.country?.slug === country?.slug),
);

forward({
  from: countryPageOpen,
  to: [
    fetchFeed.prepend((countrySlug: string) => ({ countrySlug })),
    pageChanged,
  ],
});

export { $country, $articles, countryPageOpen };
