import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Alert, Box, TextField } from "@material-ui/core";
import { auth } from "../../firebase";

export const SignUp = () => {
    const { push } = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handlePassChange = (e) => {
        setPassword(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await auth.createUserWithEmailAndPassword(email, password);
            push("/profile");
        } catch (e) {
            setError(e);
        }
    };

    return (
        <Box
            component="form"
            sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            <h1>Sign up</h1>

            <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                onChange={handleEmailChange}
                value={email}
            />
            <TextField
                id="outlined-basic"
                label="Password"
                type="password"
                variant="outlined"
                onChange={handlePassChange}
                value={password}
            />

            <Button type="submit">Submit</Button>

            {error && <Alert severity="error">{error.toString()}</Alert>}

            <hr />
            <p>
                Already have an account? <Link to="/login">Login</Link>
            </p>
        </Box>
    );
};