import {Header, useAppSelector, Container, Notification, Footer, ScrollToTopOnRouteChange, BurgerMenu} from "@/components";
import {AppRoutes} from "@/routes";
import 'leaflet/dist/leaflet.css';
import styled from "styled-components";
import {initAuthListener} from "@/app/firebase/authListener.ts";
import {store} from "@/app/store.ts";

initAuthListener(store);

const MainLayout = styled.div`
    display: flex;
    width: 100%;
`;

export const App = () => {
    const notification = useAppSelector((state) => state.app.notification);

    return <>
        <ScrollToTopOnRouteChange/>
        <Header/>
        <MainLayout>
            <BurgerMenu/>
            <Container>
                {notification
                    &&
                    <Notification key={notification.id}
                                  message={notification.message}
                                  type={notification.type}
                                  duration={notification.duration}/>}
                <AppRoutes/>
            </Container>
        </MainLayout>
        <Footer/>
    </>
}
