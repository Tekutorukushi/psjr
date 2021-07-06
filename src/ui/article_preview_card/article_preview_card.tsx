import {ArticleButtonBar} from "@app/ui/article_button_bar";
import {Title, Type} from "@app/ui/title";
import style from './article_preview_card.module.scss'
import {PencilIcon} from "@app/ui/icons/pencil";
import {HourglassIcon} from "@app/ui/icons";
import {Button} from "@app/ui/button";

export const ArticlePreviewCard = () => {
    return (
        <div className={style.root}>
            <div className={style.head}>
                <div className={style.link} />
            </div>
            <div className={style.body}>
                <div className={style.bar}>
                    <ArticleButtonBar
                        avatarAuthor={'/mock/author.jpg'}
                        linkAuthor='/'
                        onClickLike={undefined}
                        onClickDownload={undefined}
                        onClickShare={undefined}
                    />
                </div>
                <div className={style.container}>
                    <Title type={Type.h1} as='h1' children={undefined}>Таиланд открылся для туристов</Title>
                    <div className={style.info}>
                        <div className={style.row}>
                            <PencilIcon className={style.icon} />
                            <span>Вчера</span>
                        </div>
                        <div className={style.row}>
                            <HourglassIcon className={style.icon} />
                            <span>Читать 5 минут</span>
                        </div>
                    </div>
                    <div className={style.content}>Приятно, граждане, наблюдать, как активно развивающиеся страны третьего мира, инициированные исключительно синтетически, описаны максимально подробно. Приятно, граждане, наблюдать, как  Приятно, граждане, наблюдать, как кто то где то, что то строчит.</div>
                    <div className={style.footer}>
                        <Button onClick={undefined} icon={undefined} children={undefined}>Читать</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
