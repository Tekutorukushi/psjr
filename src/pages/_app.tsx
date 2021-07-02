// @ts-ignore
import {AppProps} from "next/app";

import {Header} from "@app/ui/header";
import {Aside} from "@app/ui/aside";
import './app.scss'

function App({ Component, pageProps }: AppProps) {
    return <>
        <Header />
        <div className='main'>
            <Component {...pageProps} />
            <Aside />
        </div>
    </>
}

export default App
