import Link from 'next/link';

import { Text } from '@app/ui/text';
import { HourglassIcon, PencilIcon } from '@app/ui/icon_12';

import { ArticlePreview } from '../../types';
import styles from './article_preview_card.module.scss';
import { Label } from './label';

interface ArticlePreviewCardProps {
  article: ArticlePreview;
  hideAuthor?: boolean;
}

export function ArticlePreviewCard({
  article,
  hideAuthor = false,
}: ArticlePreviewCardProps) {
  return (
    <section className={styles.card}>
      <aside className={styles.bar}>
        {!hideAuthor && (
          <Link
            href={{
              pathname: '/author/[slug]',
              query: { slug: article.author.slug },
            }}
          >
            <a>{article.author.name}</a>
          </Link>
        )}
        <span>LIKE</span>
        <span>SHARE</span>
      </aside>

      <header className={styles.header}>
        <Text weight={800} size={28} as="h2">
          {article.title}
        </Text>
      </header>

      <div className={styles.info}>
        <Label icon={PencilIcon}>{new Date(article.date).toUTCString()}</Label>
        <Label icon={HourglassIcon}>{article.duration}</Label>
      </div>

      {article.shortText && (
        <div className={styles.content}>
          <p>{article.shortText}</p>
        </div>
      )}

      <footer className={styles.actions}>
        <Link
          href={{ pathname: '/article/[slug]', query: { slug: article.slug } }}
        >
          <a>ЧИТАТЬ/Слушать</a>
        </Link>
      </footer>
    </section>
  );
}
