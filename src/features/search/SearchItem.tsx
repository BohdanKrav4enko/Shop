import type {Product} from "../../types/types.ts";
import {Info, ItemContainer, Price, Title, Image} from "../cart/styles/CartItemStyle.ts";
import {Link} from "react-router-dom";

interface CartItemProps {
    item: Product;
    onClose: () => void;
}
export const SearchItem = ({item, onClose}: CartItemProps) => {
    return (
        <Link onClick={onClose} to={`/product/${item.id}`}>
            <ItemContainer>
                <Image src={item.images[0]} alt={item.title}/>
                <Info>
                    <Title>{item.title}</Title>
                    <Price>${item.price}</Price>
                </Info>
            </ItemContainer>
        </Link>)

};

