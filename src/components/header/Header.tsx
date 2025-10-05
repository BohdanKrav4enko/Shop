import { HeaderButtons, HeaderModals, HeaderLogo, HeaderContainer} from "./index.ts";
import {SettingsSection} from "@/components";

export const Header = () => {
    return (
        <>
            <HeaderContainer>
                <HeaderLogo />
                <SettingsSection/>
                <HeaderButtons/>
            </HeaderContainer>
            <HeaderModals/>
        </>
    );
};
