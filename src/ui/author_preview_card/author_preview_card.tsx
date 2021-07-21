// @ts-ignore
import Link from 'next/link'

import {Title, Type} from "@app/ui/title";
import {Button} from "@app/ui/button";
import {AuthorChooseAvatar} from "@app/ui/author_choose_avatar";
import style from './author_preview_card.module.scss'

export const AuthorPreviewCard = () => {
    return (
        <div className={style.root}>
            <div className={style.container}>
                <Title type={Type.h1} as='h1'>Выбери любимых авторов</Title>
                <div className={style.content}>
                    <AuthorChooseAvatar avatar={'/mock/author.jpg'} name='Floyd Miles' />
                    <AuthorChooseAvatar avatar={'/mock/author.jpg'} name='Ronald Richards' />
                    <AuthorChooseAvatar avatar={'/mock/author.jpg'} name='Brooklyn Simmons' />
                    <AuthorChooseAvatar avatar={'/mock/author.jpg'} name='Esther Howards' />
                    <AuthorChooseAvatar avatar={'/mock/author.jpg'} name='Brooklyn Simmons' />
                </div>
                <Link href='/pages/preferences'>
                    <a>
                        <Button type='author' author />
                    </a>
                </Link>
            </div>
        </div>
    )
}
