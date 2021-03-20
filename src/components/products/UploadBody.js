import React, { useState } from "react";

import { useForm, Controller } from "react-hook-form";

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
 submitBtn:{
    margin: theme.spacing(3, 0, 2),
    background: "#ff8d06",
    '&:hover': {
        backgroundColor: fade("#ff8d06", 0.7)
    }
 }
  }));

const UploadBody = () => {

  const classes = useStyles();
    const userInfo = userData();

    const {handleSubmit, control, errors: fieldsErrors} = useForm({mode: "onChange"});

    const [isSubmitted, setSubmitted] = useState(false);
    const [progIconState, setProgIconState] = useState(false);
    const [productFile, setProductFile] = useState("");

    const APIUrl = "https://tradedepotapi.herokuapp.com/product/create/";

    const onFileInput = (e) =>{
      setProductFile(e.target.files);
    }    
    const onSubmit = data => { // set the response message to null
        setProgIconState(true);
        setSubmitted(true);

        const dataObject = data;
        let formData = new FormData();

        formData.append('uploadedBy', userInfo.fullName);
        formData.append('token', userInfo.token);
        formData.append('email_of_uploadedBy', userInfo.email);
        formData.append('productName',dataObject.productName);
        formData.append('productPrice', dataObject.productPrice);
        formData.append('productImg',productFile[0]);
        formData.append('address', dataObject.address);
        formData.append('country', dataObject.country);
        formData.append('city', dataObject.city);

        
        (async () => {
            const {isError, data, errorMessage} = await fetchApi(formData, "POST", APIUrl);

            if (isError) {
                setProgIconState(false);
                setSubmitted(false)

                toast(errorMessage);


            } else {
                setProgIconState(false);
                setSubmitted(false);
                toast(data.message);
              
            }
        })();
    };

    return (
        <>

        {/* The toastify component */}
        <ToastContainer/> {/* The material-ui container */}
          <Container className={classes.root}>
              <Grid container spacing={4} justify="center">

              <Grid item lg={8} md={8} xs={12} sm={12}>
                  <Card className={classes.gridCard}>
                    <form
                      className={classes.form}
                      noValidate
                      onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data"
                    >
                      <CardHeader
                        subheader="Kindly fill the form to upload your product!"
                        title="Product"
                      />
                      <Divider />

                      <CardContent>
                        <Grid container spacing={3}>
                          <Grid item md={6} xs={12}>
                            <Controller
                              name="productName"
                              as={
                                <TextField
                                  variant="outlined"
                                  margin="normal"
                                  required
                                  fullWidth
                                  label="Product Name"
                                  name="productName"
                                  autoComplete="productName"
                                  className={classes.formTextField}
                                  helperText={
                                    fieldsErrors.productName
                                      ? fieldsErrors.productName.message
                                      : null
                                  }
                                  error={Boolean(
                                    fieldsErrors?.productName?.message
                                  )}
                                />
                              }
                              control={control}
                              defaultValue=""
                              rules={{
                                required: {
                                  value: true,
                                  message:
                                    "This Product Name field cannot be empty",
                                },
                                minLength: {
                                  value: 3,
                                  message:
                                    "The entered Product Name is too short.",
                                },
                              }}
                            />
                          </Grid>
                          <Grid item md={6} xs={12}>
                            <Controller
                              name="address"
                              as={
                                <TextField
                                  variant="outlined"
                                  margin="normal"
                                  required
                                  fullWidth
                                  label="Address"
                                  name="address"
                                  autoComplete="address"
                                  className={classes.formTextField}
                                  helperText={
                                    fieldsErrors.address
                                      ? fieldsErrors.address.message
                                      : null
                                  }
                                  error={Boolean(
                                    fieldsErrors?.address?.message
                                  )}
                                />
                              }
                              control={control}
                              defaultValue=""
                              rules={{
                                required: {
                                  value: true,
                                  message:
                                    "This Address field cannot be empty",
                                },
                                minLength: {
                                  value: 3,
                                  message: "The entered Address is too short.",
                                },
                              }}
                            />
                          </Grid>
                          <Grid item md={6} xs={12}>
                            <Controller
                              name="city"
                              as={
                                <TextField
                                  variant="outlined"
                                  margin="normal"
                                  required
                                  fullWidth
                                  type="text"
                                  label="City"
                                  name="city"
                                  autoComplete="City"
                                  className={classes.formTextField}
                                  helperText={
                                    fieldsErrors.city
                                      ? fieldsErrors.city.message
                                      : null
                                  }
                                  error={Boolean(
                                    fieldsErrors?.city?.message
                                  )}
                                />
                              }
                              control={control}
                              defaultValue=""
                              rules={{
                                required: {
                                  value: true,
                                  message:
                                    "This City field cannot be empty",
                                },
                                minLength: {
                                  value: 2,
                                  message:
                                    "The entered City is too short.",
                                },
                              }}
                            />
                          </Grid>
                          <Grid item md={6} xs={12}>
                            <Controller
                              name="country"
                              as={
                                <TextField
                                  variant="outlined"
                                  margin="normal"
                                  required
                                  fullWidth
                                  label="Country"
                                  name="country"
                                  autoComplete="Country"
                                  className={classes.formTextField}
                                  helperText={
                                    fieldsErrors.COUNTRY
                                      ? fieldsErrors.country.message
                                      : null
                                  }
                                  error={Boolean(
                                    fieldsErrors?.country?.message
                                  )}
                                />
                              }
                              control={control}
                              defaultValue=""
                              rules={{
                                required: {
                                  value: true,
                                  message: "This Country field cannot be empty",
                                },
                                minLength: {
                                  value: 3,
                                  message: "Abbrievations are not accepted",
                                },
                              }}
                            />
                          </Grid>
                          <Grid item md={6} xs={12}>
                            <Controller
                              name="productPrice"
                              as={
                                <TextField
                                  variant="outlined"
                                  margin="normal"
                                  required
                                  fullWidth
                                  label="Price (Naira)"
                                  name="productPrice"
                                  autoComplete="Price"
                                  className={classes.formTextField}
                                  helperText={
                                    fieldsErrors.productPrice
                                      ? fieldsErrors.productPrice.message
                                      : null
                                  }
                                  error={Boolean(fieldsErrors?.productPrice?.message)}
                                />
                              }
                              control={control}
                              defaultValue=""
                              rules={{
                                required: {
                                  value: true,
                                  message: "This Price field cannot be empty",
                                }
                              }}
                            />
                          </Grid>
                          <Grid item md={6} xs={12}>
                            <input type="file"  onChange={onFileInput} required/>
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

export default UploadBody;
