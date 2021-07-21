// @ts-ignore
import Link from 'next/link'

import {ArticleButtonBar} from "@app/ui/article_button_bar";
import {Title, Type} from "@app/ui/title";
import {PencilIcon} from "@app/ui/icons/pencil";
import {HourglassIcon} from "@app/ui/icons";
import {AudioWave} from "@app/ui/audiowave";
import {ButtonAnimation} from "@app/ui/button_animation";

import style from './article_preview_card.module.scss'

interface ArticlePreviewCardProps {
    avatarAuthor?: string;
    linkAuthor?: string;
    onClickDownload?: void;
    onClickShare?: void;
    title: string;
    type?: string;
    date?: string;
    time?: number;
    content?: string | object;
    listen?: string;
    linkArticle?: string;
}

export const ArticlePreviewCard = ({ avatarAuthor, linkAuthor, onClickDownload, onClickShare, title, type, date, time, content, listen, linkArticle }: ArticlePreviewCardProps) => {

    const renderRead = () => (
        <>
            <div className={style.content}>
                {content}
            </div>
            <div className={style.footer}>
                <Link href={linkArticle}>
                    <a>
                        <ButtonAnimation arrow>Читать</ButtonAnimation>
                    </a>
                </Link>
            </div>
        </>
    )

    const renderListen = () => (
        <>
            <div className={style.content}>
                {listen && <AudioWave />}
            </div>
            <div className={style.footer}>
                <ButtonAnimation type='play' play />
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
                        avatarAuthor={avatarAuthor}
                        linkAuthor={linkAuthor}
                        onClickDownload={onClickDownload}
                        onClickShare={onClickShare}
                    />
                </div>
                <div className={style.container}>
                    <Title type={Type.h1} as='h1'>{title}</Title>
                    <div className={style.info}>
                        {type &&
                        <div className={style.row}>
                          <div className={style.type}>{type}</div>
                        </div>
                        }
                        <div className={style.row}>
                            <PencilIcon className={style.icon} />
                            <span>{date}</span>
                        </div>
                        <div className={style.row}>
                            <HourglassIcon className={style.icon} />
                            <span>Читать {time} минут</span>
                        </div>
                    </div>
                    {content && renderRead()}
                    {listen && renderListen()}
                </div>
            </div>
        </div>
    )
}
