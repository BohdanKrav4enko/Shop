import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {App} from "./app/App.tsx";
import {Provider} from "react-redux";
import {store} from "./app/store.ts";
import {GlobalStyle} from "./styles/GlobalStyle.ts";
import {ScrollToTop} from "./components";
import {HashRouter} from "react-router-dom";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <GlobalStyle/>
            <HashRouter>
                <App/>
            </HashRouter>
            <ScrollToTop/>
        </Provider>
    </StrictMode>
)
