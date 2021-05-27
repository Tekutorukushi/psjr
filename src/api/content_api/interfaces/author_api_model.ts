export interface AvatarUrls {
  24: string;
  48: string;
  96: string;
}

export interface Self {
  href: string;
}

export interface Collection {
  href: string;
}

export interface Links {
  self: Self[];
  collection: Collection[];
}

export interface AuthorApiModel {
  id: number;
  name: string;
  url: string;
  description: string;
  link: string;
  slug: string;
  // eslint-disable-next-line camelcase
  avatar_urls: AvatarUrls;
  meta: any[];
  _links: Links;
}
