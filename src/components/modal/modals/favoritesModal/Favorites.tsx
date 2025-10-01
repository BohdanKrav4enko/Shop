import type {ModalProps} from "@/types/types";
import {CartContent, CartLayout, ClearButton, ModalFooter, ModalHeader, ModalText, useAppSelector} from "@/components";
import {useGetProductsQuery} from "@/api/productsApi";
import {SearchItem} from "@/features";
import {CircularProgress} from "@mui/material";

export const Favorites = ({onClose}: ModalProps) => {
    const favoritesIds = useAppSelector(state => state.app.favorites);
    const {data: products = [], isLoading} = useGetProductsQuery({offset: 0, limit: 1000});

    if (isLoading) return <CircularProgress/>;

    const favoriteProducts = products.filter(p => favoritesIds.includes(p.id));

    return (
        <>
            {favoriteProducts.length === 0 ? (
                <CartLayout role="dialog" aria-modal="true" aria-labelledby="favorites-modal-title">
                    <ModalHeader id="favorites-modal-title">Favorites</ModalHeader>
                    <CartContent>
                        <ModalText aria-live="polite">There's nothing here yet.</ModalText>
                    </CartContent>
                    <ModalFooter onClose={onClose}/>
                </CartLayout>
            ) : (
                <CartLayout>
                    <ModalHeader>Favorites</ModalHeader>
                    <CartContent>
                        {favoriteProducts.map(item => (
                            <SearchItem onClose={onClose} key={item.id} item={item}/>
                        ))}
                    </CartContent>
                    <ModalFooter onClose={onClose} children={<ClearButton aria-label="Clear favorites">Clear</ClearButton>}/>
                </CartLayout>
            )}
        </>
    );
};