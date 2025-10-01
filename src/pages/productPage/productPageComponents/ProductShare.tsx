import { Share, Link2 } from "lucide-react";
import { StyledButton } from "@/components";

interface ProductShareProps {
    onShare: () => void;
    onCopy: () => void;
}

export const ProductShare = ({ onShare, onCopy }: ProductShareProps) => (
    <>
        <StyledButton
            onClick={onShare}
            aria-label="Share this product"
        >
            <Share /> Share
        </StyledButton>
        <StyledButton
            onClick={onCopy}
            aria-label="Copy product link"
        >
            <Link2 /> Copy link
        </StyledButton>
    </>
);
