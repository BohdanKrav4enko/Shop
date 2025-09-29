import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import type {Product, ProductCreateDto} from "../types/types.ts";

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.escuelajs.co/api/v1/'}),
    tagTypes: ["Products"] as const,
    endpoints: (builder) => ({
        getProducts: builder.query<Product[], { offset?: number; limit?: number }>({
            query: ({ offset = 0, limit = 100 } = {}) => `products?offset=${offset}&limit=${limit}`,
            providesTags: ["Products"],
        }),
        updateProduct: builder.mutation<Product, Partial<Product> & { id: number }>({
            query: ({id, ...patch}) => ({
                url: `products/${id}`,
                method: 'PUT',
                body: patch,
            }),
            invalidatesTags: ["Products"],
        }),
        createProduct: builder.mutation<Product, ProductCreateDto>({
            query: (newProduct) => ({
                url: `products/`,
                method: 'POST',
                body: newProduct
            }),
            invalidatesTags: ["Products"],
        }),
        deleteProduct: builder.mutation<void, { id: number }>({
            query: ({id}) => ({
                url: `products/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Products"],
        }),
    }),
});

export const {useGetProductsQuery, useUpdateProductMutation, useCreateProductMutation, useDeleteProductMutation} = productsApi;
