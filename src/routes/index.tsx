import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/homePage/Home.tsx";
import { ProductPage } from "../pages/productPage/ProductPage.tsx";
import { EditProductPage } from "../pages/editProductPage/EditProductPage.tsx";
import {PATH} from "./paths.ts";

export const AppRoutes = () => (
    <Routes>
        <Route path={PATH.HOME} element={<Home />} />
        <Route path={PATH.PRODUCT} element={<ProductPage />} />
        <Route path={PATH.EDIT_PRODUCT} element={<EditProductPage />} />
        <Route path={PATH.ADD_PRODUCT} element={<EditProductPage />} />
    </Routes>
);
