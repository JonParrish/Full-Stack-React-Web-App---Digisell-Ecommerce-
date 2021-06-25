import axios from 'axios'

const axiosConfig = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*'
  }
}

class PaymentAPIService {
  async createPayment (json) {
    const response = await axios.put(
      'http://localhost:8080/payment/save',
      json,
      axiosConfig
    )
    return response.data
  }
}

export default new PaymentAPIService()
