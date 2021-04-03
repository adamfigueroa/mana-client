import config from '../config';
import TokenService from './token-service';

const SessionApiService = {
  fetchUserSession() {
    return fetch(`${config.API_ENDPOINT}/session`, {
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${TokenService.fetchAuthToken()}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((e) => Promise.reject(e));
        } else {
          return res.json();
        }
      })
      .catch(() => alert('Session fetch has encountered an error'));
  },

  fetchSessionById(id) {
    return fetch(`${config.API_ENDPOINT}/session/${id}`, {
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${TokenService.fetchAuthToken()}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((e) => Promise.reject(e));
        } else {
          return res.json();
        }
      })
      .catch(() => alert('Session fetch has encountered an error'));
  },

  addSession(session) {
    return fetch(`${config.API_ENDPOINT}/session`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${TokenService.fetchAuthToken()}`,
      },
      body: JSON.stringify(session),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((e) => Promise.reject(e));
        } else {
          return res.json();
        }
      })
      .catch(() => alert('Add session has encountered an error'));
  },

  deleteSession(id) {
    return fetch(`${config.API_ENDPOINT}/session/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${TokenService.fetchAuthToken()}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((e) => Promise.reject(e));
        }
      })
      .catch((error) => alert(error.message));
  },

  editSession(session, id) {
    return fetch(`${config.API_ENDPOINT}/session/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${TokenService.fetchAuthToken()}`,
      },
      body: JSON.stringify(session),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((e) => Promise.reject(e));
        } else {
          return res.ok;
        }
      })
      .catch((error) => alert(error.message));
  },
};

export default SessionApiService;
