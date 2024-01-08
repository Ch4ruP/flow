import React, { useState, useEffect } from 'react';
import axios from 'axios';

const KEY = "sk-N3V665968e2aa72cd3645"

/**
 * The API call is currently a GET request but there is sensitive data with 
 * regards to the key. Sending data via POST doesn't add any level of security at all. 
 * For transferring private data, use SSL.
 * You should ideally use an HTTP header like Authorization to transmit the key, as
 * this is less likely to be logged by intermediaries, or to be emitted 
 * to 3rd party services like bug-trackers.
 * @returns currently returns a title, and a string version of the json data returned
 * by the API call
 */
function PlantSearchBar() {
    const [data, setData] = useState(null);
    const [searchInput, setSearchInput] = useState("");
    const [submitted, setSubmitted] = useState("");

    useEffect (() => {
        // Define key and search parameters
        const params = new URLSearchParams({
        key: KEY,
        q: submitted,
        });

        // Make a GET request with parameters using the params configuration option
        axios.get('https://perenual.com/api/species-list', { params })
        .then((response) => {
            // Handle successful response
            setData(response.data);
            console.log('Data:', response.data);
            // Find parts of API response to show user for them to select appropriate
            let strippedData = response.data.data;
            // Maybe not map as this gives it back twice
            let searchResults = strippedData.map(item => {
                return {
                id: item.id,
                commonName: item.common_name,
                scientific_name: item.scientific_name
                };
            });
            console.log(searchResults)
        })
        .catch((error) => {
            // Handle error
            console.error('Error:', error);
        });
    },[submitted])

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(searchInput);
    }

    return(
    <div>
        <h1>API Data</h1>
        {/* Search bar to search for plant names */}
        <form onSubmit={handleSubmit}>
            <label htmlFor='plantSearch'>Find Plant: </label>
            <input
            id='plantSearch'
            type="text"
            onChange={handleChange}
            value={searchInput} />
        </form>
        {/* Currently shows list of results as a json string
        Would prefer it to be a clickable list of options */}
        <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
    )
}

export default PlantSearchBar;