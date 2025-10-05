import {CartWrapper, ControlButton} from "@/features";
import {Heart} from "lucide-react";
import {toggleFavorite} from "@/app/appSlice.ts";
import {useAppDispatch, useAppSelector} from "@/components";
import type {Product} from "@/types/types.ts";

export const AddToFavorite = ({product}: { product: Product }) => {
    const dispatch = useAppDispatch();
    const favorites = useAppSelector(state => state.app.favorites);
    const exists = favorites.find((favorite) => favorite === product.id);
    const theme = useAppSelector(state => state.app.themeMode);

    const favoriteToggle = () => {
        dispatch(toggleFavorite(product.id))
    }

    return (
        <CartWrapper onClick={favoriteToggle}>
            <ControlButton aria-label="Favorite"><Heart style={exists ? {color: 'red'} : {color: theme === 'light' ? 'black' : 'white'}}/></ControlButton>
        </CartWrapper>
    );
};
