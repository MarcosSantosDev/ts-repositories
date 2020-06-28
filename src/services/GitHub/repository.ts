import api from './api';

export default {
  get: async () => {
    const response = await api.get('/users/MarcosSantosDev/repos');

    return response;
  },
};
