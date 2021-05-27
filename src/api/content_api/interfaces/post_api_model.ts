export interface PostApiModel {
  id: number;
  date: Date;
  // eslint-disable-next-line camelcase
  date_gmt: Date;
  guid: Guid;
  modified: Date;
  // eslint-disable-next-line camelcase
  modified_gmt: Date;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: Title;
  content: Content;
  excerpt: Excerpt;
  author: number;
  // eslint-disable-next-line camelcase
  featured_media: number;
  // eslint-disable-next-line camelcase
  comment_status: string;
  // eslint-disable-next-line camelcase
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: any[];
  categories: number[];
  tags: any[];
  _links: Links;
}

export interface Guid {
  rendered: string;
}

export interface Title {
  rendered: string;
}

export interface Content {
  rendered: string;
  protected: boolean;
}

export interface Excerpt {
  rendered: string;
  protected: boolean;
}

export interface Self {
  href: string;
}

export interface Collection {
  href: string;
}

export interface About {
  href: string;
}

export interface Author {
  embeddable: boolean;
  href: string;
}

export interface Reply {
  embeddable: boolean;
  href: string;
}

export interface WpAttachment {
  href: string;
}

export interface WpTerm {
  taxonomy: string;
  embeddable: boolean;
  href: string;
}

export interface Links {
  self: Self[];
  collection: Collection[];
  about: About[];
  author: Author[];
  replies: Reply[];
  'wp:attachment': WpAttachment[];
  'wp:term': WpTerm[];
}
