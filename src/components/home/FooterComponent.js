import React from "react";

import {AppBar, Toolbar, Typography, Container} from '@material-ui/core';

const FooterComponent = () => {

    return (
        <>
            <AppBar position="static" color="primary"
                style={
                    {background: "#011b33"}
            }>
                <Container>
                    <Toolbar>
                        <Typography variant="body1" color="inherit"
                            style={
                                {
                                    marginLeft: "auto",
                                    marginRight: "auto"
                                }
                        }>
                            © 2021 TradeDepot
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
};

export default FooterComponent;
