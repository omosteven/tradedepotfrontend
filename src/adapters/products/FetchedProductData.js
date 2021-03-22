import React, {useState, useEffect} from 'react';

import {fetchApi} from "../fetchApi";

import SkeletonCard from "../utility/SkeletonCard";

import ProductInfoCard from "../products/ProductInfoCard";

import {ToastContainer, toast} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const FetchedProductData = () => {

    const APIUrl = "https://tradedepotapi.herokuapp.com/product/fetchall/?address=ss&country=ff&city=55";

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
                setProducts(data.data)
            }
        })();
        // eslint-disable-next-line
    }, []);

    const FetchedData = () => {

        if (products.length !== 0) {
            return (<ProductInfoCard eachProduct={
                    products[0]
                }
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"/>)
        } else {

            return (<SkeletonCard xs={12} lg={4} md={6}/>)

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

export default FetchedProductData;
