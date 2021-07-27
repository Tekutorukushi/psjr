// @ts-ignore
import Link from 'next/link'

import {Title, Type} from "@app/ui/title";
import {AuthorChooseAvatar} from "@app/ui/author_choose_avatar";
import { ButtonAnimationAuthor } from '@app/ui/button_animation';

import style from './author_preview_card.module.scss'

interface AuthorPreviewCardProps {
    secondary?: boolean;
}
export const AuthorPreviewCard = ({secondary}: AuthorPreviewCardProps) => {
    const authors = [
        {avatar: '/mock/author.jpg', name: 'Floyd Miles'},
        {avatar: '/mock/author.jpg', name: 'Floyd Miles'},
        {avatar: '/mock/author.jpg', name: 'Ronald Richards'},
        {avatar: '/mock/author.jpg', name: 'Ronald Richards'},
        {avatar: '/mock/author.jpg', name: 'Brooklyn Simmons'},
        {avatar: '/mock/author.jpg', name: 'Brooklyn Simmons'},
        {avatar: '/mock/author.jpg', name: 'Esther Howards'},
        {avatar: '/mock/author.jpg', name: 'Brooklyn Simmons'},
        {avatar: '/mock/author.jpg', name: 'Brooklyn Simmons'},
    ]
    return (
        <div className={style.root}>
            <div className={style.container}>
                {secondary ? <Title type={Type.h2} as='h2'>Выбери любимых авторов</Title> : <Title type={Type.h1} as='h1'>Выбери любимых авторов</Title>}
                <div className={style.content}>
                    {authors.slice(0, 8).map((item, i) => (
                      <AuthorChooseAvatar key={i} {...item} />
                    ))}
                </div>
                <Link href='#'>
                    <a><ButtonAnimationAuthor /></a>
                </Link>
            </div>
        </div>
    )
}
