import {CategoryTitle, Grid} from "./styles/ProductsListStyle";
import {ProductsCard} from "./ProductsCard";
import {ProductSkeletonGrid} from "../../components/skeletons/ProductSkeletonGrid";
import {useInfiniteProducts} from "../../components/hooks/useInfiniteProducts";
import {ShowMoreButton, ShowMoreButtonWrapper} from "./styles/ShowMoreButtonStyle";
import {useAppSelector} from "../../components/hooks/hooks";
import {EmptyState} from "./EmptyState.tsx";
import {useGetCategoriesQuery} from "../../api/productsApi.ts";



export const ProductsList = () => {
    const categoryId = useAppSelector(state => state.app.categoryId);
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
        <>  <CategoryTitle style={{textAlign: 'center'}}>{categoryName}</CategoryTitle>
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
                    <ShowMoreButton onClick={loadMore}>Показать ещё</ShowMoreButton>
                </ShowMoreButtonWrapper>
            )}
        </>
    );
};
