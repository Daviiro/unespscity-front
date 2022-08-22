import { useState, useEffect } from 'react';

import { api } from '../../../services/api';

export default function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  useEffect(() => {
    async function firstLoading() {
      try {
        const token = localStorage.getItem('@unespscity/token');

        if (token) {
          api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
          await api.get('/user')
            .then(response => {
              const { name, email, roles, photo, events } = response.data;

              setUser({
                name,
                email,
                roles,
                photo,
                events
              })
            });
          setIsAuthenticated(true);
        }
      }
      catch (error) {
        console.log(error);
      }
    }

    firstLoading();
    setLoading(false);
  }, []);

  async function handleLogin({ email, password }) {
    try {
      const response = await api.post('/cidadao/login', {
        email,
        password
      });
      const { data } = response.data.data;
      const status = response.status;

      setUser({
        userId: data.id,
        name: data.name,
        email: data.email,
        isAdmin: data.isAdmin,
        panicButton: data.panicButton,
        cityId: data.cityId
      })

      return status; 

      /* localStorage.setItem('@unespscity/token', token);
      api.defaults.headers.Authorization = `Bearer ${token}`;
      setIsAuthenticated(true); */
    }
    catch (error) {
      console.log(error.response);
    }
  }

  function handleLogout() {
    setIsAuthenticated(false);
    localStorage.removeItem('@unespscity/token');
    setUser({});
    api.defaults.headers.Authorization = undefined;
  }

  async function handleUpdatePanicButton() {
    const token = localStorage.getItem('@unespscity/token');

    try {
      let userTemporary = user; 
      userTemporary.panicButton = true;
      setUser(userTemporary);
    }
    catch (error) {
      console.log(error.response)
    }
  }

  async function handleDelete() {
    const token = localStorage.getItem('@unespscity/token');

    const response = await api.delete(`/user/delete/${token}`);
    setIsAuthenticated(false);
    localStorage.removeItem('@unespscity/token');
    setUser({});
    api.defaults.headers.Authorization = undefined;
    console.log(response);
  }

  return { isAuthenticated, loading, handleLogin, handleLogout, handleUpdatePanicButton, handleDelete, user };
}