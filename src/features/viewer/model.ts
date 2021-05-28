import { root } from '@app/lib/root_domain';

const pageChanged = root.createEvent<unknown>();

export { pageChanged };
