import axios from 'axios';

export const getCaracters = () => async (dispatch) => {
    try{
        const res = await axios.get('http://localhost:4000/characters')
        const result = res.data;
        console.log(result.data);
        dispatch({
            type: 'GET_CHARACTERS', 
            payload: result.body
        })
    }catch (e){
        console.log(e)
    }
};

// ALL CHARACTERS
export const filterAll = () => async (dispatch) => {
    dispatch({
        type: 'FILTER_ALL',
        payload: 'All'
    })
}

// FILTER STATUS
export const filterAlive = () => async (dispatch) => {
    dispatch({
        type: 'FILTER_ALIVE',
        payload: 'Alive'
    })
}

export const filterDead = () => async (dispatch) => {
    dispatch({
        type: 'FILTER_DEAD',
        payload: 'Dead'
    })
}

export const filterUnknown = () => async (dispatch) => {
    dispatch({
        type: 'FILTER_UNKNOWN',
        payload: 'unknown'
    })
}




// FILTER GENDER

export const filterFemale = () => async (dispatch) => {
    dispatch({
        type: 'FILTER_FEMALE',
        payload: 'Female'
    })
}

export const filterMale = () => async (dispatch) => {
    dispatch({
        type: 'FILTER_MALE',
        payload: 'Male'
    })
}

export const filterGenderless = () => async (dispatch) => {
    dispatch({
        type: 'FILTER_GENDERLESS',
        payload: 'Genderless'
    })
}

export const filterGenderUnknown = () => async (dispatch) => {
    dispatch({
        type: 'FILTER_GENDER_UNKNOWN',
        payload: 'unknown'
    })
}


export const filterName = (data) => async (dispatch) => {
    // try{
    //     const res = await axios.get(`http://localhost:4000/search/:${data}`)
    //     const result = res.data;

        dispatch({
            type: 'FILTER_NAME',
            payload: data
        })
    
    
}

export const getLocation = () => async (dispatch) => {
    try{
        const res = await axios.get('http://localhost:4000/location');
        const result = res.data;
        
        dispatch({
            type: 'GET_LOCATION',
            payload: result.body
        })
    } catch(e){
        console.log(e)
    }
}

export const filterLocation = (data) => async (dispatch) => {
    dispatch({
        type: 'FILTER_LOCATION',
        payload: data
    })
}


export const getEpisodes = () => async (dispatch) => {
    try {
        const res = await axios.get('http://localhost:4000/episodes');
        const result = res.data;

        dispatch({
            type: 'GET_EPISODES',
            payload: result.body
        })
    } catch(e){
        console.log(e)
    }
}


export const filterEpisodes = (data) => async (dispatch) => {
    dispatch({
        type : 'FILTER_EPISODES',
        payload: data
    })
}