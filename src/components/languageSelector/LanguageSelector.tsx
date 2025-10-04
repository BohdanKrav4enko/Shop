import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { DropdownWrapper, DropdownButton, DropdownList, DropdownItem } from "@/components";

const languages = [
    { code: "ua", label: "UA" },
    { code: "ru", label: "RU" },
    { code: "en", label: "EN" },
    { code: "de", label: "DE" },
    { code: "fr", label: "FR" },
    { code: "es", label: "ES" },
];

export const LanguageSelector: React.FC = () => {
    const { i18n } = useTranslation();
    const [open, setOpen] = useState(false);

    const handleSelect = (code: string) => {
        i18n.changeLanguage(code);
        setOpen(false);
    };

    const currentLang =
        languages.find(l => i18n.language.startsWith(l.code))?.label || "EN";

    return (
        <DropdownWrapper>
            <DropdownButton onClick={() => setOpen(prev => !prev)}>
                {currentLang} ▼
            </DropdownButton>
            <DropdownList open={open}>
                {languages.map(lang => (
                    <DropdownItem key={lang.code} onClick={() => handleSelect(lang.code)}>
                        {lang.label}
                    </DropdownItem>
                ))}
            </DropdownList>
        </DropdownWrapper>
    );
};

export default LanguageSelector;
