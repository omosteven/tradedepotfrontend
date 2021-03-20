import React, {useState} from "react";

// import the material-ui core components
import {
    Avatar,
    Button,
    TextField,
    Grid,
    Typography,
    Container,
    CircularProgress
} from "@material-ui/core";

import {useHistory, Link} from "react-router-dom";

import {useForm, Controller} from "react-hook-form";

import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import useStyles from "../../styles/auth/RegisterStyle";

// import the API handler
import {fetchApi} from "../../adapters/fetchApi";

const SignUpComponent = () => {

    const classes = useStyles();

    let history = useHistory();

    const {handleSubmit, control, errors: fieldsErrors} = useForm({mode: "onChange"});


    const [isSubmitted, setSubmitted] = useState(false);

    const [progIconState, setProgIconState] = useState(false);


    const APIUrl = "https://tradedepotapi.herokuapp.com/auth/register/";

    const onSubmit = data => { // set the response message to null

        setProgIconState(true);
        setSubmitted(true);

        const dataObject = data;

        (async () => {
            const {isError, data, errorMessage} = await fetchApi(dataObject, "POST", APIUrl);

            if (isError) {
                setProgIconState(false);
                setSubmitted(false)

                toast(errorMessage);


            } else {
                setProgIconState(false);
                setSubmitted(false);
                toast(data.message);
                setTimeout(()=>{
                  history.push("/auth/login/");

                }, 4000)
            }
        })();
    };

    return (

        <> {/* The toastify component */}
            <ToastContainer/> {/* The material-ui container */}
            <Container component="main" className="" maxWidth="xs">

                <div className={
                    classes.paper
                }>

                    <Avatar className={
                        classes.avatar
                    }></Avatar>

                    <Typography component="h1" variant="h5"
                        style={
                            {color: "#011b33"}
                    }>
                        Create Your Account.
                    </Typography>

                    {/* The form box */}

                     
                    <form
                      className={classes.form}
                      noValidate
                      onSubmit={handleSubmit(onSubmit)}
                    >
                  
                    
                          <Controller
                        name="fullName"
                        as={
                          <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Fullname"
                            name="fullName"
                            autoComplete="Fullname"
                            helperText={
                              fieldsErrors.fullName ? fieldsErrors.fullName.message : null
                            }
                            error={Boolean(
                              fieldsErrors?.fullName?.message
                            )}
                          />
                        }
                        control={control}
                        defaultValue=""
                        rules={{
                          required: {
                            value: true,
                            message: "This Fullname field cannot be empty"
                          },
                          minLength: {
                            value: 3,
                            message: "The entered Fullname is too short."
                          }
                        }}
                      />
                      
                      <Controller
                        name="email"
                        as={
                          <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            helperText={
                              fieldsErrors.email ? fieldsErrors.email.message : null
                            }
                            error={Boolean(
                              fieldsErrors?.email?.message
                            )}
                          />
                        }
                        control={control}
                        defaultValue=""
                        rules={{
                          required: {
                            value: true,
                            message: "This email field cannot be empty"
                          },
                          minLength: {
                            value: 5,
                            message: "The entered email is too short."
                          }
                        }}
                      />
                      <Controller
                        name="password"
                        as={
                          <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Password"
                            name="password"
                            autoComplete="password"
                            type="password"
                            helperText={
                              fieldsErrors.password ? fieldsErrors.password.message : null
                            }
                            error={Boolean(
                              fieldsErrors?.password?.message
                            )}
                          />
                        }
                        control={control}
                        defaultValue=""
                        rules={{
                          required: {
                            value: true,
                            message: "This password field cannot be empty"
                          },
                          minLength: {
                            value: 8,
                            message: "The password cannot be less than 8 characters"
                          }
                        }}
                      />
                        <Controller
                        name="address"
                        as={
                          <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Address(City, State)"
                            name="address"
                            autoComplete="Address"
                            helperText={
                              fieldsErrors.address ? fieldsErrors.address.message : null
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
                            message: "This Address field cannot be empty"
                          },
                          minLength: {
                            value: 5,
                            message: "The entered Address is too short."
                          }
                        }}
                      />
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
                            autoComplete="country"
                            helperText={
                              fieldsErrors.country ? fieldsErrors.country.message : null
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
                            message: "This Country field cannot be empty"
                          },
                          minLength: {
                            value: 5,
                            message: "The entered Country is too short."
                          }
                        }}
                      />
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        disabled={isSubmitted}
                      >
                        REGISTER
                        {progIconState && (
                          <CircularProgress style={{ color: "white" }} />
                        )}
                      </Button>
                      <Grid container>
                        
                        <Grid item style={{marginLeft:"auto", marginRight:"auto"}}>
                          <Link
                            to="/auth/login/"
                            variant="body2"
                            style={{ color: "#011b33",  textDecoration:"none" }}
                          >
                            Already have an account? Login
                          </Link>
                        </Grid>
                      </Grid>
                    </form>
                    {/* End of the form box */} </div>
            </Container>
        </>
    );
};

export default SignUpComponent
