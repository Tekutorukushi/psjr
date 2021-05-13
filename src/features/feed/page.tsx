import { useList } from 'effector-react';
import React from 'react';

import { $feed } from './model';
import { ArticlePreviewCard } from './ui/article_preview_card';

export function FeedPage() {
  const list = useList($feed, (article) => (
    <li>
      <ArticlePreviewCard article={article} />
    </li>
  ));

  return <ul>{list}</ul>;
}
