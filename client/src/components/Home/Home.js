import React,{useEffect, useState} from 'react'
import Pagination from '../Pagination/Pagination';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../Card/Card';
import './Home.scss';
import NavBar from '../NavBar/NavBar';
import { filterAlive, filterAll, filterDead, filterFemale, filterGenderless, filterGenderUnknown, filterMale, filterName, filterUnknown, getCaracters } from '../../actions/actions';

const Home = () => {
    const dispatch = useDispatch();
    const characters = useSelector(state => state.personajes);
    const [name , setName] = useState('');
    
    //pagination 
    const [currentPage, setCurrentPage] = useState(1)
    const [cardsPerPage] = useState(24)

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;

    const currentCharacters = characters.slice(indexOfFirstCard, indexOfLastCard)
    
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    

    
    // Female , Male , GenderLess, unknown
   const filterGender = (e) => {
       const value = e.target.value
       return (
           value === 'Female' ? dispatch(filterFemale()) :
           value === 'Male' ? dispatch(filterMale()) :
           value === 'Genderless' ? dispatch(filterGenderless()) :
           value === 'unknown' ? dispatch(filterGenderUnknown()) :
           value === 'All' ? dispatch(filterAll()) : null
       )
   }

    const filterStatus = (e) => {
        const value = e.target.value;
        return (
            value === 'Alive' ? dispatch(filterAlive())
            : 
            value === 'Dead' ? dispatch(filterDead())
            :   
            value === 'unknown' ? dispatch(filterUnknown())
            : 
            value === 'All' ? dispatch(filterAll()) 
            : null
        
        )
    }

    const ChangeName = (e) => {
        setName(e.target.value)
        if(name.length === 0) {
            dispatch(filterAll())
        }else{
            dispatch(filterName(name.trim()))
        }
    }


    useEffect(() => {
        if(characters.length === 0) {
            dispatch(getCaracters())
        }
    },[characters,dispatch])
    
    return (
        <div className='ctn'>
        <NavBar/>
        <div className='home'>
            
            <div className='filter'>
                <span>Status</span>
                <select onChange={filterStatus} className='selects'>
                    <option value='All'>All</option>
                    <option value="Alive">Alive</option>
                    <option value="Dead">Dead</option>
                    <option value="unknown">Unknown</option>
                </select>
                <span>Gender</span>
                <select onChange={filterGender} className='selects'>
                    <option value='All'>All</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">Unknown</option>
                </select>

                <div className='search' >

                    <input 
                        type='text' 
                        placeholder='Search' 
                        value={name}
                        onChange={(e) => ChangeName(e)}
                    />
                    

                    
                </div>
            </div>

            <div className='cards'>
                <div className='grid'>
                {   
                    currentCharacters.length > 0 ?
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
                    :
                    null
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

export default Home
