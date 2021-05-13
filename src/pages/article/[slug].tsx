import React from 'react';
import { GetServerSideProps } from 'next';
import { allSettled, fork, serialize } from 'effector';
import { root } from 'effector-root';

import { RootProvider } from '@app/ssr';
import { ArticlePage, articlePageOpen } from '@app/features/article';

interface ArticleContainerProps {
  initialState: object;
}

export default function ArticleContainer({
  initialState,
}: ArticleContainerProps) {
  return (
    <RootProvider initialState={initialState}>
      <ArticlePage />
    </RootProvider>
  );
}

export const getServerSideProps: GetServerSideProps<ArticleContainerProps> = async ({
  query,
}) => {
  const scope = fork(root);

  await allSettled(articlePageOpen, { params: query.slug as string, scope });

  return { props: { initialState: serialize(scope) } };
};
