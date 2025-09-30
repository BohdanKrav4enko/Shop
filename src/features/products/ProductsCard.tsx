import type {Product} from "../../types/types.ts";
import {Badge, BuyButton, Card, CartWrapper, Footer, ImageWrapper, Price, Title} from "./styles/ProductsCardStyle.ts";
import {Link} from "react-router-dom";
import {useAppDispatch} from "../../components/hooks/hooks.ts";
import {addCart, removeCart} from "../cart/cartSlice.ts";
import {useCart} from "../../components/hooks/useCart.ts";
import img from "../../assets/placeholder.webp";
import {CircleCheckBig, ShoppingCart} from 'lucide-react';
import {CategoryChangeButton} from "../../pages/productPage/ProductPageStyle.ts";
import {setCategory} from "../../app/appSlice.ts";

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
            {product.category ? (
                <CategoryChangeButton onClick={()=>{dispatch(setCategory(product.category.id))}}>
                    {product.category.name}
                </CategoryChangeButton>
            ) : "Unknown"}
            <Footer>
                <Price>{product.price} $</Price>
                <CartWrapper onClick={handleCartClick}>
                    <BuyButton><ShoppingCart /></BuyButton>
                    {exists && <Badge><CircleCheckBig /></Badge>}
                </CartWrapper>
            </Footer>
        </Card>
    );
};
