import {useGetProductsQuery} from "../../api/productsApi.ts";
import {ProductsCard} from "./ProductsCard.tsx";
import type {Product} from "../../types/types.ts";
import {Grid} from "./styles/ProductsListStyle.ts";
import {ProductSkeletonGrid} from "../../components/skeletons/ProductSkeletonGrid.tsx";
import {Pagination} from "../../components/pagination/Pagination.tsx";
import {useAppSelector} from "../../components/hooks/hooks.ts";

export const ProductsList = () => {
    const page = useAppSelector(state => state.app.page)
    const limit = 9;

    const { data, isLoading, error } = useGetProductsQuery({ offset: page * limit, limit })

    if (isLoading) return <ProductSkeletonGrid/>
    if (error) return <div>Error loading data</div>
    if (!data) return null;

    return <>
        <Grid>
            {data.map((product: Product) => (
                <ProductsCard key={product.id} product={product} />
            ))}
        </Grid>
        <Pagination isNextDisabled={!data || data.length < limit} page={page} />
    </>

}