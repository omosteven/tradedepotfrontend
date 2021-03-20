import React from "react";
import FooterComponent from "../../components/home/FooterComponent";
import HeaderComponent from "../../components/home/HeaderComponent";
import UploadBody from "../../components/products/UploadBody";

const UploadPage = (props) => {
    return (
        <> {/* Import the Upload Components */}
            <HeaderComponent/>
            <UploadBody/>
            <FooterComponent/>
        </>
    )
};

export default UploadPage;
