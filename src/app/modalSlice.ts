import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type ModalType = "cart" | "registration" | "search" | "favorites" | null;

interface ModalState {
    openModal: ModalType;
}

const initialState: ModalState = {
    openModal: null,
};

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        setOpenModal: (state, action: PayloadAction<ModalType>) => {
            state.openModal = action.payload;
        },
        closeModal: (state) => {
            state.openModal = null;
        },
    },
});

export const { setOpenModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
