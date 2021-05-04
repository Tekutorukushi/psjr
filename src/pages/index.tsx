import { useRouter } from 'next/router';
import React from 'react';

import style from './index.module.scss';

const App = () => {
  const router = useRouter();
  const {
    query: { name = 'Username' },
  } = router;

  return <div className={style.preview}>Hello, {name}</div>;
};

export default App;
