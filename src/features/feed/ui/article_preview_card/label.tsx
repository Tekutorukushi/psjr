import React, { ComponentType, createElement, ReactChild } from 'react';

import { Text } from '@app/ui/text';

import styles from './label.module.scss';

interface LabelProps {
  icon: ComponentType<{ className?: string }>;
  children: ReactChild;
}

export function Label({ icon, children }: LabelProps) {
  return (
    <div className={styles.label}>
      {createElement(icon, { className: styles.icon })}
      <Text type={'paragraph'}>
        {children}
      </Text>
    </div>
  );
}
