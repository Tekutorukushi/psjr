import style from './aside.module.scss'
import { InputSearch } from '@app/ui/input_search';
import { ButtonAnimationAuthor, ButtonAnimationCountry } from '@app/ui/button_animation';
import { AuthorMiniCard } from '@app/ui/author_mini_card';
import { CountryCard } from '@app/ui/country_card';
import { TagCard } from '@app/ui/tag_card';
import { IconPencil, IconPhoto, IconPlay, IconSpeaker } from '@app/ui/icons';

export const Aside = () => {
    const authors = [
        {avatar: '/mock/author.jpg', name: 'Cody Fisher', onClick: undefined},
        {avatar: '/mock/author.jpg', name: 'Cody Fisher', onClick: undefined},
        {avatar: '/mock/author.jpg', name: 'Floyd Miles', onClick: undefined},
        {avatar: '/mock/author.jpg', name: 'Floyd Miles', onClick: undefined},
        {avatar: '/mock/author.jpg', name: 'Floyd Miles', onClick: undefined},
        {avatar: '/mock/author.jpg', name: 'Wade Warren', onClick: undefined},
        {avatar: '/mock/author.jpg', name: 'Wade Warren', onClick: undefined},
        {avatar: '/mock/author.jpg', name: 'Theresa Webb', onClick: undefined},
        {avatar: '/mock/author.jpg', name: 'Theresa Webb', onClick: undefined},
        {avatar: '/mock/author.jpg', name: 'Dianne Russell', onClick: undefined},
        {avatar: '/mock/author.jpg', name: 'Dianne Russell', onClick: undefined},
    ]

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
        <aside className={style.aside}>
            <InputSearch placeholder='Поиск' />
            <div className={style.container}>
                <div className={style.authors}>
                    {authors.slice(0, 10).map((item, i) => (
                        <AuthorMiniCard small {...item} />
                    ))}
                </div>
                <ButtonAnimationAuthor>Все авторы</ButtonAnimationAuthor>
            </div>
            <div className={style.container}>
                <div className={style.countries}>
                    {countries.slice(0, 8).map((item, i) => (
                        <CountryCard {...item} />
                    ))}
                </div>
                <ButtonAnimationCountry>Все авторы</ButtonAnimationCountry>
            </div>
            <div className={style.container}>
                <div className={style.tags}>
                    {tags.map((item, i) => (
                        <TagCard key={i} {...item} />
                    ))}
                </div>
            </div>
        </aside>
    );
}
