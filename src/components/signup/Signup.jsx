import { ShoppingCart } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  CssBaseline,
  FormControlLabel,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { ColorModeContext, useMode } from "../../theme";
import { useForm } from "react-hook-form";
import supabase from "../main/supbase";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Signup() {
  const { register, handleSubmit, formState, getValues } = useForm({
    mode: "onBlur",
  });
  const [creatingAcc, setcreatingAcc] = useState(false);
  const [error, setError] = useState(false);
  const [theme, colorMode] = useMode();
  const navigate = useNavigate();

  async function authUser(data) {
    setcreatingAcc(true);
    setError(false);
    let { data: user, error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
    });
    if (error) {
      setError(true);
      throw new Error("No Authanticated");
    }
    setcreatingAcc(false);
    return user;
  }
  function onsubmit(data) {
    authUser(data).then(() => {
      navigate("/dashboard");
    });
  }

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{ width: "100vw", minHeight: "100vh", pt: "5vh" }}
          bgcolor={theme.palette.bg.main}
        >
          <Box
            sx={{
              width: "80%",
              maxWidth: "500px",
              minHeight: "200px",
              bgcolor: theme.palette.background.default,
              boxShadow: "rgba(3, 0, 71, 0.09) 0px 8px 45px",
              mx: "auto",
              textAlign: "center",
              py: 4,
              px: 2,
            }}
          >
            <ShoppingCart sx={{ fontSize: "3rem" }} />
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Welcome to MUI
            </Typography>
            <form
              onSubmit={handleSubmit(onsubmit)}
              noValidate
              style={{
                margin: "40px auto",
                width: "89%",
                maxWidth: "350px",
                textAlign: "left",
                fontSize: "90%",
              }}
            >
              <label>Full Name</label>
              <TextField
                size="small"
                type="text"
                disable={creatingAcc}
                placeholder={"John Doe"}
                {...register("name", {
                  required: "Your name is required!",
                })}
                error={formState.errors?.name}
                helperText={formState.errors?.name?.message}
                sx={{
                  display: "block",
                  mb: 2,
                  width: "100%",

                  " .MuiInputBase-root": {
                    width: "100%",
                    fontSize: "90%",
                    py: 0.7,
                  },
                  " .Mui-error": { ml: 0 },
                }}
              />
              <label>Email</label>
              <TextField
                size="small"
                type="email"
                disable={creatingAcc}
                placeholder={"user@gmail.com"}
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
                  mb: 2,
                  width: "100%",

                  " .MuiInputBase-root": {
                    width: "100%",
                    fontSize: "90%",
                    py: 0.7,
                  },
                  " .Mui-error": { ml: 0 },
                }}
              />
              <labels>Password</labels>
              <TextField
                size="small"
                type={"password"}
                disable={creatingAcc}
                placeholder={"********"}
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
                  mb: 2,
                  width: "100%",
                  " .MuiInputBase-root": {
                    width: "100%",
                    fontSize: "90%",
                    py: 0.7,
                  },
                  " .Mui-error": { margin: 0 },
                }}
              />
              <labels>Retype Password</labels>
              <TextField
                size="small"
                type={"password"}
                disable={creatingAcc}
                placeholder={"********"}
                {...register("password1", {
                  required: "Please retype your password",
                  validate: (value) =>
                    value === getValues().password ||
                    "Passwords needs to match",
                })}
                error={formState.errors?.password1}
                helperText={formState.errors?.password1?.message}
                sx={{
                  display: "block",
                  mb: 2,
                  width: "100%",
                  " .MuiInputBase-root": {
                    width: "100%",
                    fontSize: "90%",
                    py: 0.7,
                  },
                  " .Mui-error": { margin: 0 },
                }}
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                disable={creatingAcc}
                label={
                  <div>
                    By signing up, you agree to{" "}
                    <Link href="#" style={{ color: "primary" }}>
                      Terms & Condition
                    </Link>
                  </div>
                }
                inputProps={{
                  "aria-label": "Agree to terms and conditions",
                }}
                sx={{
                  mb: 2,
                  " .MuiTypography-root": {
                    fontSize: "100%",
                    fontWeight: "light",
                  },
                }}
              />
              {error && (
                <Typography
                  id="error"
                  variant="body2"
                  component="p"
                  color={"error"}
                  textAlign={"center"}
                >
                  There was an error creating the account! <br />
                  Please, try again.
                </Typography>
              )}
              <Button
                variant="contained"
                type="sunmit"
                disable={creatingAcc}
                sx={{
                  width: "100%",
                  borderRadius: "0",
                  fontWeight: "500",
                }}
              >
                Create account
              </Button>
            </form>
          </Box>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default Signup;
