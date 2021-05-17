import React from 'react';
import { GetServerSideProps } from 'next';
import { allSettled, fork, serialize } from 'effector';
import { root } from 'effector-root';

import { countryPageOpen, CountryPage } from '@app/features/country';

interface CountryContainerProps {
  initialState: object;
}

export default function CountryContainer() {
  return <CountryPage />;
}

export const getServerSideProps: GetServerSideProps<CountryContainerProps> = async ({
  query,
}) => {
  const scope = fork(root);

  await allSettled(countryPageOpen, { params: query.slug as string, scope });

  return { props: { initialState: serialize(scope) } };
};
