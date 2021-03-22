import React, {useState, useEffect} from 'react';

import {fetchApi} from "../fetchApi";

import SkeletonCard from "../utility/SkeletonCard";

import ProductCard from "./ProductCard";

import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FetchedNearbyData = (props) => {

    const APIUrl = "https://tradedepotapi.herokuapp.com/product/fetchall/?address=ss&country=ff&city=" + props.city + "&sort=" + props.sort;

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
                    toast.error('No product found yet!', {
                        position: "bottom-center",
                        autoClose: 10000,
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
        var i = [
            0,
            1,
            2,
            3,
            4,
            5
        ]
        if (products.length !== 0) {
            return(products.map(eachItem => {
                return (<ProductCard eachProduct={eachItem}
                    data-aos="zoom-in"
                    data-aos-offset="200"
                    data-aos-easing="ease-in-sine"/>)
            }))
        } else {
            return(i.map(e => {
                return (<SkeletonCard xs={12}
                    lg={4}
                    md={6}/>)

            }))
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

export default FetchedNearbyData;
