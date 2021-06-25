import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Cookies from 'universal-cookie';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import service from "../clientService/DigiSellService";
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


const cookies = new Cookies();

export default function Register(props, event) {
    const classes = useStyles();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const history = useHistory();

    const onChangeUsername = (event) => {
        setUsername(event.target.value);
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const onChangeFirstName = (event) => {
        setFirstName(event.target.value);
    }

    const onChangeLastName = (event) => {
        setLastName(event.target.value);
    }

    const handleSubmit = async () => {

        let json = JSON.stringify({
            "firstName": firstName,
            "lastName":  lastName,
            "username": username,
            "password": password
        })

        let status = await service.upsertUser(json);

        console.log("Status", status)

        if (status !== ""){
            history.push("/Store")
            props.setUser(true)
            cookies.set('user', status, { path: '/' })
        }
    }

    const login = () => {
        history.push("/Login")
    } 


    return (

        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Register
                </Typography>
                <ValidatorForm onSubmit={() => handleSubmit()} onError={errors => console.log(errors)}>
                    <TextValidator
                        error=""
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="firstname"
                        label="Firstname"
                        name="firstname"
                        autoComplete="firstname"
                        autoFocus
                        validators={['required', 'matchRegexp:^[a-zA-Z]+$', 'matchRegexp:^.{2,15}$']}
                        errorMessages={['This field is required', 'Can only contain letters', 'Must be 2 to 15 characters']}
                        onChange={onChangeFirstName}
                        value={firstName}
                    />
                    <TextValidator
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="lastname"
                        label="Lastname"
                        name="lastname"
                        autoComplete="lastname"
                        autoFocus
                        validators={['required', 'matchRegexp:^[a-zA-Z]+$', 'matchRegexp:^.{2,15}$']}
                        errorMessages={['This field is required', 'Can only contain letters', 'Must be 2 to 15 characters']}
                        onChange={onChangeLastName}
                        value={lastName}

                    />
                    <TextValidator
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="username"
                        autoFocus
                        validators={['required', 'matchRegexp:^[a-zA-Z0-9]+$', 'matchRegexp:^.{4,32}$']}
                        errorMessages={['This field is required', 'Can only contain letters and numbers', 'Must be 4 to 32 characters']}
                        onChange={onChangeUsername}
                        value={username}
                    />
                    {/* Password Field and will contain password type */}
                    <TextValidator
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        validators={['required', 'matchRegexp:^.{8,32}$', 'matchRegexp:^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|).{8,32}$']}
                        errorMessages={['This field is required', 'Must be 8 to 32 characters', 'Minimum of one uppercase, lowercase, number, and symbol']}
                        onChange={onChangePassword}
                        value={password}
                    />
                    <TextField />
                    <Button type="submit" fullWidth  variant="contained" color="primary"  >
                        Register
                    </Button>
                    <Button onClick={() => login()} style={{ marginTop: 10 }} fullWidth variant="contained" color="primary" >
                        Login
                    </Button>
                </ValidatorForm>
            </div>
        </Container>

    );
}