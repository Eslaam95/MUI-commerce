/* eslint-disable react/prop-types */
import { useTheme } from "@emotion/react";
import { useForm } from "react-hook-form";
import supabase from "../main/supbase";
import {
  Alert,
  Box,
  Button,
  InputAdornment,
  Link,
  Modal,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function LoginForm({ open, handleCloseLoginModal }) {
  const theme = useTheme();
  const navigate = useNavigate();
  const [loggingIn, setLoggingIn] = useState(false);
  const [userInvalid, setUserInvalid] = useState(false);
  const [logerror, setLogError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, formState } = useForm({ mode: "onBlur" });
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: theme.palette.background.default,
    boxShadow: 24,
    px: { sx: 2, md: 4 },
    py: 4,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  };

  async function authUser(data) {
    setLoggingIn(true);
    setUserInvalid(false);
    setLogError(false);
    let { data: user, error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });

    if (error) {
      if (error.message == "Invalid login credentials") {
        setUserInvalid(true);
      } else {
        setLogError(true);
      }
      setLoggingIn(false);
      throw new Error(error.message);
    }
    setLoggingIn(false);
    return user;
  }
  function onsubmit(data) {
    authUser(data).then(() => {
      navigate("/dashboard");
    });
  }
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setUserInvalid(false);
    setLogError(false);
  };
  return (
    <Modal
      open={open}
      onClose={handleCloseLoginModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ " .MuiBox-root": { maxWidth: "80%" } }}
    >
      <Box sx={style}>
        <ShoppingCart sx={{ fontSize: "50px" }} />
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Welcome to MUI
        </Typography>
        <form
          noValidate
          style={{ margin: "40px auto", width: "80%", maxWidth: "280px" }}
          onSubmit={handleSubmit(onsubmit)}
        >
          <TextField
            label="Email"
            size="small"
            type="email"
            disabled={loggingIn}
            defaultValue={"user@mui-c.com"}
            {...register("email", {
              required: "Your Email is required!",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please, Enter a valid email",
              },
            })}
            error={formState.errors?.email}
            helperText={formState.errors?.email?.message}
            sx={{
              display: "block",
              mb: 4,
              width: "100%",

              " .MuiInputBase-root": {
                width: "100%",
                fontSize: "90%",
                py: 0.7,
              },
              " .Mui-error": { ml: 0 },
            }}
          />
          <TextField
            label="Password"
            size="small"
            disabled={loggingIn}
            type={showPassword ? "text" : "password"}
            defaultValue={"11111user"}
            {...register("password", {
              required: "Your password is required!",
              minLength: {
                value: 6,
                message: "Password should be at least 5 characters",
              },
            })}
            error={formState.errors?.password}
            helperText={formState.errors?.password?.message}
            sx={{
              display: "block",
              mb: 4,
              width: "100%",
              " .MuiInputBase-root": {
                width: "100%",
                fontSize: "90%",
                py: 0.7,
              },
              " .Mui-error": { margin: 0 },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <VisibilityIcon
                    size="small"
                    sx={{
                      fontSize: "20px",
                      opacity: showPassword ? ".7" : ".3",
                      transition: ".2s",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setShowPassword((curr) => !curr),
                        console.log(showPassword);
                    }}
                  />
                </InputAdornment>
              ),
            }}
          />
          {userInvalid && (
            <Snackbar
              open={userInvalid}
              autoHideDuration={6000}
              onClose={handleClose}
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
              <Alert
                severity="error"
                sx={{ width: "100%" }}
                onClose={handleClose}
              >
                Invalid credentials
              </Alert>
            </Snackbar>
            // <Typography
            //   id="error"
            //   variant="body2"
            //   component="p"
            //   color={"error"}
            //   textAlign={"center"}
            // >
            //   Invalid Credentials!
            // </Typography>
          )}
          {logerror && (
            <Snackbar
              open={logerror}
              autoHideDuration={6000}
              onClose={handleClose}
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
              <Alert
                severity="error"
                sx={{ width: "100%" }}
                onClose={handleClose}
              >
                There was an error loggin in
              </Alert>
            </Snackbar>
            // <Typography
            //   id="error"
            //   variant="body2"
            //   component="p"
            //   color={"error"}
            //   textAlign={"center"}
            // >
            //   There was an error loggin in <br /> Please, try again.
            // </Typography>
          )}
          <Button
            variant="contained"
            type="sunmit"
            disabled={loggingIn}
            sx={{ width: "100%", borderRadius: "0" }}
          >
            Login
          </Button>
        </form>
        <Typography variant="body1">
          Don&apos;t have an account?{"  "}
          <Link
            href="/signup"
            underline="none"
            sx={{
              borderBottom: "1px solid",
              borderColor: theme.palette.text.primary,
              color: theme.palette.text.primary,
              fontWeight: "500",
              pb: "2px",
              ml: 0.5,
            }}
          >
            Sign Up
          </Link>
        </Typography>
        <Typography variant="body1" mt={3}>
          Forgot you password?
          <Link
            href="#"
            underline="none"
            sx={{
              borderBottom: "1px solid",
              borderColor: theme.palette.text.primary,
              color: theme.palette.text.primary,
              fontWeight: "500",
              pb: "2px",
              ml: 0.5,
            }}
          >
            Reset it
          </Link>
        </Typography>
      </Box>
    </Modal>
  );
}

export default LoginForm;
