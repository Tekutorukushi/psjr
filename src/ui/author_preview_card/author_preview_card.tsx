// @ts-ignore
import Link from 'next/link'

import {Title, Type} from "@app/ui/title";
import {AuthorChooseAvatar} from "@app/ui/author_choose_avatar";
import { ButtonAnimation } from '@app/ui/button_animation';

import style from './author_preview_card.module.scss'

export const AuthorPreviewCard = () => {
    const authors = [{avatar: '/mock/author.jpg', name: 'Floyd Miles'},
        {avatar: '/mock/author.jpg', name: 'Ronald Richards'},
        {avatar: '/mock/author.jpg', name: 'Brooklyn Simmons'},
        {avatar: '/mock/author.jpg', name: 'Esther Howards'},
        {avatar: '/mock/author.jpg', name: 'Brooklyn Simmons'}]
    return (
        <div className={style.root}>
            <div className={style.container}>
                <Title type={Type.h1} as='h1'>Выбери любимых авторов</Title>
                <div className={style.content}>
                    {authors.map((item, i) => (
                      <AuthorChooseAvatar key={i} {...item} />
                    ))}
                </div>
                <Link href='/preferences'>
                    <a>
                        <ButtonAnimation type='author' author />
                    </a>
                </Link>
            </div>
        </div>
    )
}
