import React from 'react';
import { GetServerSideProps } from 'next';
import { allSettled, fork, serialize } from 'effector';
import { root } from 'effector-root';

import { RootProvider } from '@app/ssr';
import {
  contentTypePageOpen,
  ContentTypePage,
} from '@app/features/content_type';

interface ContentTypeContainerProps {
  initialState: object;
}

export default function CountryContainer({
  initialState,
}: ContentTypeContainerProps) {
  return (
    <RootProvider initialState={initialState}>
      <ContentTypePage />
    </RootProvider>
  );
}

export const getServerSideProps: GetServerSideProps<ContentTypeContainerProps> = async ({
  query,
}) => {
  const scope = fork(root);

  await allSettled(contentTypePageOpen, {
    params: query.slug as string,
    scope,
  });

  return { props: { initialState: serialize(scope) } };
};
