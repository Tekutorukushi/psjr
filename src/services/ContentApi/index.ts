import axios from 'redaxios';

import { Post } from './interfaces/Post';
import { Author } from './interfaces/Author';
import { Category } from './interfaces/Category';
import { Tag } from './interfaces/Tag';

export default class ContentApi {
  private static API_PREFIX = 'https://psjradmin.avs.io/wp-json/wp/v2/';

  public static fetchPostsDirectory(): Promise<Post[]> {
    return ContentApi.fetch('posts');
  }

  public static fetchAuthorsDirectory(): Promise<Author[]> {
    return ContentApi.fetch('users');
  }

  public static fetchAuthor(id: number | string): Promise<Author> {
    return ContentApi.fetch(`users/${id}`);
  }

  public static fetchAuthorBySlug(slug: string): Promise<Author> {
    return ContentApi.fetch<Array<Author>>(`users?slug=${slug}`).then(([ author ]) => author);
  }

  public static fetchCategories(): Promise<Category[]> {
    return ContentApi.fetch('categories')
  }

  public static fetchTags(): Promise<Tag[]> {
    return ContentApi.fetch('tags')
  }

  private static fetch<T>(endpoint: string): Promise<T> {
    return axios
      .get<T>(`${ContentApi.API_PREFIX}${endpoint}`)
      .then(({ data }) => data);
  }
}
