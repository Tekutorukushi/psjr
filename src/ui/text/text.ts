import { ReactNode, ReactHTML, createElement } from 'react';
import clsx from 'clsx';

import styles from './text.module.scss';

export enum TypographyType {
  'h1',
  'h2',
  'h3',
  'paragraph',
}

interface TextProps {
  as?: keyof ReactHTML;
  children: ReactNode;
  type: TypographyType;
}

export function Text({ as = 'span', children, type }: TextProps) {
  return createElement(
    as,
    {
      className: clsx(styles[`typography_${type}`]),
    },
    children,
  );
}
