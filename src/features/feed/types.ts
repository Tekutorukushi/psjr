import { Article } from '../article';

export type ArticlePreview = Omit<Article, 'fullText'>;
