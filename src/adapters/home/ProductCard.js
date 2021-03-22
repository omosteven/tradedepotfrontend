import React from "react";

import {
    Box,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    Paper,
    Grid
} from '@material-ui/core';

import useStyles from "../../styles/home/BodyStyle";
import {Link} from "react-router-dom";

const ProductCard = (props) => {

    const classes = useStyles();

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
                                <Link to={
                                        "/products/" + props.eachProduct._id
                                    }
                                    size="small"
                                    color="primary"
                                    className={
                                        classes.buyBtn
                                    }
                                    style={
                                        {textDecoration: "none"}
                                }>
                                    Check Item
                                </Link>
                            </Box>
                        </CardActions>
                    </Card>
                </Paper>
            </Grid>
        </React.Fragment>
    )
};

export default ProductCard;
