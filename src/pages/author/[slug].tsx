import React from 'react';
import { GetServerSideProps } from 'next';
import { allSettled, fork, serialize } from 'effector';
import { root } from 'effector-root';

import { RootProvider } from '@app/ssr';
import { AuthorPage, authorPageOpen } from '@app/features/author';

interface AuthorContainerProps {
  initialState: object;
}

export default function AuthorContainer({
  initialState,
}: AuthorContainerProps) {
  return (
    <RootProvider initialState={initialState}>
      <AuthorPage />
    </RootProvider>
  );
}

export const getServerSideProps: GetServerSideProps<AuthorContainerProps> = async ({
  query,
}) => {
  const scope = fork(root);

  await allSettled(authorPageOpen, { params: query.slug as string, scope });

  return { props: { initialState: serialize(scope) } };
};
