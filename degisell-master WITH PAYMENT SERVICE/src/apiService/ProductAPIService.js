import axios from 'axios'

class ProductService {
  async getAllProducts () {
    const response = await axios.get('http://localhost:9060/products')
    return response.data
  }

  async getProduct (json) {
    const axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
      }
    }

    const response = await axios
      .post('http://localhost:9060/products/id', json, axiosConfig)
      .catch(function (error) {
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
      })
    return response.data
  }

  async createProduct (json) {
    const axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
      }
    }

    const response = await axios
      .post('http://localhost:9060/products/save', json, axiosConfig)
      .catch(function (error) {
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
      })
    return response.data
  }

  async deleteProduct (json) {
    const axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
      }
    }

    const response = await axios
      .post('http://localhost:9060/products/delete', json, axiosConfig)
      .catch(function (error) {
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
      })
    return response.data
  }
}

export default new ProductService()
