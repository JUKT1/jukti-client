import axios from 'axios';
import endpoints from '../axios_config/endpoints';

const register = async (username, email, password, role) => {
    try {
        const response = await axios.post(
          endpoints.registerEndpoint,
          {
            username,
            email,
            password,
            role,
          }
        );
        return response.data.message;
    } catch (error) {
        console.error('Error during signup:', error);
        throw new Error(error.response.data.error);
    }
};

export default register;