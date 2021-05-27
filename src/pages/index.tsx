import { GetServerSideProps } from 'next';
import { allSettled, fork, serialize } from 'effector';
import { root } from 'effector-root';
import React from 'react';

import { indexPageOpen, FeedPage } from '@app/features/feed';

interface IndexContainerProps {
  initialState: object;
}

export default function IndexContainer() {
  return <FeedPage />;
}

export const getServerSideProps: GetServerSideProps<IndexContainerProps> = async () => {
  const scope = fork(root);

  await allSettled(indexPageOpen, { scope });

  return { props: { initialState: serialize(scope, { onlyChanges: true }) } };
};
