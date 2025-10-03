import { HeaderButtons, HeaderModals, HeaderLogo, HeaderContainer} from "./index.ts";

export const Header = () => {
    return (
        <>
            <HeaderContainer>
                <HeaderLogo />
                <HeaderButtons/>
            </HeaderContainer>
            <HeaderModals/>
        </>
    );
};
