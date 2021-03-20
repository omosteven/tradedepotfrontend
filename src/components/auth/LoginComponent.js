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
  
  import { useHistory, Link } from "react-router-dom";
  
  import { useForm, Controller } from "react-hook-form";
  
  import {ToastContainer, toast} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  // import the API handler
  import {fetchApi} from "../../adapters/fetchApi";

  import useStyles from "../../styles/auth/LoginStyle";
  
  const LoginComponent = () => {
    
    const classes = useStyles();

    let history = useHistory();

    const {handleSubmit, control, errors: fieldsErrors} = useForm({mode: "onChange"});


    const [isSubmitted, setSubmitted] = useState(false);

    const [progIconState, setProgIconState] = useState(false);


    const APIUrl = "https://tradedepotapi.herokuapp.com/auth/login/";

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
                // store to localStorage. I will change it to contextAPi later
                localStorage.setItem("userData", JSON.stringify(data.data))
                setTimeout(()=>{
                  history.push("/");

                }, 4000);
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
        
        <Container component="main" className="" maxWidth="xs">
        
          <div className={classes.paper}>
        
            <Avatar className={classes.avatar}></Avatar>
        
            <Typography
              component="h1"
              variant="h5"
              style={{ color: "#011b33" }}
            >
              Sign Into Your Account.
            </Typography>
        
            <form
              className={classes.form}
              noValidate
              onSubmit={handleSubmit(onSubmit)}
            >
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
                    message: "This Email field cannot be empty"
                  },
                  minLength: {
                    value: 5,
                    message: "The entered Email is too short."
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
                    message: "This Password field cannot be empty"
                  },
                  minLength: {
                    value: 8,
                    message: "The Password cannot be less than 8 characters"
                  }
                }}
              />
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                // class="submitBtn"
                disabled={isSubmitted}
              >
                SIGN IN
                {progIconState && (
                  <CircularProgress style={{ color: "white" }} />
               )}
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link
                    to="#"
                    variant="body2"
                    style={{ color: "#011b33",  textDecoration:"none" }}
                  >
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    to="/auth/register/"
                    variant="body2"
                    style={{ color: "#011b33",  textDecoration:"none" }}
                  >
                    Don't have an account? Sign Up
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
       
        </Container>

      </>
    );
  };

export default LoginComponent
