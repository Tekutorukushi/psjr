import classes from './feed.module.scss'
import {FeedArticle} from "@app/ui/feed-article";

export const FeedPage = () => {
    return (
        <div className={classes.feed}>
            <FeedArticle url={'/mock/author.jpg'} />
        </div>
    );
};
