import { useList, useStore } from 'effector-react';

import { ArticlePreviewCard } from '@app/features/feed';

import { $articles, $country } from './model';

export function CountryPage() {
  const country = useStore($country);
  const list = useList($articles, (article) => (
    <li>
      <ArticlePreviewCard article={article} />
    </li>
  ));

  if (!country) {
    return null;
  }

  return (
    <div>
      <h1>{country.name}</h1>
      <ul>{list}</ul>
    </div>
  );
}
