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
                setTimeout(()=>{
                  history.push("/auth/login/");

                }, 4000)
            }
        })();
    };

    return (

        <> {/* The toastify component */}
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
      />{/* The material-ui container */}
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
                            style={{marginBottom:"1em"}}
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
                            style={{marginBottom:"1em"}}
                            required
                            fullWidth
                            label="Email city"
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
                            style={{marginBottom:"1em"}}
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
                        name="city"
                        as={
                          <TextField
                            variant="outlined"
                            style={{marginBottom:"1em"}}
                            required
                            fullWidth
                            label="City"
                            name="city"
                            autoComplete="City"
                            helperText={
                              fieldsErrors.city ? fieldsErrors.city.message : null
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
                            message: "This City field cannot be empty"
                          },
                          minLength: {
                            value: 2,
                            message: "The entered City is too short."
                          }
                        }}
                      />
                       <Controller
                        name="state"
                        as={
                          <TextField
                            variant="outlined"
                            style={{marginBottom:"1em"}}
                            required
                            fullWidth
                            label="State"
                            name="state"
                            autoComplete="State"
                            helperText={
                              fieldsErrors.state ? fieldsErrors.state.message : null
                            }
                            error={Boolean(
                              fieldsErrors?.state?.message
                            )}
                          />
                        }
                        control={control}
                        defaultValue=""
                        rules={{
                          required: {
                            value: true,
                            message: "This State field cannot be empty"
                          },
                          minLength: {
                            value: 2,
                            message: "The entered State is too short."
                          }
                        }}
                      />
                        <Controller
                        name="country"
                        as={
                          <TextField
                            variant="outlined"
                            style={{marginBottom:"1em"}}
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
                            value: 2,
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
