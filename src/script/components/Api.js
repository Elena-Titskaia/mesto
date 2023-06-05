export default class Api{
    constructor(opitions) {
        this._baseUrl = opitions.baseUrl;
        this._headers = opitions.headers;
        this._authorization = opitions.headers.authorization;
    }

    _request(endpoint, options) {
        return fetch(`${this._baseUrl}${endpoint}`, options)
          .then(res => {
            if (!res.ok) {
              return Promise.reject(`Ошибка ${res.status}`);
            }
            return res.json();
          });
      }

    getInfo(){
        return this._request('/users/me', {
            headers: {
                authorization: this._authorization
            }
        })
    }

    getCards(){
        return this._request('/cards', {
            headers: {
                authorization: this._authorization
            }
        })
    }

    setUserInfo(data) {
        return this._request('/users/me', {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.username,
                about: data.profession,
            })
        })
    }

    getNewAvatar(data) {
        return this._request('/users/me/avatar', {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.avatar,
            })
        })
    }

    getNewCard(data) {
        return this._request('/cards', {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: data.title,
                link: data.link,
            })
        })
    }

    getLike(cardId) {
        return this._request(`/cards/${cardId}/likes`, {
            method: 'PUT',
            headers: {
            authorization: this._authorization}
        })
    }

    deleteLike(cardId) {
        return this._request(`/cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: {
            authorization: this._authorization}
        })
    }

    deleteCard(cardId){
        return this._request(`/cards/${cardId}`, {
            method: 'DELETE',
            headers: {
            authorization: this._authorization}
        })
    }
}


// export default class Api{ 
//     constructor(opitions) { 
//         this._url = opitions.baseUrl; 
//         this._headers = opitions.headers; 
//         this._authorization = opitions.headers.authorization 
//     } 
 
//     _checkResponse(res) {
//         return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`);
//       }
 
//     getInfo(){ 
//         return fetch(`${this._url}/users/me`, { 
//             headers: { 
//                 authorization: this._authorization 
//             } 
//         }) 
//         .then(this._checkResponse) 
//     } 
     
//     getCards(){ 
//         return fetch(`${this._url}/cards`, { 
//             headers: { 
//                 authorization: this._authorization 
//             } 
//         }) 
//         .then(this._checkResponse) 
//     } 
     
//     setUserInfo(data) { 
//         return fetch(`${this._url}/users/me`, { 
//             method: 'PATCH', 
//             headers: this._headers, 
//             body: JSON.stringify({ 
//                 name: data.username, 
//                 about: data.profession, 
//             }) 
//         }) 
//         .then(this._checkResponse) 
//     } 
 
//     getNewAvatar(data) { 
//         return fetch(`${this._url}/users/me/avatar`, { 
//             method: 'PATCH', 
//             headers: this._headers, 
//             body: JSON.stringify({ 
//                 avatar: data.avatar, 
//             }) 
//         }) 
//         .then(this._checkResponse) 
//     } 
 
//     getNewCard(data) { 
//         return fetch(`${this._url}/cards`, { 
//             method: 'POST', 
//             headers: this._headers, 
//             body: JSON.stringify({ 
//                 name: data.title, 
//                 link: data.link, 
//             }) 
//         }) 
//         .then(this._checkResponse) 
//     } 
 
//     getLike(cardId) { 
//         return fetch(`${this._url}/cards/${cardId}/likes`, { 
//             method: 'PUT', 
//             headers: { 
//             authorization: this._authorization} 
//         }) 
//         .then(this._checkResponse) 
//     } 
 
//     deleteLike(cardId) { 
//         return fetch(`${this._url}/cards/${cardId}/likes`, { 
//             method: 'DELETE', 
//             headers: { 
//             authorization: this._authorization} 
//         }) 
//         .then(this._checkResponse) 
//     } 
 
//     deleteCard(cardId){ 
//         return fetch(`${this._url}/cards/${cardId} `, { 
//             method: 'DELETE', 
//             headers: { 
//             authorization: this._authorization} 
//         }) 
//         .then(this._checkResponse)  
//     } 
// } 
