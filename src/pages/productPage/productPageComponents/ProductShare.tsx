import { Share, Link2 } from "lucide-react";
import { StyledButton } from "@/components";

interface ProductShareProps {
    onShare: () => void;
    onCopy: () => void;
}

export const ProductShare = ({ onShare, onCopy }: ProductShareProps) => (
    <>
        <StyledButton onClick={onShare}>
            <Share /> Share
        </StyledButton>
        <StyledButton onClick={onCopy}>
            <Link2 /> Copy link
        </StyledButton>
    </>
);
