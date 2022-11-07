export default class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  getAll() {
    return fetch(`${this._url}/v1/cohort-54/cards`
    , {headers: this._headers}
    )
      .then(function(res) {
        console.log(res);
      })
  }

}

