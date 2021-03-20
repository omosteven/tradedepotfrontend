import React from 'react';

import {
    Box,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    Paper,
    Grid,
    BottomNavigation,
    BottomNavigationAction
} from '@material-ui/core';

import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import AOS from "aos";
// import a dummy image
import productImg from "../home/img/branding.jpeg";

// import the styled component
import useStyles from "../../styles/home/BodyStyle";

const BodyComponent = () => {
    AOS.init();

    const classes = useStyles();

    const products = [
        {
            productName: "First Product",
            productImgUrl: productImg,
            uploadedBy: "Steven Omole",
            address: "Akure, Ondo",
            country: "Nigeria",
            productPrice: "N20,000"
        }, {
            productName: "Flower",
            productImgUrl: productImg,
            uploadedBy: "Steven Omole",
            address: "Akure, Ondo",
            country: "Nigeria",
            productPrice: "N50,000"
        }, {
            productName: "Vase",
            productImgUrl: productImg,
            uploadedBy: "Steven Omole",
            address: "Akure, Ondo",
            country: "Nigeria",
            productPrice: "N200,000"
        }, {
            productName: "Xmas Gift",
            productImgUrl: productImg,
            uploadedBy: "Steven Omole",
            address: "Akure, Ondo",
            country: "Nigeria",
            productPrice: "N120,000"
        },
        {
            productName: "Xmas Gift",
            productImgUrl: productImg,
            uploadedBy: "Steven Omole",
            address: "Akure, Ondo",
            country: "Nigeria",
            productPrice: "N120,000"
        },
        {
            productName: "Xmas Gift",
            productImgUrl: productImg,
            uploadedBy: "Steven Omole",
            address: "Akure, Ondo",
            country: "Nigeria",
            productPrice: "N120,000"
        },
        {
            productName: "Xmas Gift",
            productImgUrl: productImg,
            uploadedBy: "Steven Omole",
            address: "Akure, Ondo",
            country: "Nigeria",
            productPrice: "N120,000"
        },
        {
            productName: "Xmas Gift",
            productImgUrl: productImg,
            uploadedBy: "Steven Omole",
            address: "Akure, Ondo",
            country: "Nigeria",
            productPrice: "N120,000"
        }
    ]

    const ProductCard = (props) => {
        return (
            <React.Fragment>
                <Grid item
                    xs={12}
                    lg={4}
                    md={6}>
                    <Paper className={
                        classes.paper
                    }>
                        <Card className={
                            classes.card
                        }>
                            <CardActionArea>
                                <CardMedia className={
                                        classes.media
                                    }
                                    image={
                                        props.eachProduct.productImgUrl
                                    }
                                    title={
                                        props.eachProduct.productName
                                    }/>
                                <CardContent style={
                                    {height: "4em"}
                                }>
                                    <Box style={
                                        {display: "flexbox"}
                                    }>
                                        <Typography gutterBottom variant="h6" component="h2">
                                            {
                                            props.eachProduct.productName
                                        } </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p"
                                            style={
                                                {float: "right"}
                                        }>
                                            By {
                                            props.eachProduct.uploadedBy
                                        } </Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {
                                            props.eachProduct.address
                                        } </Typography>
                                    </Box>

                                </CardContent>
                            </CardActionArea>
                            <hr style={
                                {
                                    width: "90%",
                                    marginLeft: "auto",
                                    marginBottom: "auto"
                                }
                            }/>
                            <CardActions style={
                                {height: "3em"}
                            }>
                                <Box>
                                    <Typography variant="body2" color="textSecondary" component="p"
                                        style={
                                            {
                                                marginLeft: "0.7em",
                                                fontWeight: "bolder"
                                            }
                                    }>
                                        {
                                        props.eachProduct.productPrice
                                    } </Typography>
                                </Box>
                                <Box style={
                                    {marginLeft: "auto"}
                                }>
                                    <Button size="small" color="primary" variant="b" component="b"
                                        className={
                                            classes.buyBtn
                                    }>
                                        Buy Item
                                    </Button>
                                </Box>
                            </CardActions>
                        </Card>
                    </Paper>
                </Grid>
            </React.Fragment>
        )
    }

    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
     
            <BottomNavigation value={value}
                onChange={handleChange}
                className={
                    classes.root
            }>
                <BottomNavigationAction label="Recents" value="recents"
                    className={
                        classes.iconColor
                    }
                    icon={<RestoreIcon/>}/>
                <BottomNavigationAction label="Favorites" value="favorites"
                    className={
                        classes.iconColor
                    }
                    icon={<FavoriteIcon/>}/>
                <BottomNavigationAction label="Nearby" value="nearby"
                    className={
                        classes.iconColor
                    }
                    icon={<LocationOnIcon/>}/>

            </BottomNavigation>

            <div className={
                classes.root
            }>

                <Grid container
                    spacing={1}>
                    <Grid container item
                        xs={12}>
                        {
                        products.map(eachItem => {
                            return (
                                <ProductCard eachProduct={eachItem} data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine"/>
                            )
                        })
                    } </Grid>
                </Grid>
            </div>
        </>
    );
};

export default BodyComponent;
