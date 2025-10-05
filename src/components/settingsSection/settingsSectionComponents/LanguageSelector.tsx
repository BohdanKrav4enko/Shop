import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag";
import {DropdownButton, DropdownItem, DropdownList, DropdownWrapper} from "@/components";

const languages = [
    { code: "en", label: "EN", countryCode: "GB" },
    { code: "ua", label: "UA", countryCode: "UA" },
    { code: "ru", label: "RU", countryCode: "RU" },
    { code: "de", label: "DE", countryCode: "DE" },
    { code: "fr", label: "FR", countryCode: "FR" },
    { code: "es", label: "ES", countryCode: "ES" },
    { code: "zh", label: "ZH", countryCode: "CN" },
];

export const LanguageSelector: React.FC = () => {
    const { i18n } = useTranslation();
    const [open, setOpen] = useState(false);

    const handleSelect = (code: string) => {
        i18n.changeLanguage(code);
        setOpen(false);
    };

    const currentLang =
        languages.find(l => i18n.language.startsWith(l.code)) || languages[0];

    return (
        <DropdownWrapper>
            <DropdownButton onClick={() => setOpen(prev => !prev)}>
                <ReactCountryFlag
                    countryCode={currentLang.countryCode}
                    svg
                    style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "2px",
                        marginRight: "6px",
                    }}
                />
                {currentLang.label} ▼
            </DropdownButton>
            <DropdownList open={open}>
                {languages.map(lang => (
                    <DropdownItem key={lang.code} onClick={() => handleSelect(lang.code)}>
                        <ReactCountryFlag
                            countryCode={lang.countryCode}
                            svg
                            style={{
                                width: "20px",
                                height: "20px",
                                borderRadius: "2px",
                                marginRight: "8px",
                            }}
                        />
                        {lang.label}
                    </DropdownItem>
                ))}
            </DropdownList>
        </DropdownWrapper>
    );
};

export default LanguageSelector;
