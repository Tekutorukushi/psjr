import { combine, createEvent, forward, restore } from 'effector';

import { $countries } from '../dictionaries';
import { $feed, fetchFeed } from '../feed';
import { pageChanged } from '../viewer';

const countryPageOpen = createEvent<string>();

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
