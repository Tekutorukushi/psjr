import { ButtonBack } from '@app/ui/button_back';
import { AuthorChooseAvatar } from '@app/ui/author_choose_avatar';
import { ButtonAnimationAuthor, ButtonAnimationCountry } from '@app/ui/button_animation';
import { CountryCard } from '@app/ui/country_card/country_card';
import { TagCard } from '@app/ui/tag_card';
import { IconPencil, IconPhoto, IconPlay, IconSpeaker } from '@app/ui/icons';
import { AuthorMiniCard } from '@app/ui/author_mini_card';

import style from './preferences.module.scss'

export const PagePreferences = () => {
    const authors = [{avatar: '/mock/author.jpg', name: 'Floyd Miles'},
        {avatar: '/mock/author.jpg', name: 'Ronald Richards'},
        {avatar: '/mock/author.jpg', name: 'Ronald Richards'},
        {avatar: '/mock/author.jpg', name: 'Brooklyn Simmons'},
        {avatar: '/mock/author.jpg', name: 'Brooklyn Simmons'},
        {avatar: '/mock/author.jpg', name: 'Brooklyn Simmons'},
        {avatar: '/mock/author.jpg', name: 'Esther Howards'},
        {avatar: '/mock/author.jpg', name: 'Esther Howards'},
        {avatar: '/mock/author.jpg', name: 'Esther Howards'},
        {avatar: '/mock/author.jpg', name: 'Brooklyn Simmons'},
        {avatar: '/mock/author.jpg', name: 'Brooklyn Simmons'}]

    const countries = [
        {icon: '/mock/spain.svg', name: 'Испания'},
        {icon: '/mock/britain.svg', name: 'Великобритания'},
        {icon: '/mock/italian.svg', name: 'Италия'},
        {icon: '/mock/spain.svg', name: 'Испания'},
        {icon: '/mock/britain.svg', name: 'Великобритания'},
        {icon: '/mock/italian.svg', name: 'Италия'},
        {icon: '/mock/spain.svg', name: 'Испания'},
        {icon: '/mock/britain.svg', name: 'Великобритания'},
        {icon: '/mock/italian.svg', name: 'Италия'},
    ]

    const tags = [
        {icon: <IconPencil color='#20A0FF' />, name: 'Статьи'},
        {icon: <IconPlay color='#D36CFF' />, name: 'Видео'},
        {icon: <IconSpeaker color='#FFB700' />, name: 'Подкасты'},
        {icon: <IconPhoto color='#FF521F' />, name: 'Фотографии'},
    ]

    return (
        <div className={style.preferences}>
            <ButtonBack>Назад</ButtonBack>
            <div className={style.container}>
                <div className={style.content}>
                    <div className={style.authors}>
                        {authors.slice(0, 9).map((item, i) => (
                            <AuthorMiniCard small key={i} {...item} />
                        ))}
                    </div>
                    <ButtonAnimationAuthor />
                </div>
                <div className={style.content}>
                    <div className={style.countries}>
                        {countries.map((item, i) => (
                            <CountryCard small='small' key={i} {...item} />
                        ))}
                    </div>
                    <ButtonAnimationCountry />
                </div>
                <div className={style.content}>
                    <div className={style.tags}>
                        {tags.map((item, i) => (
                            <TagCard key={i} {...item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}