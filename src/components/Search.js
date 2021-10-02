import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';

import './Search.css';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';



const Search = ({ hideButtons = false }) => {

    // Store the text entered in search bar in state
    const [ input, setInput ] = useState('');

    // Custom hook for dispatching to data layer
    const [ {}, dispatch ] = useStateValue();

    // Browsers history
    const history = useHistory();


    // Method for making a search
    const search = e => {
        // Prevent a new page from opening
        e.preventDefault();

        // Dispatch the search term into the data layer
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })

        // Open the results page
        history.push('/search');
    }


    return (
        <form className="search">

            {/* Search Bar */}
             <div className="search__input">
                {/* Search Icon */}
                <SearchIcon className="search__inputIcon" />
                {/* Search input */}
                <input value={input} onChange={e => setInput(e.target.value)} />
                {/* Mic Icon */}
                <MicIcon />
            </div>

            {/* Search Buttons - hidden on results page */}
            {!hideButtons ? (
                <div className="search__buttons">
                    <Button type="submit" onClick={search} variant="outlined">Google Search</Button>
                    <Button variant="outlined">I'm Feeling Lucky</Button>
                </div>
            ) : (
                <div className="search__buttonsHidden">
                    <Button className="search__buttonsHidden" type="submit" onClick={search} variant="outlined">Google Search</Button>
                    <Button className="search__buttonsHidden" variant="outlined">I'm Feeling Lucky</Button>
                </div>
            )}
            
        </form>
    );
};

export default Search;
