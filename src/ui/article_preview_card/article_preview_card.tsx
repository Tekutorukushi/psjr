import Link from 'next/link'
import clsx from 'clsx';
import {ArticleButtonBar} from "@app/ui/article_button_bar";
import {Title, Type} from "@app/ui/title";
import { ButtonAnimationArrow } from '@app/ui/button_animation';
import {AudioWave} from "@app/ui/audiowave";
import { ArticleInformers } from '@app/ui/acticle_informers';

import style from './article_preview_card.module.scss'

interface ArticlePreviewCardProps {
    secondary?: boolean;
    author?: boolean;
    avatarAuthor?: string;
    linkAuthor?: string;
    onClickDownload?: void;
    onClickShare?: void;
    title: string;
    type?: string;
    date?: string;
    time?: string;
    content?: string | object;
    listen?: string;
    linkArticle?: string;
}

export const ArticlePreviewCard = ({ secondary, author, avatarAuthor, linkAuthor, onClickDownload, onClickShare, title, type, date, time, content, listen, linkArticle }: ArticlePreviewCardProps) => {

    const renderRead = () => (
        <>
            <div className={secondary ? clsx(style.content, style.content_secondary) : style.content}>
                {content}
            </div>
            <div className={style.footer}>
                <Link href={linkArticle}>
                    <a><ButtonAnimationArrow>Читать</ButtonAnimationArrow></a>
                </Link>
            </div>
        </>
    )

    const renderListen = () => (
        <>
            <div className={style.content}>
                {listen && <AudioWave url={listen} />}
            </div>
        </>
    )

    return (
        <div className={style.root}>
            <div className={style.head}>
                <div className={style.link} />
            </div>
            <div className={style.body}>
                <div className={style.bar}>
                    <ArticleButtonBar
                        author={author}
                        avatarAuthor={avatarAuthor}
                        linkAuthor={linkAuthor}
                        onClickDownload={onClickDownload}
                        onClickShare={onClickShare}
                    />
                </div>
                <div className={style.container}>
                    {secondary ? <Title type={Type.h2} as='h2'>{title}</Title> : <Title type={Type.h1} as='h1'>{title}</Title>}
                    <ArticleInformers type={type} date={date} time={time} />
                    {content && renderRead()}
                    {listen && renderListen()}
                </div>
            </div>
        </div>
    )
}
