import React from 'react';
import { GetServerSideProps } from 'next';
import { allSettled, fork, serialize } from 'effector';
import { root } from 'effector-root';

import { RootProvider } from '@app/ssr';
import { countryPageOpen, CountryPage } from '@app/features/country';

interface CountryContainerProps {
  initialState: object;
}

export default function CountryContainer({
  initialState,
}: CountryContainerProps) {
  return (
    <RootProvider initialState={initialState}>
      <CountryPage />
    </RootProvider>
  );
}

export const getServerSideProps: GetServerSideProps<CountryContainerProps> = async ({
  query,
}) => {
  const scope = fork(root);

  await allSettled(countryPageOpen, { params: query.slug as string, scope });

  return { props: { initialState: serialize(scope) } };
};
