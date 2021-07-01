import { useEvent, useList } from 'effector-react/ssr';
import React from 'react';

import { openSearch } from '../search';
import { $feed } from './model';
import { ArticlePreviewCard } from './ui/article_preview_card';
import { Author } from '@app/ui/author/author'
import { IconButton } from '@app/ui/icon-button'
import { LikeIcon, PersonIcon } from '@app/ui/icons'

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
      <Author url={'/mock/author.jpg'} label={'Саша Грей'} />
      <IconButton icon={LikeIcon}>lOve</IconButton>
      <IconButton icon={PersonIcon}>Вход</IconButton>
    </>
  );
}
