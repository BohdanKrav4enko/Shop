import {LanguageSelector, SettingsWrapper, ThemeToggle} from "@/components";

export const SettingsSection = () => {
    return (
        <SettingsWrapper>
            <ThemeToggle/>
            <LanguageSelector/>
        </SettingsWrapper>
    );
};

