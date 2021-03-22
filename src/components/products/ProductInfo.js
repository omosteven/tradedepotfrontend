import React, { useState } from "react";

import { useForm, Controller } from "react-hook-form";
import { useLocation } from 'react-router-dom';
import {
    Grid,
    CardHeader,
    Divider,
    Box,
    Button,
    Card,
    CardContent,
    Container,
    CircularProgress,
  } from "@material-ui/core";
  
  import TextField from "@material-ui/core/TextField";
  
  import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


  import {fade, makeStyles} from "@material-ui/core/styles";

  // import the API handler
import {fetchApi} from "../../adapters/fetchApi";

import FetchedProductData from "../../adapters/products/FetchedProductData";
import FetchedComments from "../../adapters/products/FetchedComments";

import {userData} from "../../contexts/UserData";


  const useStyles = makeStyles(theme => ({
    root: {
      marginTop: "4em",
      marginBottom:"4em",
      background: "whitesmoke",
      width: "95%",
      marginLeft: "2.5%"
    },
    gridCard: {
      color: "#011b33"
    },
    media: {
        height: 201
    },
    gridColor: {
      color: "#011b33"
    },
    avatar: {
      fontSize: "2em",
      color: "rgba(6, 74, 119, 1)"
    },
    formTextField: {
      color: "#011b33"
    },
    paper: {
        width: "95%",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "2em",
        padding: theme.spacing(0),
        // textAlign: 'center',
        color: theme.palette.text.secondary
    },
 submitBtn:{
    margin: theme.spacing(3, 0, 2),
    background: "#ff8d06",
    '&:hover': {
        backgroundColor: fade("#ff8d06", 0.7)
    }
 }
  }));

const ProductInfo = (props) => {

  const classes = useStyles();
  const userInfo = userData();

  const location = useLocation();
  const productID = location.pathname.substr(10,);

    const {handleSubmit, control, errors: fieldsErrors} = useForm({mode: "onChange"});

    const [isSubmitted, setSubmitted] = useState(false);
    const [progIconState, setProgIconState] = useState(false);

    const APIUrl = "https://tradedepotapi.herokuapp.com/product/comments/publish/";
  
    const onSubmit = data => { // set the response message to null

        setProgIconState(true);
        setSubmitted(true);

        const dataObject = data;

        dataObject.productID = productID;
        
        dataObject.postedBy = userInfo.fullName;

        dataObject.token = userInfo.token;

        console.log(dataObject);
        
        (async () => {
            const {isError, data, errorMessage} = await fetchApi(dataObject, "POST", APIUrl);

            if (isError) {
                setProgIconState(false);
                setSubmitted(false)

                toast.error(errorMessage, {
                  position: "top-center",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  });


            } else {
                setProgIconState(false);
                setSubmitted(false);
                toast(data.message, {
                  position: "top-center",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  });
              
            }
        })();
    };

    return (
        <>

        {/* The toastify component */}
        <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      /> {/* The material-ui container */}
          <Container className={classes.root}>
              <Grid container spacing={4} justify="center">
                {/* import the component that fetches the product info */}
             <FetchedProductData productID={productID}/>
              <Grid item lg={8} md={6} xs={12} sm={12}>
                  <Card className={classes.gridCard}>
                  <CardHeader
                        subheader="Comments from users!"
                        title="Reviews"
                      />
                      <Divider />
                      <CardContent >
                               {/* import the component that fetches all comments */}
<FetchedComments productID={productID}/>
                                    </CardContent>
                    <form
                      className={classes.form}
                      noValidate
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <CardContent>
                        <Grid container spacing={3}>
                          <Grid item md={12} xs={12}>
                            <Controller
                              name="comment"
                              as={
                                <TextField
                                  variant="outlined"
                                  margin="normal"
                                  required
                                  fullWidth
                                  label="Add your comment here..."
                                  name="comment"
                                  autoComplete="Comment"
                                  className={classes.formTextField}
                                  helperText={
                                    fieldsErrors.comment
                                      ? fieldsErrors.comment.message
                                      : null
                                  }
                                  error={Boolean(
                                    fieldsErrors?.comment?.message
                                  )}
                                />
                              }
                              control={control}
                              defaultValue=""
                              rules={{
                                required: {
                                  value: true,
                                  message:
                                    "This Comment field cannot be empty",
                                },
                                minLength: {
                                  value: 3,
                                  message:
                                    "The entered Comment is too short.",
                                },
                              }}
                            />
                          </Grid>
                         
                        </Grid>
                      </CardContent>
                      <Box display="flex" justifyContent="flex-end" p={2}>
                        <Button
                          type="submit"
                          color="primary"
                          variant="contained"
                          className={classes.submitBtn}
                          disabled={isSubmitted}
                      >
                        PUBLISH
                        {progIconState && (
                          <CircularProgress style={{ color: "white" }} />
                        )}
                        </Button>
                      </Box>
                    </form>
                  </Card>
                </Grid>
                  </Grid>
                  </Container>
        </>
    )
};

export default ProductInfo;
