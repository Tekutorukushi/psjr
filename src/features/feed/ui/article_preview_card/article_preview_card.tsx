import Link from 'next/link';

import { GaloButton } from '@app/ui/galo-button';
import { Text, TypographyType } from '@app/ui/text';
import { ArrowIcon, HourglassIcon, PencilIcon } from '@app/ui/icon_12'
import { Avatar } from '@app/ui/avatar'
import { DownloadIcon, LikeIcon, ShareIcon } from '@app/ui/icons'

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
        {!hideAuthor && article.author && (
          <Link
            href={{
              pathname: '/author/[slug]',
              query: { slug: article.author.slug },
            }}
          >
            <Avatar url={'/mock/author.jpg'} />
          </Link>
        )}
        <LikeIcon />
        <ShareIcon />
        <DownloadIcon />
      </aside>

      <header className={styles.header}>
        <Text type={TypographyType.h2} as="h2">
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
          <GaloButton icon={<ArrowIcon size={'large'} /> } onClick={() => {}}>
            Читать
          </GaloButton>
        </Link>
      </footer>
    </section>
  );
}
