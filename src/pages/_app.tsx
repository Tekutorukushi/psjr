import {AppProps} from "next/app";
import { fork, Scope, serialize } from 'effector';
import { Provider } from 'effector-react/ssr';
import { isBrowser } from '@app/lib/is_browser';
import { root } from '@app/lib/root_domain';
import {Header} from "@app/ui/header";
import {Aside} from "@app/ui/aside";
import { SearchModal } from '@app/ui/search';
import './app.scss'

let clientScope: Scope;

function App({ Component, pageProps, showAside = false }: AppProps) {
    const scope = fork(root, {
        values: {
            ...(clientScope ? serialize(clientScope, { onlyChanges: true }) : {}),
            ...(pageProps.initialState ?? {}),
        },
    });

    if (isBrowser()) {
        clientScope = scope;
    }

    return (
        <Provider value={scope}>
            <Header isLogin />
            <div className='main'>
                <Component {...pageProps} />
                {showAside && <Aside />}
                <SearchModal />
            </div>
        </Provider>
    )
}

export default App
