import { useState, useEffect } from 'react';

import API_KEY from './keys';


// Key to tell google which search engine to use
const CONTEXT_KEY = '4bc926ea4b64cbcab';





// Custom hook to make google search when data layer revieves a new term
const useGoogleSearch = (term) => {

    // Store the json search result in state
    const [ data, setData ] = useState(null);



    useEffect(() => {
        // Method to fetch the results
        const fetchData = async() => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
            // Convert results to json
            .then(response => response.json())
            // Store json results in state
            .then(result => {
                setData(result);
                console.log(result);
            })
        }

        // Call the method
        fetchData();
    }, [term]);

    // Return the results
    return { data };
};

export default useGoogleSearch;



