// @ts-ignore
import Link from 'next/link'
import {DownloadIcon, LikeIcon, ShareIcon} from "@app/ui/icons";
import style from "./article_button_bar.module.scss";

interface ArticleButtonBar {
    avatarAuthor: string
    linkAuthor: string
    onClickLike: void
    onClickShare: void
    onClickDownload: void
}

export const ArticleButtonBar = ({ avatarAuthor, linkAuthor, onClickLike, onClickShare, onClickDownload }: ArticleButtonBar) => {
    return (
        <div className={style.root}>
            <Link href={linkAuthor}>
                <a className={style.avatar} style={{ backgroundImage: `url(${avatarAuthor})` }} />
            </Link>
            <LikeIcon onClick={onClickLike} />
            <ShareIcon onClick={onClickShare} />
            <DownloadIcon onClick={onClickDownload} />
        </div>
    )
}
