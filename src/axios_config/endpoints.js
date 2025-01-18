const BASE_URL = "http://localhost:8000";

const endpoints = {
  // users
  loginEndpoint: `${BASE_URL}/api/users/login`,
  registerEndpoint: `${BASE_URL}/api/users/register`,
  getUsersEndpoint: `${BASE_URL}/api/users/all`,

  //profile
  // studend
  createStudentProfile: `${BASE_URL}/api/profiles/student`,
};

export default endpoints;