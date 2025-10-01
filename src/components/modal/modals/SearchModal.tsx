import {useState} from "react";
import {useGetProductsQuery} from "@/api/productsApi.ts";
import {StyledButton, InputWrapper, ModalHeader, ModalText, StyledInput, CartContent} from "../../index.ts";
import { CircularProgress } from "@mui/material";
import type {ModalProps} from "@/types/types.ts";
import { SearchItem } from "@/features";


export const SearchModal = (props: ModalProps) => {
    const {onClose} = props;
    const [query, setQuery] = useState("");

    const { data, isLoading, isError } = useGetProductsQuery({});
    if (isLoading) return <div><CircularProgress /></div>;
    if (isError || !data) return <InputWrapper>Failed to load products</InputWrapper>;

    const filteredProducts = query
        ? data.filter(
            (p) =>
                p.title.toLowerCase().includes(query.toLowerCase()) ||
                p.description.toLowerCase().includes(query.toLowerCase())
        )
        : []
    return <>
        <ModalHeader>Search</ModalHeader>
        <InputWrapper>
            <StyledInput value={query}
                         onChange={(e)=>{setQuery(e.target.value)}}
                         autoFocus
                         placeholder={'I\'m looking for...'}/>
            <StyledButton
                children={'Close'}
                onClick={onClose}/>
        </InputWrapper>
        <CartContent>
            {filteredProducts.length > 0
                ? filteredProducts.map((item) => <SearchItem onClose={onClose} key={item.id} item={item} />)
                : <ModalText>Search results will be here</ModalText>
            }
        </CartContent>
    </>
};
