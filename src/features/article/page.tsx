import React from 'react';
import { useStore } from 'effector-react/ssr';

import { $article } from './model';

export function ArticlePage() {
  const article = useStore($article);

  if (!article) {
    return <>LOAD</>;
  }

  return <p>Article, {article.slug}</p>;
}
