import { useList, useStore } from 'effector-react/ssr';

import { ArticlePreviewCard } from '@app/features/feed';

import { $articles, $contentType } from './model';

export function ContentTypePage() {
  const contentType = useStore($contentType);

  const list = useList($articles, (article) => (
    <li>
      <ArticlePreviewCard article={article} />
    </li>
  ));

  if (!contentType) {
    return null;
  }

  return (
    <div>
      <h1>{contentType.name}</h1>
      <ul>{list}</ul>
    </div>
  );
}
