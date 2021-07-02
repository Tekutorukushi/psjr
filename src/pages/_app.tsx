import './app.scss'
import {Header} from "../ui/header/header";
import {Aside} from "../ui/aside";

function App({ Component, pageProps }) {
  return <>
    <Header />
    <main className='main'>
      <Component {...pageProps} />
      <Aside />
    </main>
  </>
}

export default App
