import React from 'react';
import './Pagination.scss'
const Pagination = ({cardsPerPage, paginate, characters}) => {
    

    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(characters / cardsPerPage); i++) {
        pageNumbers.push(i);
    }
    

    return (
        <div className='pagination'>
            <ul>
               
                {
                    pageNumbers.map(number => {
                        return(
                            <li key={number}>
                                <span onClick={() => paginate(number)}>{number}</span>
                            </li>
                        )
                    })
                }
               
            </ul>
        </div>
    )
}

export default Pagination
