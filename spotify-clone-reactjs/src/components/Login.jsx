import React from 'react'

const Login = () => {

    // function call when click to Connect to Spotify
    const handleClick = () => {
        const clientId = 'ed3be913228f451caa7c49263ca62d70';
        const redirectUrl = 'http://localhost:3000/';
        const apiUrl = 'https://accounts.spotify.com/authorize';
        const scope = [
            'user-read-email',
            'user-read-private',
            'user-read-playback-state',
            'user-modify-playback-state',
            'user-read-currently-playing',
            'user-read-playback-position',
            'user-top-read',
            'user-read-recently-played',
            'playlist-read-private',   // access to current user Playlist
            'user-read-currently-playing'
        ];

        window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
            '%20' // Use URL-encoded space as a separator
        )}&response_type=token&show_dialog=true`;
    }

    return (
        <div className='login'>
            <img className='login_img' src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black-768x230.png" alt="Spotify" />
            <button onClick={handleClick} className='login_btn'>Connect to Spotify</button>
            <h4>Made With 💖 By Rishabh Tripathi</h4>
        </div>
    )
}

export default Login