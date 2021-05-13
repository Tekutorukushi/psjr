import React from 'react';
import { useList, useStore } from 'effector-react/ssr';

import { ArticlePreviewCard } from '@app/features/feed';

import { $articles, $author } from './model';

export function AuthorPage() {
  const author = useStore($author);
  const list = useList($articles, (article) => (
    <li>
      <ArticlePreviewCard article={article} hideAuthor />
    </li>
  ));

  if (!author) {
    return <>LOAD</>;
  }

  return (
    <div>
      <p>Aithor, {author.name}</p>
      <ul>{list}</ul>
    </div>
  );
}
