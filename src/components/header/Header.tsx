import { HeaderButtons, HeaderModals, HeaderLogo, HeaderContainer} from "./index.ts";
import LanguageSelector from "../languageSelector/LanguageSelector.tsx";

export const Header = () => {
    return (
        <>
            <HeaderContainer>
                <HeaderLogo />
                <LanguageSelector/>
                <HeaderButtons/>
            </HeaderContainer>
            <HeaderModals/>
        </>
    );
};
