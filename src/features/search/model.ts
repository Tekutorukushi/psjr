import { $openModals, closeModal, openModal } from '../modal';

const MODAL_KEY = 'search';

const openSearch = openModal.prepend((_: unknown) => MODAL_KEY);
const closeSearch = closeModal.prepend(() => MODAL_KEY);

const $searchIsOpen = $openModals.map((opened) => opened.includes(MODAL_KEY));

export { $searchIsOpen, openSearch, closeSearch };
