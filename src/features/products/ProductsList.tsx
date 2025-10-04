import {ErrorFetch, ProductSkeletonGrid, useAppSelector, useInfiniteProducts} from "@/components";
import {
    CategoryTitle,
    EmptyState,
    Greetings,
    Grid,
    ProductsCard,
    ShowMoreButton,
    ShowMoreButtonWrapper
} from "./index.ts";
import {useGetCategoriesQuery} from "@/api/productsApi.ts";
import {useTranslation} from "react-i18next";

export const ProductsList = () => {
    const categoryId = useAppSelector(state => state.app.categoryId);
    const profile = useAppSelector(state => state.auth.profile);
    const {data: categories} = useGetCategoriesQuery()
    const {products, isLoading, error, loadMore, hasMore, refetch} = useInfiniteProducts(9);
    const {t} = useTranslation();

    if (isLoading && products.length === 0) return <ProductSkeletonGrid/>;
    if (error) return <ErrorFetch onRetry={()=>{refetch()}}/>;

    const category = categories?.find(cat => cat.id === categoryId);
    const categoryName = category ? category.name : t("All products");
    const filteredProducts = categoryId === 0
        ? products
        : products.filter(product => product.category.id === categoryId);

    return (
        <>  <Greetings>{profile ? `${t('Hi')}, ${profile.name} ${profile.surname}` : ''}</Greetings>
            <CategoryTitle style={{textAlign: 'center'}}>{categoryName}</CategoryTitle>
            {filteredProducts.length === 0
                ? <EmptyState/>
                : <Grid>
                    {filteredProducts.map(product => (
                        <ProductsCard key={product.id} product={product}/>
                    ))}
                </Grid>
            }
            {hasMore && filteredProducts.length > 0 && (
                <ShowMoreButtonWrapper>
                    <ShowMoreButton onClick={loadMore}>{t("Show more")}</ShowMoreButton>
                </ShowMoreButtonWrapper>
            )}
        </>
    );
};
