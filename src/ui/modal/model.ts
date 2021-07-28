import { uniq } from 'lodash';
import { createApi } from 'effector';

import { root } from '@app/lib/root_domain';

const $openModals = root.createStore<string[]>([]);

const { openModal, closeModal } = createApi($openModals, {
  openModal: (opened, toOpen: string) => uniq([...opened, toOpen]),
  closeModal: (opened, toClose) => opened.filter((m) => m !== toClose),
});

export { $openModals, openModal, closeModal };
