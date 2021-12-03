import React, {useEffect, useState} from 'react';
import Card from  '../Card/Card';
import { useSelector, useDispatch } from 'react-redux';
import NavBar from '../NavBar/NavBar';
import '../Home/Home.scss'
import { filterAll, filterLocation, getCaracters, getLocation } from '../../actions/actions';
import Pagination from '../Pagination/Pagination';

const Location = () => {

    const [type, setType] = useState(null)

    const dispatch = useDispatch();
    const characters = useSelector(state => state.personajes);
    const location = useSelector(state => state.location);
    
    

    const [currentPage, setCurrentPage] = useState(1)
    const [cardsPerPage] = useState(16)

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;

    const currentCharacters = characters.slice(indexOfFirstCard, indexOfLastCard)
    
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    useEffect(() => {
        if(location.length === 0){
            dispatch(getLocation())
        }
        if(characters.length === 0){
            dispatch(getCaracters())
        }
    },[characters, location, dispatch])

    const selectLocation = (e) => {
        const value = e.target.value
        if(value === 'All'){
            dispatch(filterAll())
            setType(null)
        }else{
            dispatch(filterLocation(value))
            let idLocation = location.findIndex(item => item.name === value)
            setType(idLocation)
        }

    }

    return (
        <div className='ctn'>
            <NavBar/>
            <div className='home'>
                
                <div className='filter'>
                    <select className='selects' onChange={selectLocation}>
                        <option  key={0} value='All'>All</option>
                        {
                            location.map(item => (
                                <option key={item.id} value={item.name}>{item.name.slice(0,20)} { item.name.length > 20 ? '...' : null}</option>
                            ))
                        }
                    </select>
                </div>
                {
                    type ? <p className='type'>  Location Type: {location[type].type}</p> : null
                }
                <div className='cards'>
                    <div className='grid'>
                        {
                            currentCharacters.map(character => (
                                <Card
                                key={character.id}
                                id={character.id}
                                name={character.name}
                                img={character.image}
                                location={character.location.name}
                                species={character.species}
                                status={character.status}
                                gender={character.gender}
                                />
                            ))
                        }
                    </div>
                </div>

                <Pagination
                    cardsPerPage={cardsPerPage}
                    paginate={paginate}
                    characters={characters.length}
                />
            </div>
        </div>
    )
}

export default Location
