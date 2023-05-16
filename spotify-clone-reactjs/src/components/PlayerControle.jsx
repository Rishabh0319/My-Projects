import React from 'react'
import { BsFillPlayCircleFill, BsFillPauseCircleFill, BsShuffle, BsPauseCircleFill, BsPlayCircleFill } from 'react-icons/bs'
import { CgPlayTrackNext, CgPlayTrackPrev } from 'react-icons/cg';
import { FiRepeat } from 'react-icons/fi';
import { useStateProvider } from '../utils/StateProvider';
import axios from 'axios';
import { reducerCases } from '../utils/Constants';


const PlayerControle = () => {

    const [{ token, playerState }, dispatch] = useStateProvider();

    // change Song Track Function (Prev/Next) {PREMIUM TO ACCESS CONTROLE}
    const changeTrack = async (type) => {
        console.log(type);

        await axios.post(`https://api.spotify.com/v1/me/player/${type}`, {}, {
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            }
        });

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

            dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying })
            console.log(token);
        }
        else
            dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying: null })
    }


    const changeState = async () => {
        const state = playerState ? "pause" : "play"
        const response = await axios.put(`https://api.spotify.com/v1/me/player/${state}`, {}, {
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            }
        });
        dispatch({ type: reducerCases.SET_PLAYER_STATE, playerState: !playerState })
    }


    return (
        <div className='player-controle-container'>
            <div className='shuffle'>
                <BsShuffle />
            </div>
            <div className="previous">
                <CgPlayTrackPrev onClick={() => changeTrack('previous')} />
            </div>
            <div className="state">
                {playerState ? <BsPauseCircleFill onClick={changeState} /> : <BsPlayCircleFill onClick={changeState} />}
            </div>
            <div className="next">
                <CgPlayTrackNext onClick={() => changeTrack('next')} />
            </div>
            <div className="repeat">
                <FiRepeat />
            </div>
        </div>
    )
}

export default PlayerControle