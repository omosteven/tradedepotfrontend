import React from "react";
import BodyComponent from "../../components/home/BodyComponent";
import FooterComponent from "../../components/home/FooterComponent";

import HeaderComponent from "../../components/home/HeaderComponent";

const HomePage = (props) => {
    return (
        <> {/* Import the SignUp Component */}
            <HeaderComponent/>
            <BodyComponent/>
            <FooterComponent/>
        </>
    )
};

export default HomePage;
