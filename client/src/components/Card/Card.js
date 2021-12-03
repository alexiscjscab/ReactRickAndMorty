import React from 'react';
import './Card.scss';

const Card = ({name, id, img,location, species, status,gender}) => {
    return (
        <div className='card' key={id}>
            <div className='name'>
                <h3>{name}</h3>
            </div>
            
            <div className='imagen'>
                <img src={img} alt={name}/>

            </div>

            <div className='dates'>
                <p><span>Specie:</span>  {species}</p>
                <p className={status}><span>Status:</span> {status}</p>
                <p><span>Gender:</span> {gender}</p>
                <p><span>Location:</span> {location}</p>
            </div>
        </div>
    )
}

export default Card
