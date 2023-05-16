import React, { useEffect } from 'react'
import { useStateProvider } from '../utils/StateProvider';
import axios from 'axios';
import { reducerCases } from '../utils/Constants';

const CurrentTrack = () => {

    const [{ token, currentlyPlaying }, dispatch] = useStateProvider();

    useEffect(() => {

        const getCurrentTrack = async () => {
            const response = await axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Content-Type': 'application/json'
                }
            });

            // console.log(response);
            if (response.status === 200) {
                const { item } = response.data;
                const currentlyPlaying = {
                    id: item.id,
                    name: item.name,
                    artists: item.artists.map((artist) => artist.name),
                    image: item.album.images[2].url,
                }
                // console.log(currentlyPlaying, "bar bar");

                // Dispatch the data or perform any other actions with the trackData
                dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying })

            } else {
                console.log('No track currently playing');
            }

        };

        getCurrentTrack();

    }, [token, dispatch,currentlyPlaying]);

    return (
        <div className='currenttrack-container'>
            {
                currentlyPlaying && (
                    <div className="track">
                        <div className="track__image">
                            <img src={currentlyPlaying.image} alt="currentlyPlaying" />
                        </div>
                        <div className="track__info">
                            <h4>{currentlyPlaying.name}</h4>
                            <h6>{currentlyPlaying.artists.join(', ')}</h6>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default CurrentTrack