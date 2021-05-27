
export default class Api {
    constructor(options) {
        this._headers = options.headers;
        this._url = options.url;
    }


    getUserInfo()
    {
        return fetch(`${this._url}/users/me`, {
            headers: this._headers,
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }

                // если ошибка, отклоняем промис
                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .then(data => console.log(data))
            .catch((error) => {
                alert('Http error!');
                console.error(error);
            })
    }

}
