import React from 'react';
import Loader from "react-loader-spinner";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { getCaracters } from "../../actions/actions";
import './LandingPage.scss'

const LandingPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const characters = useSelector(state => state.personajes);

    useEffect(() => {
        dispatch(getCaracters());
    },[dispatch]);

    console.log(characters);

    const goHome = () => {
        navigate('/home');
    }

    return (
        <div className='container'>
            <div className='title'>
                <h1>Loading</h1>
            </div>
            <div>
                {

                    characters.length === 0 ?
                    
                    <Loader
                        type="Rings"
                        color="#445588"
                        height={100}
                        width={100}
                        // timeout={3000} //3 secs
                    /> :
                    goHome()
                }
            </div>
        </div>
    )
}

export default LandingPage
