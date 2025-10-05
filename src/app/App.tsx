import {
    BurgerMenu,
    Container,
    Footer,
    Header,
    Notification, ScrollToTop,
    ScrollToTopOnRouteChange,
    useAppSelector
} from "@/components";
import {AppRoutes} from "@/routes";
import 'leaflet/dist/leaflet.css';
import styled from "styled-components";
import {initAuthListener} from "@/app/firebase/authListener.ts";
import {store} from "@/app/store.ts";
import {setUser} from "@/app/authSlice.ts";
import {darkTheme, lightTheme} from "@/theme";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material";

initAuthListener(store);

const MainLayout = styled.div`
    display: flex;
    width: 100%;
`;

export const App = () => {
    const themeMode = useAppSelector(state => state.app.themeMode);
    const notification = useAppSelector((state) => state.app.notification);
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
        const parsedUser = JSON.parse(savedUser);
        store.dispatch(setUser(parsedUser));
    }
    return   <>
        <MuiThemeProvider theme={themeMode === "light" ? lightTheme : darkTheme}>
            <StyledThemeProvider theme={themeMode === "light" ? lightTheme : darkTheme}>
                <CssBaseline />
                <ScrollToTopOnRouteChange />
                <Header />
                <MainLayout>
                    <BurgerMenu />
                    <Container>
                        {notification && (
                            <Notification
                                key={notification.id}
                                message={notification.message}
                                type={notification.type}
                                duration={notification.duration}
                            />
                        )}
                        <AppRoutes />
                    </Container>
                </MainLayout>
                <Footer />
                <ScrollToTop/>
            </StyledThemeProvider>
        </MuiThemeProvider>
    </>
}
