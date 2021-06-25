import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import service from '../clientService/DigiSellService'
import Grid from '@material-ui/core/Grid'
import Cookies from 'universal-cookie'
import { Drawer, Divider, IconButton } from '@material-ui/core'
import { List, ListItem, ListItemText } from '@material-ui/core'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
// import SelectUSState from 'react-select-us-states'
// import YearMonthPicker from 'react-year-month-picker'

function Copyright () {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://material-ui.com/'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
    marginTop: 50,
    marginLeft: 300,
    top: '50%',
    left: '50%'
  },
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '56.25%' // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}))

const cookies = new Cookies()

export default function Album (event) {
  const [products, setProducts] = useState([])
  const [cart] = useState([])
  const classes = useStyles()
  const [user, setUser] = useState()
  const [isDrawerOpened, setIsDrawerOpened] = useState(false)

  //Payment info const's:
  const [first_name, setFirst_name] = useState()
  const [last_name, setLast_name] = useState()
  const [billing_address, setBilling_address] = useState()
  const [state, setState] = useState()
  const [zip_code, setZip_code] = useState()
  const [card_num, setCard_num] = useState()
  const [expiration_date, setExpiration_date] = useState()
  const [cvv_code, setCvv_code] = useState()

  const onChangeFirst_name = event => {
    setFirst_name(event.target.value)
  }

  const onChangeLast_name = event => {
    setLast_name(event.target.value)
  }

  const onChangeBilling_address = event => {
    setBilling_address(event.target.value)
  }

  const onChangeState = event => {
    setState(event.target.value)
  }

  const onChangeZip_code = event => {
    setZip_code(event.target.value)
  }

  const onChangeCard_num = event => {
    setCard_num(event.target.value)
  }

  const onChangeExpiration_date = event => {
    setExpiration_date(event.target.value)
  }

  const onChangeCvv_code = event => {
    setCvv_code(event.target.value)
  }

  const fetchData = async () => {
    let productsArray = await service.getProducts()
    setUser(cookies.get('user'))
    console.log('Products', productsArray)
    setProducts(productsArray)
  }

  const addToCart = product => {
    alert(product.productName + ' was added to the cart')
    cart.push(product)
  }

  const checkout = async () => {
    let paymentInfo = [
      first_name,
      last_name,
      billing_address,
      state,
      zip_code,
      card_num,
      expiration_date,
      cvv_code
    ]

    // console.log('Payment Info', paymentInfo)
    //console.log('Users Cart', cart)

    await service.checkout(cart, paymentInfo)
    while (cart.length > 0) {
      cart.pop()
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const toggleDrawerStatus = () => {
    setIsDrawerOpened(true)
  }
  const closeDrawer = () => {
    setIsDrawerOpened(false)
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth='sm'>
            <Typography
              component='h1'
              variant='h2'
              align='center'
              color='textPrimary'
              gutterBottom
            >
              Welcome to DigiSell Store {user?.firstName}
            </Typography>
            <Typography
              variant='h5'
              align='center'
              color='textSecondary'
              paragraph
            >
              Buy our products! They are all very high quality! <br /> No
              refunds.
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth='md'>
          <div>
            <Grid container>
              <Grid xs={2}></Grid>
              <Grid className={classes.card}>
                <Grid container spacing={2} direction='row'>
                  {products?.map(product => (
                    <Grid item key={product._id}>
                      <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                          <Typography gutterBottom variant='h5' component='h2'>
                            {product?.productName}
                          </Typography>
                          <Typography>{product?.productDescription}</Typography>
                        </CardContent>
                        <CardActions>
                          <Button
                            onClick={() => addToCart(product)}
                            size='small'
                            color='primary'
                          >
                            Add
                          </Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Container>
        <Button
          onClick={() => {
            toggleDrawerStatus()
          }}
          className={classes.margin}
          variant='contained'
          size='large'
          color='primary'
        >
          Cart
        </Button>

        <div>
          <div>
            <IconButton onClick={() => toggleDrawerStatus()}>
              {!isDrawerOpened ? <Button /> : null}
            </IconButton>
          </div>
          <Divider />
          <Drawer
            variant='temporary'
            open={isDrawerOpened}
            onClose={() => closeDrawer()}
          >
            <List>
              {cart?.map(item => (
                <ListItem button key={item.productName}>
                  <ListItemText primary={item.productName} />
                </ListItem>
              ))}
              {/* <ListItem button key='test'>
                <ListItemText primary='test' />
              </ListItem> */}
            </List>

            <label>Payment Information:</label>
            <Container component='main' maxWidth='xs'>
              <CssBaseline />
              <div className={classes.paper}>
                <ValidatorForm
                  onSubmit={() => checkout()}
                  onError={errors => console.log(errors)}
                >
                  <TextValidator
                    error=''
                    variant='outlined'
                    margin='normal'
                    required
                    fullWidth
                    id='first_name'
                    label='first_name'
                    name='first_name'
                    autoComplete='first_name'
                    autoFocus
                    validators={[
                      'required',
                      'matchRegexp:^[a-zA-Z]+$',
                      'matchRegexp:^.{2,15}$'
                    ]}
                    errorMessages={[
                      'This field is required',
                      'Can only contain letters',
                      'Must be 2 to 15 characters'
                    ]}
                    onChange={onChangeFirst_name}
                    value={first_name}
                  />
                  <TextValidator
                    variant='outlined'
                    margin='normal'
                    required
                    fullWidth
                    id='last_name'
                    label='last_name'
                    name='last_name'
                    autoComplete='last_name'
                    autoFocus
                    validators={[
                      'required',
                      'matchRegexp:^[a-zA-Z]+$',
                      'matchRegexp:^.{2,15}$'
                    ]}
                    errorMessages={[
                      'This field is required',
                      'Can only contain letters',
                      'Must be 2 to 15 characters'
                    ]}
                    onChange={onChangeLast_name}
                    value={last_name}
                  />
                  <TextValidator
                    variant='outlined'
                    margin='normal'
                    required
                    fullWidth
                    id='billing_address'
                    label='billing_address'
                    name='billing_address'
                    autoComplete='billing_address'
                    autoFocus
                    validators={['required', 'matchRegexp:^.{2,50}$']}
                    errorMessages={[
                      'This field is required',
                      'Must be 2 to 50 characters'
                    ]}
                    onChange={onChangeBilling_address}
                    value={billing_address}
                  />
                  {/* <TextValidator
                        error=""
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="state"
                        label="state"
                        name="state"
                        autoComplete="state"
                        autoFocus
                        validators={['required', 'matchRegexp:^[a-zA-Z]+$', 'matchRegexp:^.{2,15}$']}
                        errorMessages={['This field is required', 'Can only contain letters', 'Must be 2 to 15 characters']}
                        onChange={onChangeFirstName}
                        value={first_name}
                    /> */}
                  {/* Select a state:{' '}
                  <SelectUSState
                    id='state'
                    onChange={onChangeState}
                    value={state}
                  /> */}
                  <TextValidator
                    variant='outlined'
                    margin='normal'
                    required
                    fullWidth
                    id='state'
                    label='state'
                    name='state'
                    autoComplete='state'
                    autoFocus
                    validators={[
                      'required',
                      'matchRegexp:^[a-zA-Z]+$',
                      'matchRegexp:^.{2,2}$'
                    ]}
                    errorMessages={[
                      'This field is required',
                      'Can only contain letters',
                      'Must be only 2 letters'
                    ]}
                    onChange={onChangeState}
                    value={state}
                  />
                  <TextValidator
                    variant='outlined'
                    margin='normal'
                    required
                    fullWidth
                    id='zip_code'
                    label='zip_code'
                    name='zip_code'
                    autoComplete='zip_code'
                    autoFocus
                    validators={[
                      'required',
                      'matchRegexp:^[0-9]',
                      'matchRegexp:^.{5,5}$'
                    ]}
                    errorMessages={[
                      'This field is required',
                      'Can only contain numbers',
                      'Must be 5 numbers'
                    ]}
                    onChange={onChangeZip_code}
                    value={zip_code}
                  />
                  <TextValidator
                    error=''
                    variant='outlined'
                    margin='normal'
                    required
                    fullWidth
                    id='card_num'
                    label='card_num'
                    name='card_num'
                    autoComplete='card_num'
                    autoFocus
                    validators={[
                      'required'
                      // 'matchRegexp:^[0-9]',
                      // 'matchRegexp:^.{16,16}$'
                    ]}
                    errorMessages={[
                      'This field is required'
                      // 'Can only contain numbers',
                      // 'Must be 16 numbers'
                    ]}
                    onChange={onChangeCard_num}
                    value={card_num}
                  />
                  {/* <YearMonthPicker
                    closeOnSelect
                    onChange={onChangeExpiration_date}
                  /> */}
                  <TextValidator
                    error=''
                    variant='outlined'
                    margin='normal'
                    required
                    fullWidth
                    id='expiration_date'
                    label='expiration_date'
                    name='expiration_date'
                    autoComplete='expiration_date'
                    autoFocus
                    validators={[
                      'required',
                      'matchRegexp:^[0-9]+/',
                      'matchRegexp:^.{5,5}$'
                    ]}
                    errorMessages={[
                      'This field is required',
                      'Can only contain numbers',
                      'Must be 4 numbers and a backslash'
                    ]}
                    onChange={onChangeExpiration_date}
                    value={expiration_date}
                  />
                  <TextValidator
                    error=''
                    variant='outlined'
                    margin='normal'
                    required
                    fullWidth
                    id='cvv_code'
                    label='cvv_code'
                    name='cvv_code'
                    autoComplete='cvv_code'
                    autoFocus
                    validators={[
                      'required',
                      'matchRegexp:^[0-9]',
                      'matchRegexp:^.{3,3}$'
                    ]}
                    errorMessages={[
                      'This field is required',
                      'Can only contain numbers',
                      'Must be 3 numbers'
                    ]}
                    onChange={onChangeCvv_code}
                    value={cvv_code}
                  />
                  <Button
                    type='submit'
                    fullWidth
                    variant='contained'
                    color='primary'
                  >
                    Checkout
                  </Button>
                </ValidatorForm>
              </div>
            </Container>
            {/* <Button
              onClick={() => {
                checkout()
                toggleDrawerStatus()
              }}
              variant='contained'
              color='primary'
              size='sm'
            >
              Check Out
            </Button> */}
          </Drawer>
        </div>
        <br />
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant='h6' align='center' gutterBottom>
          DigiSell
        </Typography>
        <Typography
          variant='subtitle1'
          align='center'
          color='textSecondary'
          component='p'
        >
          Legal stuff here.
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  )
}
