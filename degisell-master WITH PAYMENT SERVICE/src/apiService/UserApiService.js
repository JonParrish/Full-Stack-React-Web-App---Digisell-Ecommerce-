import axios from 'axios';

const axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
};

class UserService {
    async getAllUser(){

        const response = await axios.get("http://localhost:8080/users");
        return response.data;
    }

    async getUser(json) {

        const response = await axios.post("http://localhost:8080/users/id", json, axiosConfig).catch(function (error) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        });
        return response.data;
    }

    async loginUser(json) {

        const response = await axios.post("http://localhost:8080/users/validate", json, axiosConfig).catch(function (error) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        });
        return response.data;
    }


    async upsertUser(json) {

        const response = await axios.post("http://localhost:8080/users/save", json, axiosConfig).catch(function (error) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        });
        return response.data;
    }

    async deleteUser(json) {

        const response = await axios.post("http://localhost:8080/users/delete", json, axiosConfig).catch(function (error) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        });
        return response.data;
    }
}

export default new UserService();
