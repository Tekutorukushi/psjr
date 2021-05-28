import React from 'react';
import { GetServerSideProps } from 'next';
import { allSettled, fork, serialize } from 'effector';

import { ArticlePage, articlePageOpen } from '@app/features/article';
import { root } from '@app/lib/root_domain';

interface ArticleContainerProps {
  initialState: object;
}

export default function ArticleContainer() {
  return <ArticlePage />;
}

export const getServerSideProps: GetServerSideProps<ArticleContainerProps> = async ({
  query,
}) => {
  const scope = fork(root);

  await allSettled(articlePageOpen, { params: query.slug as string, scope });

  return { props: { initialState: serialize(scope, { onlyChanges: true }) } };
};
