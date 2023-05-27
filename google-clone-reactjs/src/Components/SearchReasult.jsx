import React, { useContext, useEffect, useState } from 'react';
import SearchReasultHeader from '../Components/SearchReasultHeader.jsx';
import Footer from './Footer.jsx';
import { useParams } from 'react-router-dom';
import { Context } from '../utils/Context.js';
import { fetchDataFromApi } from '../utils/api.js';
import SearchItemTemplate from '../Components/SearchItemTemplate.jsx';
import SearchImageItemsTemplate from '../Components/SearchImageItemsTemplate.jsx';
import Pagination from './Pagination.jsx';

const SearchReasult = () => {
  const [result, setResult] = useState(null); // Initialize result with null
  const { query, startIndex } = useParams();
  const { imageSearch } = useContext(Context);

  useEffect(() => {
    fetchSearchReasults();
  }, [query, startIndex, imageSearch]);

  const fetchSearchReasults = () => {
    let payload = { q: query, start: startIndex }
    if (imageSearch) {
      payload.searchType = "image"
    }
    fetchDataFromApi(payload).then((res) => {
      setResult(res);
    });
  }

  console.log(result);

  // Perform null check before accessing properties of result
  const { items, queries, searchInformation } = result || {};

  return (
    <div className='search-reasult-cont'>
      <SearchReasultHeader />
      <main className='search-reasult-main'>
        <div className='search-info-cont'>
          {result && searchInformation && // Perform null check before accessing properties
            `About: ${searchInformation.formattedTotalResults} Results in (${searchInformation.searchTime})`}
        </div>
        {
          items && items.map((item, index) => (
            !imageSearch ? (
              <div className='.search-info-cont'>
                <SearchItemTemplate key={index} data={item} />
              </div>
            ) : (
              <div className='images-frame'>
                <SearchImageItemsTemplate key={index} data={item} />
              </div>
            )
          ))
        }
        <Pagination queries={queries} />
      </main>
      <Footer />
    </div>
  );
}

export default SearchReasult;
