import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import RoomIcon from '@material-ui/icons/Room';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import './SearchPage.css';
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';
// import Response from '../response';
import Search from '../components/Search';




const SearchPage = () => {

    // Take value of term from data layer
    const [ { term="tesla" }, dispatch ] = useStateValue();

    // Use custom hook to get results of google search
    const { data } = useGoogleSearch(term);

    // Mock API call
    // const data = Response;


    return (
        <div className="searchPage">
            <div className="searchPage__header">
                {/* Logo */}
                <Link to="/">
                    <img className="searchPage__logo" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt=""/>
                </Link>

                <div className="searchPage__headerBody">
                    {/* Search bar without buttons */}
                    <Search hideButtons />

                    <div className="searchPage__options">
                        {/* Left side option icons */}
                        <div className="searchPage__optionsLeft">
                            <div className="searchPage__option">
                                <SearchIcon />
                                <Link to="/all">All</Link>
                            </div>

                            <div className="searchPage__option">
                                <DescriptionIcon />
                                <Link to="/news">New</Link>
                            </div>

                            <div className="searchPage__option">
                                <ImageIcon />
                                <Link to="/images">Images</Link>
                            </div>

                            <div className="searchPage__option">
                                <LocalOfferIcon />
                                <Link to="/shopping">Shopping</Link>
                            </div>

                            <div className="searchPage__option">
                                <RoomIcon />
                                <Link to="/maps">Maps</Link>
                            </div>

                            <div className="searchPage__option">
                                <MoreVertIcon />
                                <Link to="/more">More</Link>
                            </div>
                        </div>

                        {/* Right side option icons */}
                        <div className="searchPage__optionsRight">
                            <div className="searchPage__option">
                                <Link to="/settings">Settings</Link>
                            </div>

                            <div className="searchPage__option">
                                <Link to="/tools">Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {term && (
                <div className="searchPage__results">
                    {/* Search information */}
                    <p className="searchPage__resultCount">
                        About {data?.searchInformation.formattedTotalResults} results 
                        ({data?.searchInformation.formattedSearchTime} seconds) for {term}
                    </p>

                    {/* Results */} 
                    {data?.items.map(item => (
                        <div className="searchPage__result">

                            <a className="searchPage__resultLink" href={item.link}>
                                {/* Picture */}
                                {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                                    <img 
                                        className="searchPage__resultImage" 
                                        src={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src} alt=''
                                    />
                                )}

                                {/* Link for website */}
                                {item.displayLink}
                            </a>

                            {/* Website title */}
                            <a className="searchPage__resultTitle" href={item.link}>
                                <h2>{item.title}</h2>
                            </a>

                            {/* Snippet of information */}
                            <p className="searchPage__resultSnippet">{item.snippet}</p>
                        </div>
                    ))}
                </div>
            )}
           
        </div>
    );
};

export default SearchPage;
