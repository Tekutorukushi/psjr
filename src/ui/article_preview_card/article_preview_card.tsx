// @ts-ignore
import Link from 'next/link'

import {ArticleButtonBar} from "@app/ui/article_button_bar";
import {Title, Type} from "@app/ui/title";
import {PencilIcon} from "@app/ui/icons/pencil";
import {HourglassIcon} from "@app/ui/icons";
import {Button} from "@app/ui/button";
import style from './article_preview_card.module.scss'
import {AudioWave} from "@app/ui/audiowave";

interface ArticlePreviewCard {
    avatarAuthor: string;
    linkAuthor: string;
    onClickDownload: void;
    onClickShare: void;
    title: string;
    type?: string;
    date: string;
    time: number;
    text?: string;
    listen?: string;
    linkArticle?: string;
}

export const ArticlePreviewCard = ({ avatarAuthor, linkAuthor, onClickDownload, onClickShare, title, type, date, time, text, listen, linkArticle }: ArticlePreviewCard) => {

    const renderRead = () => (
        <>
            <div className={style.content}>
                <p>{text}</p>
            </div>
            <div className={style.footer}>
                <Link href={linkArticle}>
                    <a>
                        <Button onClick={undefined} arrow>Читать</Button>
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
                <Button type='outline' play>Слушать</Button>
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
                    <Title type={Type.h1} as='h1' children={undefined}>{title}</Title>
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
                    {text && renderRead()}
                    {listen && renderListen()}
                </div>
            </div>
        </div>
    )
}
