import cartApi from '../apiService/CartAPIService'
import userApi from '../apiService/UserApiService'
import productApi from '../apiService/ProductAPIService'
import paymentApi from '../apiService/PaymentAPIService'

class DigiSellService {
  async checkout (products, paymentInfo) {
    var totalPrice = 0

    for (let i = 0; i < products.length; i++) {
      let tempPrice = Number.parseInt(products[i].productPrice)
      totalPrice += tempPrice
    }

    let cartJson = {
      totalItems: JSON.stringify(products),
      totalPrice: String(totalPrice)
    }
    console.log('Users REAL Cart', cartJson)
    //this is literally just so we can have an "id" property
    let paymentJson = {
      first_name: paymentInfo[0],
      last_name: paymentInfo[1],
      billing_address: paymentInfo[2],
      state: paymentInfo[3],
      zip_code: paymentInfo[4],
      card_num: paymentInfo[5],
      expiration_date: paymentInfo[6],
      cvv_code: paymentInfo[7]
    }
    // let paymentJson = {
    //   _id: '',
    //   first_name: 'ajksdad',
    //   last_name: 'adad',
    //   billing_address: 'sdsdsd',
    //   state: 'ssdf',
    //   zip_code: 'sdsdsd',
    //   card_num: '5555555555555555',
    //   expiration_date: 'sdsdsd',
    //   cvv_code: 'sdsdsd'
    // }

    //console.log('Payment Info', paymentInfo)
    console.log('Payment JSON', paymentJson)

    let status = await cartApi.createCart(cartJson)

    console.log('Entering checkout if-statements')
    if (status !== '') {
      console.log('Cart cleared')
      alert('Started checking out!')

      let paymentStatus = await paymentApi.createPayment(paymentJson)

      if (paymentStatus !== '') {
        console.log('Payment cleared')
        alert('You have completed checking out!')
      } else {
        console.log('Broke.')
      }
    }

    return status
  }

  async getProducts () {
    let status = await productApi.getAllProducts()

    return status
  }

  async upsertUser (json) {
    let status = await userApi.upsertUser(json)

    return status
  }

  async validateUser (json) {
    let status = await userApi.loginUser(json)

    return status
  }
}

export default new DigiSellService()
