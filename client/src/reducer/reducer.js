const initialState = {
    personajes : [],
    original:[],
    location: [],
    episodes: [],
    acu: []
};

const rootReducer = (state = initialState, {type, payload}) => {
    switch (type) {

        case 'GET_CHARACTERS':
            return {
                ...state,
                personajes: payload,
                original: payload
            }

        case 'FILTER_ALIVE':
            let filterAlive = state.original.filter(personaje => personaje.status === 'Alive')
            return {
                ...state,
                personajes: filterAlive
            }

        case 'FILTER_DEAD':
            let filterDead = state.original.filter(personaje => personaje.status === 'Dead')
            return {
                ...state,
                personajes: filterDead
            }

        case 'FILTER_UNKNOWN':
            let filterUnknown = state.original.filter(personaje => personaje.status === 'unknown')
            return {
                ...state,
                personajes: filterUnknown
            }
        case 'FILTER_ALL':
            return{
                ...state,
                personajes: state.original
            }

        case 'FILTER_FEMALE' :
            let filterFemale = state.original.filter(personaje => personaje.gender === payload)    
            return {
                ...state,
                personajes: filterFemale
            }

        case 'FILTER_MALE' :
            let filterMale = state.original.filter(personaje => personaje.gender === payload)    
            return {
                ...state,
                personajes: filterMale
            }
        
        case 'FILTER_GENDERLESS' :
            let filterGenderless = state.original.filter(personaje => personaje.gender === payload)    
            return {
                ...state,
                personajes: filterGenderless
            }
        case 'FILTER_GENDER_UNKNOWN' : 
            let filterGenderUnknown = state.original.filter(personaje => personaje.gender === payload)
            return {
                ...state,
                personajes: filterGenderUnknown
            }

        case 'FILTER_NAME' : 
            
            return{
                ...state,
                personajes:  state.original.filter(personaje => personaje.name.toLowerCase().includes(payload.toLowerCase()))
            }

        case 'GET_LOCATION':
            return{
                ...state,
                location: payload
            }
        case 'FILTER_LOCATION':
            let filterLocation = state.original.filter(personaje => personaje.location.name.toLowerCase().includes(payload.toLowerCase()))    
            return{
                ...state,
                personajes: filterLocation
            }
        
        case 'GET_EPISODES':    
            return{
                ...state,
                episodes: payload
            }
        case 'FILTER_EPISODES':
            let url =`https://rickandmortyapi.com/api/episode/${payload}`
            let filterEpisodes = state.original.filter(personaje => personaje.episode.includes(url))
            return{
                ...state,
                personajes: filterEpisodes
            }
               


        default:
            return state;
    }
}

export default rootReducer;