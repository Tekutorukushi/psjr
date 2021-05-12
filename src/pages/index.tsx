import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

import style from './index.module.scss';
import ContentApi from '../services/ContentApi';
import { Post } from '../services/ContentApi/interfaces/Post';

interface AppProps {
  posts: Post[]
}
const App: NextPage<AppProps> = ({ posts }) => {
  const router = useRouter();
  const {
    query: { name = 'Username' },
  } = router;

  return (
    <>
      <div className={style.preview}>Hello, {name}</div>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </>
  );
};

App.getInitialProps = async () => {
  const posts = await ContentApi.fetchPostsDirectory()

  return { posts }
}

export default App;
