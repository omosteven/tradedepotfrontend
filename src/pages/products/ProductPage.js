import React from "react";
import FooterComponent from "../../components/home/FooterComponent";
import HeaderComponent from "../../components/home/HeaderComponent";
import ProductInfo from "../../components/products/ProductInfo";

const ProductPage = (props) => {
    return (
        <> {/* Import the Upload Components */}
            <HeaderComponent/>
            <ProductInfo/>
            <FooterComponent/>
        </>
    )
};

export default ProductPage;
