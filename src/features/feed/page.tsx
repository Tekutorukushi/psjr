import { useEvent, useList } from 'effector-react/ssr';
import React from 'react';

import { openSearch } from '../search';
import { $feed } from './model';
import { ArticlePreviewCard } from './ui/article_preview_card';

export function FeedPage() {
  const handleClick = useEvent(openSearch);

  const list = useList($feed, (article) => (
    <li>
      <ArticlePreviewCard article={article} />
    </li>
  ));

  return (
    <>
      <button onClick={handleClick}>OPEN SEARCH</button>
      <ul>{list}</ul>
    </>
  );
}
