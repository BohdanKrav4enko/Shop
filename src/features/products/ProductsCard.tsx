import type {Product} from "../../types/types.ts";
import {Badge, BuyButton, Card, CartWrapper, Footer, ImageWrapper, Price, Title} from "./styles/ProductsCardStyle.ts";
import {Link} from "react-router-dom";
import {useAppDispatch} from "../../components/hooks/hooks.ts";
import {addCart, removeCart} from "../cart/cartSlice.ts";
import {useCart} from "../../components/hooks/useCart.ts";
import img from "../../assets/placeholder.webp";

export const ProductsCard = ({product}: { product: Product }) => {
    const dispatch = useAppDispatch();
    const { inCart } = useCart();
    const exists = inCart(product.id);


    const handleCartClick = () => {
        if (exists) {
            dispatch(removeCart(product.id));
        } else {
            dispatch(addCart(product));
        }
    };
    return (
        <Card>
            <Link to={`/product/${product.id}`}>
                <ImageWrapper>
                        <img src={product.images[0]}
                             alt={product.title}
                             onError={e => (e.currentTarget.src = img)}
                        />
                </ImageWrapper>
            </Link>
                <Title>{product.title}</Title>
            <Footer>
                <Price>{product.price} $</Price>
                <CartWrapper onClick={handleCartClick}>
                    <BuyButton>🛒</BuyButton>
                    {exists && <Badge>✔️</Badge>}
                </CartWrapper>
            </Footer>
        </Card>
    );
};
