import {useInfiniteProducts, ProductSkeletonGrid, useAppSelector} from "@/components";
import {
    ShowMoreButton,
    ShowMoreButtonWrapper,
    EmptyState,
    ProductsCard,
    CategoryTitle,
    Grid,
    Greetings
} from "./index.ts";
import {useGetCategoriesQuery} from "@/api/productsApi.ts";

export const ProductsList = () => {
    const categoryId = useAppSelector(state => state.app.categoryId);
    const profile = useAppSelector(state => state.auth.profile);
    const {data: categories} = useGetCategoriesQuery()
    const {products, isLoading, error, loadMore, hasMore} = useInfiniteProducts(9);

    if (isLoading && products.length === 0) return <ProductSkeletonGrid/>;
    if (error) return <div>Error loading data</div>;
    const category = categories?.find(cat => cat.id === categoryId);
    const categoryName = category ? category.name : "All products";
    const filteredProducts = categoryId === 0
        ? products
        : products.filter(product => product.category.id === categoryId);

    return (
        <>  <Greetings>{profile ? `Hi, ${profile.name} ${profile.surname}` : ''}</Greetings>
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
                    <ShowMoreButton onClick={loadMore}>Show more</ShowMoreButton>
                </ShowMoreButtonWrapper>
            )}
        </>
    );
};
