import { createEvent, createStore } from 'effector';
import { uniq } from 'lodash';

const openModal = createEvent<string>();
const closeModal = createEvent<string>();

const $openModals = createStore<string[]>([])
  .on(openModal, (opened, toOpen) => uniq([...opened, toOpen]))
  .on(closeModal, (opened, toClose) => opened.filter((m) => m !== toClose));

export { $openModals, openModal, closeModal };
