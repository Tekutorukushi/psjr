import {
  combine,
  createEffect,
  createEvent,
  createStore,
  forward,
  restore,
} from 'effector';

import { $feed, fetchFeedFx } from '../feed';
import { pageChanged } from '../viewer';
import { Country } from './types';

const fetchCountryListFx = createEffect(async () => {
  return [{ slug: 'country', name: 'RUSSIA' }] as Country[];
});

const countryPageOpen = createEvent<string>();

const $countries = restore(fetchCountryListFx, []);
const $country = combine(
  [restore(countryPageOpen, null), $countries],
  ([countrySlug, countries]) =>
    countries.find((country) => country.slug === countrySlug) ?? null,
);

const $articles = combine([$feed, $country], ([articles, country]) =>
  articles.filter((article) => article.country.slug === country?.slug),
);

forward({
  from: countryPageOpen,
  to: [
    fetchFeedFx.prepend((countrySlug: string) => ({ countrySlug })),
    pageChanged,
  ],
});

forward({ from: pageChanged, to: fetchCountryListFx });

export { $countries, $country, $articles, countryPageOpen };
