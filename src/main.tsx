import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {App} from "./app/App.tsx";
import {Provider} from "react-redux";
import {store} from "./app/store.ts";
import {GlobalStyle} from "./styles/GlobalStyle.ts";
import {HashRouter} from "react-router-dom";
import {I18nextProvider} from "react-i18next";
import i18n from "./i18n.ts";
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <GlobalStyle/>
            <HashRouter>
                <I18nextProvider i18n={i18n}>
                    <App/>
                </I18nextProvider>
            </HashRouter>
        </Provider>
    </StrictMode>
)
