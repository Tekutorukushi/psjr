import axios from 'redaxios';

import { getBackendUrl } from '@app/config';

import { PostApiModel } from './interfaces/post_api_model';
import { AuthorApiModel } from './interfaces/author_api_model';
import { CategoryApiModel } from './interfaces/category_api_model';
import { TagApiModel } from './interfaces/tag_api_model';

export default class ContentApi {
  private static API_PREFIX = getBackendUrl();

  public static fetchPostsDirectory(): Promise<PostApiModel[]> {
    return ContentApi.fetch('posts');
  }

  public static fetchPostBySlug(slug: string): Promise<PostApiModel> {
    return ContentApi.fetch<Array<PostApiModel>>(`posts?slug=${slug}`).then(
      ([post]) => post,
    );
  }

  public static fetchAuthorsDirectory(): Promise<AuthorApiModel[]> {
    return ContentApi.fetch('users');
  }

  public static fetchAuthor(id: number | string): Promise<AuthorApiModel> {
    return ContentApi.fetch(`users/${id}`);
  }

  public static fetchAuthorBySlug(slug: string): Promise<AuthorApiModel> {
    return ContentApi.fetch<Array<AuthorApiModel>>(`users?slug=${slug}`).then(
      ([author]) => author,
    );
  }

  public static fetchCategories(): Promise<CategoryApiModel[]> {
    return ContentApi.fetch('categories');
  }

  public static fetchTags(): Promise<TagApiModel[]> {
    return ContentApi.fetch('tags');
  }

  private static fetch<T>(endpoint: string): Promise<T> {
    return axios
      .get<T>(`${ContentApi.API_PREFIX}${endpoint}`)
      .then(({ data }) => data);
  }
}
