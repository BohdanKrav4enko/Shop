import {Link} from "react-router-dom";
import {Title} from "../index.ts";
import {useTranslation} from "react-i18next";

export const HeaderLogo = () => {
    const {t} = useTranslation();
    return (
        <Link to="/" aria-label="Go to homepage">
            <Title>{t('SHOP')}</Title>
        </Link>
        )
};
