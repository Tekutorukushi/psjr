import {ArticlePreviewCard} from "@app/ui/article_preview_card";
import classes from './feed.module.scss'

export const FeedPage = () => {
    return (
        <div className={classes.feed}>
            <ArticlePreviewCard
                avatarAuthor={'/mock/author.jpg'}
                linkAuthor='/'
                onClickShare={undefined}
                onClickDownload={undefined}
                title='Таиланд открылся для туристов'
                date='Вчера'
                time={5}
                text='Приятно, граждане, наблюдать, как активно развивающиеся страны третьего мира, инициированные исключительно синтетически, описаны максимально подробно. Приятно, граждане, наблюдать, как  Приятно, граждане, наблюдать, как кто то где то, что то строчит.'
                linkArticle='/page'
            />
            <ArticlePreviewCard
                avatarAuthor={'/mock/author.jpg'}
                linkAuthor='/'
                onClickShare={undefined}
                onClickDownload={undefined}
                title='Как я поехал нахуй'
                type='Подкаст'
                date='Вчера'
                time={5}
                listen={true}
            />
        </div>
    );
};
