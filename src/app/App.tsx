import {Header} from "../components/header/Header.tsx";
import {AppRoutes} from "../routes";
import {Container} from "../components/container/Container.tsx";
import {useAppSelector} from "../components/hooks/hooks.ts";
import {ErrorAlert} from "../components/errorAlert/ErrorAlert.tsx";

export const App = () => {
    const error = useAppSelector((state) => state.app.error);

    return <>
        <Header/>
        <Container>
            {error && <ErrorAlert message={error} />}
            <AppRoutes/>
        </Container>
    </>
}

