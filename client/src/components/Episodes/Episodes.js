import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import NavBar from '../NavBar/NavBar';
import '../Home/Home.scss'
import Pagination from '../Pagination/Pagination';
import Card from '../Card/Card';
import { filterAll, filterEpisodes, getCaracters, getEpisodes } from '../../actions/actions';

const Episodes = () => {

    const characters = useSelector(state => state.personajes);
    const dispatch = useDispatch();

    const episodes = useSelector(state => state.episodes);

    const [currentPage, setCurrentPage] = useState(1)
    const [cardsPerPage] = useState(16)

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;

    const currentCharacters = characters.slice(indexOfFirstCard, indexOfLastCard)
    
    const paginate = (pageNumber) => setCurrentPage(pageNumber)



    useEffect(() => {
        if(episodes.length === 0){
            dispatch(getEpisodes())
        }
        if(characters.length === 0){
            dispatch(getCaracters())
        }
    }, [dispatch, episodes, characters])
     
    

    const selectEpisodes = (e) => {
        const value = e.target.value;
        if(value === 'All'){
            dispatch(filterAll())
        }else{
            dispatch(filterEpisodes(value))
        }
    }


    return (
        <div className='ctn'>
            <NavBar/>
            <div className='home'>
                
                <div className='filter'>
                <select className='selects' onChange={selectEpisodes}>
                        <option  key={0} value='All'>All</option>
                        {
                            episodes.map(item => (
                                <option key={item.id} value={item.id}>{item.id} - {item.name.slice(0,20)} { item.name.length > 20 ? '...' : null}</option>
                            ))
                        }
                    </select>
                </div>
                
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

export default Episodes
