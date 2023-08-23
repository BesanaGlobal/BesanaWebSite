import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import { Company } from "./components/company";
import { Oportunity } from "./components/oportunity";
import { ReturnPolicys } from "./components/returnpolicys";
import { PrivacyPolicy } from "./components/privacypolicy";
import { Useterms } from "./components/useterms";
import Landing from "./pages/landing";
import Product from "./pages/product"
import { ProductDetails } from "./components/productDetails";
import React, { useState, useEffect } from "react";
import JsonData from "./data/data.json";
import ShoppingCart from "./pages/shoppingCart";
import ConfirmPayment from "./pages/confirmPayment";

const Router = () => {

    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
        setLandingPageData(JsonData);
    }, []);
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/company" element={<Company data={landingPageData.About} />} />
                    <Route path="/returnpolicys" element={<ReturnPolicys data={landingPageData.About} />} />
                    <Route path="/privacypolicy" element={<PrivacyPolicy data={landingPageData.About} />} />
                    <Route path="/useterms" element={<Useterms data={landingPageData.About} />} />
                    <Route path="/oportunity" element={<Oportunity data={landingPageData.Testimonials} />} />
                    <Route path="/product/:id" element={<Product />} />
                    <Route path="/shoppingCar" element={<ShoppingCart />} />
                    <Route path="/confirmPayment" element={<ConfirmPayment />} />
                    <Route path="/:id" element={<ProductDetails  />} />
                    <Route path="/" element={<Landing data={landingPageData} />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default Router