import React from 'react';
import './search.css'
const Search = ({status,setStatus,search,setSearch}) => {
    const searchInput=(e)=>{
        setSearch(e.target.value)
    };

    const searchTab = (e)=>{
        setStatus(e.target.value)
    };
    return (
        <div className='search'>
            <input type="text" placeholder='search todo' className='search-input' onChange={searchInput}/>
            <div className='btns'>
                <button className='search-button' value='all' type='button' onClick={searchTab}>All</button>
                <button className='search-button' value='active' type='button' onClick={searchTab}>Active</button>
                <button className='search-button' value='done' type='button' onClick={searchTab}>Done</button>
            </div>
        </div>
    );
};

export default Search;