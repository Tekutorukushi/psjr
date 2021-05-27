import { Author } from '@app/features/author';
import { ContentType } from '@app/features/content_type';
import { Country } from '@app/features/country';
import { PostApiModel } from '@app/api/content_api';

export function normalizeArticle(
  post: PostApiModel,
  {
    authors,
    countries,
    contentTypes,
  }: { authors: Author[]; countries: Country[]; contentTypes: ContentType[] },
) {
  const author = authors.find(({ id }) => id === post.author);
  const country = countries.find(({ id }) => post.categories.includes(id));
  const contentType = contentTypes.find(({ id }) => post.tags.includes(id));

  return {
    slug: post.slug,
    title: post.title.rendered,
    author,
    country,
    contentType,
    date: post.date.valueOf(),
    duration: 10,
    shortText: post.excerpt.rendered,
    fullText: post.content.rendered,
  };
}
