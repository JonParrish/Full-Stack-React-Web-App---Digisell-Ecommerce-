import axios from 'axios'

const axiosConfig = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*'
  }
}

class CartAPIService {
  async createCart (json) {
    const response = await axios.put(
      'http://localhost:8888/carts/save',
      json,
      axiosConfig
    )
    return response.data
  }
}

export default new CartAPIService()
