class Api {
    constructor(options) {
        this._baseUrl = options.baseUrl
        this._headers = options.headers
    }

    // User

    getUserInfo() {
        const url = `${this._baseUrl}/users/me`
        return fetch(url, {
                headers: this._headers,
                credentials: 'include',
            })
            .then(this._getResponseData);

    }

    editUserInfo({
        name,
        about
    }) {
        const url = `${this._baseUrl}/users/me`
        return fetch(url, {
                method: 'PATCH',
                headers: this._headers,
                credentials: 'include',
                body: JSON.stringify({
                    name: name,
                    about: about
                })
            })
            .then(this._getResponseData);

    }

    updateAvatar(link) {
        const url = `${this._baseUrl}/users/me/avatar`
        console.log(link)
        return fetch(url, {
                method: 'PATCH',
                headers: this._headers,
                credentials: 'include',
                body: JSON.stringify({
                    avatar: link.avatar,
                })
            })
            .then(this._getResponseData);

    }

    // Cards

    getInitialCards() {
        const url = `${this._baseUrl}/cards`
        return fetch(url, {
                headers: this._headers,
                credentials: 'include',
            })
            .then(this._getResponseData);

    }

    addNewCard({
        name,
        link
    }) {
        const url = `${this._baseUrl}/cards`
        return fetch(url, {
                method: 'POST',
                headers: this._headers,
                credentials: 'include',
                body: JSON.stringify({
                    name: name,
                    link: link
                })
            })
            .then(this._getResponseData);
    }

    deleteCard(id) {
        const url = `${this._baseUrl}/cards/${id}`
        return fetch(url, {
                method: 'DELETE',
                headers: this._headers,
                credentials: 'include',
            })
            .then(res => {
                if (res.ok) {
                    return res;
                }
                return Promise.reject(`????????????: ${res.status}`);
            });
    }
    changeLikeCardStatus(id, isLiked) {
        if (isLiked) {
            return this.deleteLike(id)
        } else {
            return this.addLike(id)
        }
    }


    addLike(id) {
        const url = `${this._baseUrl}/cards/${id}/likes`
        return fetch(url, {
                method: 'PUT',
                headers: this._headers,
                credentials: 'include',
            })
            .then(this._getResponseData);
    }

    deleteLike(id) {
        const url = `${this._baseUrl}/cards/${id}/likes`
        return fetch(url, {
                method: 'DELETE',
                headers: this._headers,
                credentials: 'include',
            })
            .then(this._getResponseData);
    }

    _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`????????????: ${res.status}`);
        }
        return res.json();
    }

}

export default new Api({
    baseUrl: 'http://api.study.mesto.nomoredomains.rocks',
    headers: {
        'Content-Type': 'application/json'
    }
});