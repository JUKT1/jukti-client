import axios from 'axios';
import endpoints from '../axios_config/endpoints';

const login = async (username, password) => {
    try {
        // console.log('Sending login request with:', { username, password });
        const response = await axios.post(
          endpoints.loginEndpoint,
          {
            username,
            password,
          }
        );
        // console.log('Login response:', response.data);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        return response.data.token;
    } catch (error) {
        console.error('Error logging in:', error.response ? error.response.data : error.message);
        throw error;
    }
};

export default login;