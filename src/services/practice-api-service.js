import config from '../config';
import TokenService from './token-service';

const PracticeApiService = {
  fetchUserPractice() {
    return fetch(`${config.API_ENDPOINT}/practice`, {
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
      .catch(() => alert('Practice fetch has encountered an error'));
  },

  fetchPracticeById(id) {
    return fetch(`${config.API_ENDPOINT}/practice/${id}`, {
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
      .catch(() => alert('Practice fetch has encountered an error'));
  },

  addPractice(practice) {
    debugger
    return fetch(`${config.API_ENDPOINT}/practice`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${TokenService.fetchAuthToken()}`,
      },
      body: JSON.stringify(practice),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((e) => Promise.reject(e));
        } else {
          return res.json();
        }
      })
      .catch(() => alert('Add practice has encountered an error'));
  },

  deletePractice(id) {
    return fetch(`${config.API_ENDPOINT}/practice/${id}`, {
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

  editPractice(practice, id) {
    return fetch(`${config.API_ENDPOINT}/practice/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${TokenService.fetchAuthToken()}`,
      },
      body: JSON.stringify(practice),
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

export default PracticeApiService;
