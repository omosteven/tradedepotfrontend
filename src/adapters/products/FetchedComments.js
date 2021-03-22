import React, {useState, useEffect} from 'react';

import {Grid, Divider} from "@material-ui/core";

import {fetchApi} from "../fetchApi";

import SkeletonCard from "../utility/SkeletonCard";

// import {userData} from "../../contexts/UserData";
import {ToastContainer, toast} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const FetchedComments = (props) => {

    const APIUrl = "https://tradedepotapi.herokuapp.com/product/comments/fetchall/?productID=" + props.productID;

    const dataObject = {
        "address": "",
        "country": "",
        "city": ""
    }

    const [products, setProducts] = useState([])

    useEffect(() => {

        (async () => {
            const {isError, data, errorMessage} = await fetchApi(dataObject, "GET", APIUrl);

            if (isError) {
                toast.error(errorMessage, {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined
                });
            } else {
                if (data.data.length === 0) {
                    toast.info('Be the first person to post a comment', {
                        position: "bottom-center",
                        autoClose: false,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined
                    });
                } else {
                    setProducts(data.data)
                }
            }
        })();
        // eslint-disable-next-line
    }, []);

    const FetchedData = () => {

        if (products.length !== 0) {

            return(products.map(eachComment => {
                return (<>
                    <Grid justifyContent="left" item xs zeroMinWidth
                        style={
                            {marginTop: "1em"}
                    }>
                        <h5 style={
                            {
                                margin: 0,
                                textAlign: "left"
                            }
                        }> {
                            eachComment.postedBy
                        }</h5>
                        <p style={
                            {textAlign: "left"}
                        }> {
                            eachComment.comment
                        } </p>
                        <p style={
                            {
                                textAlign: "left",
                                color: "gray"
                            }
                        }>
                            posted
                        </p>
                    </Grid>
                    <Divider/>
                </>)
            }))

        } else {

            return (<SkeletonCard xs={12}
                lg={12}
                md={6}/>)

        }
    }

    return (<>
        <ToastContainer position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover/>
        <FetchedData/>
    </>)

};

export default FetchedComments;
