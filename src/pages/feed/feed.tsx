import classes from './feed.module.scss'
import {ArticlePreviewCard} from "@app/ui/article_preview_card";

export const FeedPage = () => {
    return (
        <div className={classes.feed}>
            <ArticlePreviewCard
                avatarAuthor={'/mock/author.jpg'}
                linkAuthor='/'
                onClickLike={undefined}
                onClickShare={undefined}
                onClickDownload={undefined}
                title='Таиланд открылся для туристов'
                date='Вчера'
                time={5}
                text='Приятно, граждане, наблюдать, как активно развивающиеся страны третьего мира, инициированные исключительно синтетически, описаны максимально подробно. Приятно, граждане, наблюдать, как  Приятно, граждане, наблюдать, как кто то где то, что то строчит.'
                linkArticle='/'
            />
        </div>
    );
};
