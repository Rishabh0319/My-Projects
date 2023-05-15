import React, { useEffect } from 'react'
import { useStateProvider } from '../utils/StateProvider';
import axios from 'axios';

const CurrentTrack = () => {

    const [{ token, playlists }, dispatch] = useStateProvider();

    useEffect(() => {

        const getCurrentTrack = async () => {

            const response = await axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Content-Type': 'application/json'
                }
            })

            // console.log(response);

            // dispatch({ type: reducerCases.SET_PLAYLISTS, playlists });
        };
        getCurrentTrack();

    });

    return (
        <div className='currenttrack-container'>
            CurrentTrack
        </div>
    )
}

export default CurrentTrack