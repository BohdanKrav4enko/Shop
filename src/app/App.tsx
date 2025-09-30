import {Header} from "../components/header/Header.tsx";
import {AppRoutes} from "../routes";
import {Container} from "../components/container/Container.tsx";
import {useAppSelector} from "../components/hooks/hooks.ts";
import {ErrorAlert} from "../components/errorAlert/ErrorAlert.tsx";
import {Footer} from "../components/footer/Footer.tsx";
import 'leaflet/dist/leaflet.css';
import {ScrollToTopOnRouteChange} from "../components/scrollToTopOnRouteChange/ScrollToTopOnRouteChange.tsx";
import styled from "styled-components";
import {BurgerMenu} from "../components/burgerMenu/BurgerMenu.tsx";

const MainLayout = styled.div`
    display: flex;
    width: 100%;
`;

export const App = () => {
    const error = useAppSelector((state) => state.app.error);

    return <>
        <ScrollToTopOnRouteChange />
        <Header/>
        <MainLayout>
            <BurgerMenu/>
            <Container>
                {error && <ErrorAlert message={error} />}
                <AppRoutes/>
            </Container>
        </MainLayout>
        <Footer/>
    </>
}
