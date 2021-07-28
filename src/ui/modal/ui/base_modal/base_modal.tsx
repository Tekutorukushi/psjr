import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';

import { useModalContainer } from './use_modal_container';
import { useOverlayClick } from './use_overlay_click';
import { useBodyScrollLock } from './use_body_scroll_lock';

import styles from './base_modal.module.scss';

interface BaseModalProps {
  isOpen: boolean;
  onClose?: () => void;
  children?: ReactNode;
}

export function BaseModal({ isOpen, children, onClose }: BaseModalProps) {
  const { container, isReady } = useModalContainer();
  const { handleOverlayClick, contentRef } = useOverlayClick({ onClose });
  const { modalRef } = useBodyScrollLock({ isOpen });

  if (!isReady) {
    return null;
  }

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className={styles.modal} onClick={handleOverlayClick} ref={modalRef}>
      <div className={styles.container} ref={contentRef}>
        {children}
      </div>
    </div>,
    container.current!,
  );
}
