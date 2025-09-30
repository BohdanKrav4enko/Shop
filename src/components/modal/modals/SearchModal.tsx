import {InputWrapper, ModalHeader, ModalText, StyledInput} from "../styles/ModalStyle.ts";
import {StyledButton} from "../../button/StyledButton.tsx";
import type {ModalProps} from "./type.ts";
import {useState} from "react";
import {useGetProductsQuery} from "../../../api/productsApi.ts";
import {Content} from "../styles/ShoppingCartStyle.ts";
import {SearchItem} from "../../../features/search/SearchItem.tsx";
import { CircularProgress } from "@mui/material";


export const SearchModal = (props: ModalProps) => {
    const {onClose} = props;
    const [query, setQuery] = useState("");

    const { data, isLoading, isError } = useGetProductsQuery({});
    if (isLoading) return <InputWrapper><CircularProgress /></InputWrapper>;
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
        <Content style={{ maxHeight: "300px", overflowY: "auto", marginTop: "12px" }}>
            {filteredProducts.length > 0
                ? filteredProducts.map((item) => <SearchItem onClose={onClose} key={item.id} item={item} />)
                : <ModalText>Search results will be here</ModalText>
            }
        </Content>
    </>
};
