//rename this file to Spotify.js
const clientId = 'fill this with your spotify access token';
const redirectUri = 'http://localhost:3000/';
let accessToken;

const Spotify = {
    
    getAccessToken() {
        if (accessToken) {
            return accessToken;
        }

        //check for access token
        const accessTokenInMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

        if (accessTokenInMatch && expiresInMatch) {
            accessToken = accessTokenInMatch[1];
            const expiresIn = Number(expiresInMatch[1]);

            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('access Token', null, '/');
            return accessToken;
        } else {
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
            window.location = accessUrl;
        }

    }
}

export default Spotify;