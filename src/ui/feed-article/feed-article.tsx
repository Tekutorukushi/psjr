import style from './feed-article.module.scss'
import {LikeIcon, ShareIcon} from "@app/ui/icons";

interface FeedArticle {
    url: string
}

export const FeedArticle = ({ url }: FeedArticle) => {
    return (
        <div className={style.root}>
            <div className={style.head}>
                <div className={style.link} />
            </div>
            <div className={style.body}>
                <div className={style.buttons}>
                    <div className={style.avatar} style={{ backgroundImage: `url(${url})` }} />
                    <LikeIcon />
                    <ShareIcon />
                </div>
                <div className={style.content}>
                    <div className={style.title}>Таиланд открылся для туристов</div>
                </div>
            </div>
        </div>
    )
}
