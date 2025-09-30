import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/homePage/Home.tsx";
import { ProductPage } from "../pages/productPage/ProductPage.tsx";
import { EditProductPage } from "../pages/editProductPage/EditProductPage.tsx";
import {PATH} from "./paths.ts";
import {PrivacyPage} from "../pages/privacyPolicy/PrivacyPolicy.tsx";
import {AboutPage} from "../pages/aboutPage/AboutPage.tsx";
import {ContactPage} from "../pages/contactPage/ContactPage.tsx";
import {FaqPage} from "../pages/faqPage/FaqPage.tsx";

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
