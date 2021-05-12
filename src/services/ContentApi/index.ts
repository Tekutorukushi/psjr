import axios from 'axios';

import { Post } from './interfaces/Post';

export default class ContentApi {
  private static API_PREFIX = 'https://psjradmin.avs.io/wp-json/wp/v2/'

  public static fetchPostsDirectory(): Promise<Post[]> {
    return ContentApi.fetch('posts')
  }

  private static fetch<T>(endpoint: string): Promise<T> {
    return axios.get<T>(`${ContentApi.API_PREFIX}${endpoint}`).then(({ data }) => data)
  }
}
