export default class Api {
  #onResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject({ message: "Ошибка на стороне сервера", res })
  }

  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }
  getCards() {
    return fetch(`${this._url}/v1/cohort-54/cards`, { headers: this._headers })
      .then(this.#onResponse);
  }
  getObject() {
    return fetch(`${this._url}/v1/cohort-54/users/me`, { headers: this._headers })
      .then(this.#onResponse);
  }
  editInfo(data) {
    return fetch(`${this._url}/v1/cohort-54/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(data)
    })
      .then(this.#onResponse);
  }

}
