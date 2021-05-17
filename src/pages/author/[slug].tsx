import React from 'react';
import { GetServerSideProps } from 'next';
import { allSettled, fork, serialize } from 'effector';
import { root } from 'effector-root';

import { AuthorPage, authorPageOpen } from '@app/features/author';

interface AuthorContainerProps {
  initialState: object;
}

export default function AuthorContainer() {
  return <AuthorPage />;
}

export const getServerSideProps: GetServerSideProps<AuthorContainerProps> = async ({
  query,
}) => {
  const scope = fork(root);

  await allSettled(authorPageOpen, { params: query.slug as string, scope });

  return { props: { initialState: serialize(scope) } };
};
