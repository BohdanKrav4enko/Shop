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
            <Link to={`/product/${item.id}`} onClick={onClose} aria-label={`View details of ${item.title}`}>
                <ItemImage
                    src={item.images[0]}
                    alt={`Image of ${item.title}`}
                    onError={e => (e.currentTarget.src = img)}
                    width="80"
                    height="80"
                    loading="lazy"
                />
                <ItemInfo>
                    <ItemTitle>{item.title}</ItemTitle>
                    <ItemPrice>${item.price}</ItemPrice>
                </ItemInfo>
            </Link>
            <ItemControls>
                <AddToFavorite product={item} aria-label={`Add ${item.title} to favorites`} />
                <AddToCart product={item} aria-label={`Add ${item.title} to cart`} />
            </ItemControls>
        </ItemContainer>

    );
};
