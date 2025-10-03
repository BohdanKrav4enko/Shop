import {Routes, Route, Navigate} from "react-router-dom";
import {
    Home,
    EditProductPage,
    AboutPage,
    ContactPage,
    ProductPage,
    PrivacyPage,
    FaqPage,
    OrdersPage,
    AboutMePage
} from "@/pages";
import {PATH} from "./paths";
import {AdminRoute, ProtectedRoute} from "@/components";
import {ErrorPage} from "@/pages/errorPage";

export const AppRoutes = () => (
    <Routes>
        <Route path={PATH.HOME} element={<Home/>}/>
        <Route path={PATH.PRODUCT} element={<ProductPage/>}/>
        <Route path={PATH.PRIVACY_PAGE} element={<PrivacyPage/>}/>
        <Route path={PATH.ABOUT_PAGE} element={<AboutPage/>}/>
        <Route path={PATH.CONTACT_PAGE} element={<ContactPage/>}/>
        <Route path={PATH.FAQ_PAGE} element={<FaqPage/>}/>

        <Route element={<ProtectedRoute/>}>
            <Route path={PATH.ABOUT_ME_PAGE} element={<AboutMePage/>}/>
        </Route>

        <Route element={<AdminRoute />}>
            <Route path={PATH.ORDERS_PAGE} element={<OrdersPage />} />
            <Route path={PATH.ADD_PRODUCT} element={<EditProductPage />} />
            <Route path={PATH.EDIT_PRODUCT} element={<EditProductPage />} />
        </Route>
        <Route path={PATH.ERROR_PAGE} element={<ErrorPage />} />
        <Route path="*" element={<Navigate to={PATH.ERROR_PAGE} replace />} />
    </Routes>
);
