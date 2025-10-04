import { Share, Link2 } from "lucide-react";
import { StyledButton } from "@/components";
import { useTranslation } from "react-i18next";

interface ProductShareProps {
    onShare: () => void;
    onCopy: () => void;
}

export const ProductShare = ({ onShare, onCopy }: ProductShareProps) => {
    const { t } = useTranslation();
    return (
        <>
            <StyledButton
                onClick={onShare}
                aria-label={t("Share this product")}
            >
                <Share /> {t("Share")}
            </StyledButton>
            <StyledButton
                onClick={onCopy}
                aria-label={t("Copy product link")}
            >
                <Link2 /> {t("Copy link")}
            </StyledButton>
        </>
    );
};
