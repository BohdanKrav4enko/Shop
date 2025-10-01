import { Routes, Route } from "react-router-dom";
import { Home, EditProductPage, AboutPage, ContactPage, ProductPage, PrivacyPage, FaqPage } from "@/pages";
import {PATH} from "./paths.ts";

export const AppRoutes = () => (
    <Routes>
        <Route path={PATH.HOME} element={<Home />} />
        <Route path={PATH.PRODUCT} element={<ProductPage />} />
        <Route path={PATH.EDIT_PRODUCT} element={<EditProductPage />} />
        <Route path={PATH.ADD_PRODUCT} element={<EditProductPage />} />
        <Route path={PATH.PRIVACY_PAGE} element={<PrivacyPage />} />
        <Route path={PATH.ABOUT_PAGE} element={<AboutPage />} />
        <Route path={PATH.CONTACT_PAGE} element={<ContactPage />} />
        <Route path={PATH.FAQ_PAGE} element={<FaqPage />} />
    </Routes>
);
