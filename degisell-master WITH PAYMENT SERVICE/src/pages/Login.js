import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
//import Cookies from 'universal-cookie'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
//import service from '../clientService/DigiSellService'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}))

export default function Login ({ event, ...props }) {
  const classes = useStyles()
  const history = useHistory()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  // const cookies = new Cookies()

  const onChangeUsername = event => {
    setUsername(event.target.value)
  }

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  const handleSubmit = async () => {
    //UNCOMMENT ALL OF THIS TO MAKE TEST THE REAL LOGIN
    // let json = JSON.stringify({
    //   username: username,
    //   password: password
    // })

    // let status = await service.validateUser(json)

    // if (status !== ""){
    history.push('/Store')
    // props.setUser(true)
    // cookies.set('user', status, { path: '/' })
    // }
  }

  const register = () => {
    history.push('/')
  }

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component='h1' variant='h5'>
          Login
        </Typography>
        <ValidatorForm
          onSubmit={handleSubmit}
          onError={errors => console.log(errors)}
        >
          <TextValidator
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='username'
            label='Username'
            name='username'
            autoComplete='username'
            autoFocus
            validators={[
              'required',
              'matchRegexp:^[a-zA-Z0-9]+$',
              'matchRegexp:^.{4,32}$'
            ]}
            errorMessages={[
              'This field is required',
              'Can only contain letters and numbers',
              'Must be 4 to 32 characters'
            ]}
            onChange={onChangeUsername}
            value={username}
          />
          {/* Password Field and will contain password type */}
          <TextValidator
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
            validators={[
              'required',
              'matchRegexp:^.{8,32}$',
              'matchRegexp:^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|).{8,32}$'
            ]}
            errorMessages={[
              'This field is required',
              'Must be 8 to 32 characters',
              'Minimum of one uppercase, lowercase, number, and symbol'
            ]}
            onChange={onChangePassword}
            value={password}
          />
          <TextField />
          <Button type='submit' fullWidth variant='contained' color='primary'>
            Login
          </Button>
          <Button
            onClick={() => register()}
            style={{ marginTop: 10 }}
            fullWidth
            variant='contained'
            color='primary'
          >
            Register
          </Button>
        </ValidatorForm>
      </div>
    </Container>
  )
}
