import { ReactNode, ReactHTML, createElement } from 'react';
import clsx from 'clsx';

import styles from './text.module.scss';

interface TextProps {
  as?: keyof ReactHTML;
  children: ReactNode;
  weight: 800 | 400;
  size: 28 | 13;
}

export function Text({ as = 'span', children, weight, size }: TextProps) {
  return createElement(
    as,
    {
      className: clsx(
        styles.text,
        styles[`weight_${weight}`],
        styles[`size_${size}`],
      ),
    },
    children,
  );
}
