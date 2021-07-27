import {ArticlePreviewCard} from "@app/ui/article_preview_card";
import {AuthorPreviewCard} from "@app/ui/author_preview_card/author_preview_card";

import style from './feed.module.scss'

export const FeedPage = () => {
    return (
        <div className={style.feed}>
            <ArticlePreviewCard
                avatarAuthor={'/mock/author.jpg'}
                linkAuthor='/'
                onClickShare={undefined}
                onClickDownload={undefined}
                title='Таиланд открылся для туристов'
                date='Вчера'
                time='5 минут'
                content='Приятно, граждане, наблюдать, как активно развивающиеся страны третьего мира, инициированные исключительно синтетически, описаны максимально подробно. Приятно, граждане, наблюдать, как  Приятно, граждане, наблюдать, как кто то где то, что то строчит.'
                linkArticle='/'
            />
            <ArticlePreviewCard
                avatarAuthor={'/mock/author.jpg'}
                linkAuthor='/'
                onClickShare={undefined}
                onClickDownload={undefined}
                title='Как я поехал нахуй'
                type='Подкаст'
                date='Вчера'
                time='5 минут'
                listen='https://www.mfiles.co.uk/mp3-downloads/brahms-st-anthony-chorale-theme-two-pianos.mp3'
            />
            <AuthorPreviewCard />
            <ArticlePreviewCard
                avatarAuthor={'/mock/author.jpg'}
                linkAuthor='/'
                onClickShare={undefined}
                onClickDownload={undefined}
                title='Уганда: дикие животные, ведьмы и море самогона | Настоящая Африка'
                date='Вчера'
                content={<><img src='/mock/uganda.jpg' alt=''/></>}
                linkArticle='/page'
            />
        </div>
    );
};
