export default class Api{
    constructor(opitions) {
        this._url = opitions.baseUrl;
        this._headers = opitions.headers;
        this._authorization = opitions.headers.authorization
    }

    _sendRequest(res){ return res.ok ? res.json() : Promise.reject }

    getInfo(){
        return fetch(`${this._url}/users/me`, {
            headers: {
                authorization: this._authorization
            }
        })
        .then(this._sendRequest)
    }
    
    getCards(){
        return fetch(`${this._url}/cards`, {
            headers: {
                authorization: this._authorization
            }
        })
        .then(this._sendRequest)
    }
    
    setUserInfo(data) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.username,
                about: data.profession,
            })
        })
        .then(this._sendRequest)
    }

    getNewAvatar(data) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.avatar,
            })
        })
        .then(this._sendRequest)
    }

    getNewCard(data) {
        return fetch(`${this._url}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: data.title,
                link: data.link,
            })
        })
        .then(this._sendRequest)
    }

    getLike(cardId) {
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            method: 'PUT',
            headers: {
            authorization: this._authorization}
        })
        .then(this._sendRequest)
    }

    deleteLike(cardId) {
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: {
            authorization: this._authorization}
        })
        .then(this._sendRequest)
    }

    deleteCard(cardId){
        return fetch(`${this._url}/cards/${cardId} `, {
            method: 'DELETE',
            headers: {
            authorization: this._authorization}
        })
        .then(this._sendRequest) 
    }
}

// getInfo(){
//     return new Promise((resolve, reject) => {
//         fetch(`${this._url}/users/me`, {
//             headers: {
//                 authorization: this._authorization
//             }
//         })
//         .then(res => {
//             if (!res.ok) {
//                 reject(new Error('Ошибка: ' + response.status));
//             }
//             resolve(res.json());
//         });
//     });
// }


// getCards(){
//     return new Promise((resolve, reject) => {
//         fetch(`${this._url}/cards`, {
//             headers: {
//                 authorization: this._authorization
//             }
//         })
//         .then(res => {
//             if (!res.ok) {
//                 reject(new Error('Ошибка: ' + response.status));
//             }
//             resolve(res.json());
//         });
//     });
// }