import {AdminBadge, HeaderButtons, HeaderModals, HeaderLogo, HeaderContainer} from "./index.ts";

export const Header = () => {
    return (
        <>
            <HeaderContainer>
                <AdminBadge />
                <HeaderLogo />
                <HeaderButtons/>
            </HeaderContainer>
            <HeaderModals/>
        </>
    );
};
