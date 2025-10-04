import {
    CartContent,
    CartLayout,
    ClearButton,
    ModalFooter,
    ModalHeader,
    ModalText,
    useAppDispatch,
    useAppSelector
} from "@/components";
import {useGetProductsQuery} from "@/api/productsApi";
import {SearchItem} from "@/features";
import {CircularProgress} from "@mui/material";
import {closeModal} from "@/app/modalSlice.ts";
import {useTranslation} from "react-i18next";

export const Favorites = () => {
    const dispatch = useAppDispatch();
    const favoritesIds = useAppSelector(state => state.app.favorites);
    const {data: products = [], isLoading} = useGetProductsQuery({offset: 0, limit: 1000});
    const {t} = useTranslation();
    if (isLoading) return <CircularProgress/>;

    const favoriteProducts = products.filter(p => favoritesIds.includes(p.id));

    return (
        <>
            {favoriteProducts.length === 0 ? (
                <CartLayout role="dialog" aria-modal="true" aria-labelledby="favorites-modal-title">
                    <ModalHeader id="favorites-modal-title">{t("Favorites")}</ModalHeader>
                    <CartContent>
                        <ModalText aria-live="polite">{t("There's nothing here yet.")}</ModalText>
                    </CartContent>
                    <ModalFooter onClose={()=>{dispatch(closeModal())}}/>
                </CartLayout>
            ) : (
                <CartLayout>
                    <ModalHeader>{t("Favorites")}</ModalHeader>
                    <CartContent>
                        {favoriteProducts.map(item => (
                            <SearchItem onClose={()=>{dispatch(closeModal())}} key={item.id} item={item}/>
                        ))}
                    </CartContent>
                    <ModalFooter onClose={()=>{dispatch(closeModal())}} children={<ClearButton aria-label={t("Clear favorites")}>{t("Clear")}</ClearButton>}/>
                </CartLayout>
            )}
        </>
    );
};
