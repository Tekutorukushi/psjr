// @ts-ignore
import React, { useState } from 'react';
// @ts-ignore
import Link from 'next/link'

import {DownloadIcon, LikeIcon, ShareIcon} from "@app/ui/icons";

import style from "./article_button_bar.module.scss";

interface ArticleButtonBarProps {
    author?: boolean
    avatarAuthor?: string
    linkAuthor?: string
    onClickShare?: void
    onClickDownload?: void
}

export const ArticleButtonBar = ({ author, avatarAuthor, linkAuthor, onClickShare, onClickDownload }: ArticleButtonBarProps) => {
    const [like, isLike] = useState(false);

    const toggle = () => {
        isLike(!like);
    };

    return (
        <div className={style.root}>
            {author ? '' :
                <Link href={linkAuthor}>
                    <a className={style.avatar} style={{ backgroundImage: `url(${avatarAuthor})` }} />
                </Link>
            }
            <LikeIcon onClick={toggle} className={like ? style.icon_active : ''} />
            <ShareIcon onClick={onClickShare} />
            <DownloadIcon onClick={onClickDownload} />
        </div>
    )
}
