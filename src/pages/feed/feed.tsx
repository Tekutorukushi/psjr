import classes from './feed.module.scss'
import {ArticlePreviewCard} from "@app/ui/article_preview_card";

export const FeedPage = () => {
    return (
        <div className={classes.feed}>
            <ArticlePreviewCard />
        </div>
    );
};
