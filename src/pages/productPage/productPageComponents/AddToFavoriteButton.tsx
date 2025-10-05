import {StyledButton, useAppDispatch, useAppSelector} from "@/components";
import {toggleFavorite} from "@/app/appSlice.ts";
import {Heart} from "lucide-react";
import type {Product} from "@/types/types.ts";
import styled from "styled-components";

export const AddToFavoriteButton = ({product}: { product: Product }) => {
    const dispatch = useAppDispatch();
    const favorites = useAppSelector(state => state.app.favorites);
    const exists = favorites.find((favorite) => favorite === product.id);
    const theme = useAppSelector(state => state.app.themeMode);

    const favoriteToggle = () => {
        dispatch(toggleFavorite(product.id))
    }

    return (
        <StyledAddToFavoriteButton aria-label="Favorite" onClick={favoriteToggle}>
            <Heart style={exists ? {color: 'red'} : {color: theme === 'light' ? 'black' : 'white'}}/>
        </StyledAddToFavoriteButton>

    );
};

export const StyledAddToFavoriteButton = styled(StyledButton)`

`