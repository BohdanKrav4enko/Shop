import { useState, useEffect } from "react";
import { useGetProductsQuery } from "../../api/productsApi";
import type { Product } from "../../types/types";

export const useInfiniteProducts = (limit: number = 9) => {
    const [offset, setOffset] = useState(0);
    const [products, setProducts] = useState<Product[]>([]);
    const { data, isLoading, isFetching, error } = useGetProductsQuery({ offset, limit });
    useEffect(() => {
        if (data && data.length > 0) {
            setProducts(prev => [...prev, ...data]);
        }
    }, [data]);
    const loadMore = () => {
        if (!isFetching && data?.length === limit) {
            setOffset(prev => prev + limit);
        }
    };
    useEffect(() => {
        const handleScroll = () => {
            if (isFetching) return;
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
                if (data?.length === limit) {
                    setOffset(prev => prev + limit);
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isFetching, data]);
    return {
        products,
        isLoading,
        isFetching,
        error,
        loadMore,
        hasMore: data?.length === limit,
    };
};
