import {useState} from "react";
import {useGetProductsQuery} from "@/api/productsApi.ts";
import {
    StyledButton,
    InputWrapper,
    ModalHeader,
    ModalText,
    StyledInput,
    CartContent,
    useAppDispatch
} from "../../index.ts";
import {CircularProgress} from "@mui/material";
import {SearchItem} from "@/features";
import {closeModal} from "@/app/modalSlice.ts";
import {useTranslation} from "react-i18next";


export const SearchModal = () => {
    const [query, setQuery] = useState("");
    const dispatch = useAppDispatch();
    const {t} = useTranslation();

    const {data, isLoading, isError} = useGetProductsQuery({});
    if (isLoading) return <div><CircularProgress/></div>;
    if (isError || !data) return <InputWrapper>{t("Failed to load products")}</InputWrapper>;

    const filteredProducts = query
        ? data.filter(
            (p) =>
                p.title.toLowerCase().includes(query.toLowerCase()) ||
                p.description.toLowerCase().includes(query.toLowerCase())
        )
        : []
    return <>
        <ModalHeader>{t("Search")}</ModalHeader>
        <InputWrapper
            role="dialog"
            aria-modal="true"
            aria-labelledby="search-modal-title"
            tabIndex={-1}
        >
            <StyledInput value={query}
                         onChange={(e) => {
                             setQuery(e.target.value)
                         }}
                         autoFocus
                         placeholder={t("I'm looking for...")}
                         aria-label="Search products"
            />
            <StyledButton
                onClick={()=>{dispatch(closeModal())}}
                aria-label="Close search modal"
            >
                {t("Close")}
            </StyledButton>
        </InputWrapper>
        <CartContent>
            {filteredProducts.length > 0
                ? filteredProducts.map((item) => <SearchItem onClose={()=>{dispatch(closeModal())}} key={item.id} item={item}/>)
                : <ModalText
                    aria-live="polite"
                >
                    {t("Search results will be here")}
                </ModalText>
            }
        </CartContent>
    </>
};
