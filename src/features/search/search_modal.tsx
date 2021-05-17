import { useEvent, useStore } from 'effector-react/ssr';

import { BaseModal } from '../modal';
import { $searchIsOpen, closeSearch } from './model';

export function SearchModal() {
  const isOpen = useStore($searchIsOpen);

  const handleClose = useEvent(closeSearch);

  return (
    <BaseModal isOpen={isOpen} onClose={handleClose}>
      <p>SEARCH</p>
    </BaseModal>
  );
}
