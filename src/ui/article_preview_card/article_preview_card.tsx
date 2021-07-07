// @ts-ignore
import Link from 'next/link'

import {ArticleButtonBar} from "@app/ui/article_button_bar";
import {Title, Type} from "@app/ui/title";
import {PencilIcon} from "@app/ui/icons/pencil";
import {HourglassIcon} from "@app/ui/icons";
import {Button} from "@app/ui/button";
import style from './article_preview_card.module.scss'

interface ArticlePreviewCard {
    avatarAuthor: string;
    linkAuthor: string;
    onClickLike: void;
    onClickDownload: void;
    onClickShare: void;
    title: string;
    date: string;
    time: number;
    text: string;
    linkArticle: string;
}

export const ArticlePreviewCard = ({ avatarAuthor, linkAuthor, onClickLike, onClickDownload, onClickShare, title, date, time, text, linkArticle }: ArticlePreviewCard) => {
    return (
        <div className={style.root}>
            <div className={style.head}>
                <div className={style.link} />
            </div>
            <div className={style.body}>
                <div className={style.bar}>
                    <ArticleButtonBar
                        avatarAuthor={avatarAuthor}
                        linkAuthor={linkAuthor}
                        onClickLike={onClickLike}
                        onClickDownload={onClickDownload}
                        onClickShare={onClickShare}
                    />
                </div>
                <div className={style.container}>
                    <Title type={Type.h1} as='h1' children={undefined}>{title}</Title>
                    <div className={style.info}>
                        <div className={style.row}>
                            <PencilIcon className={style.icon} />
                            <span>{date}</span>
                        </div>
                        <div className={style.row}>
                            <HourglassIcon className={style.icon} />
                            <span>Читать {time} минут</span>
                        </div>
                    </div>
                    <div className={style.content}>{text}</div>
                    <div className={style.footer}>
                        <Link href={linkArticle}>
                            <Button onClick={undefined} children={undefined}>Читать</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
