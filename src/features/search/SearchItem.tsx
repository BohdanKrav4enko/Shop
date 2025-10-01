import type {Product} from "@/types/types.ts";
import {
    AddToCart,
    AddToFavorite,
    ItemContainer,
    ItemControls,
    ItemImage,
    ItemInfo,
    ItemPrice,
    ItemTitle
} from "../index.ts";
import {Link} from "react-router-dom";
import img from "../../assets/placeholder.webp";

interface CartItemProps {
    item: Product;
    onClose: () => void;
}

export const SearchItem = ({ item, onClose }: CartItemProps) => {
    return (
        <ItemContainer>
            <Link onClick={onClose} to={`/product/${item.id}`}>
                <ItemImage
                    src={item.images[0]}
                    alt={item.title}
                    onError={e => (e.currentTarget.src = img)}
                />
                <ItemInfo>
                    <ItemTitle>{item.title}</ItemTitle>
                    <ItemPrice>${item.price}</ItemPrice>
                </ItemInfo>
            </Link>
            <ItemControls>
                <AddToFavorite product={item} />
                <AddToCart product={item} />
            </ItemControls>
        </ItemContainer>
    );
};
