import React, { useContext, useEffect, useState } from 'react';
import SearchReasultHeader from '../Components/SearchReasultHeader.jsx'
import Footer from './Footer.jsx';
import { useParams } from 'react-router-dom';
import { Context } from '../utils/Context.js';
import { fetchDataFromApi } from '../utils/api.js';

const SearchReasult = () => {

  const [result, setResult] = useState();
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
      console.log(res);
      setResult(res)
    })
  }

  return (
    <div className='search-reasult-cont'>
      <SearchReasultHeader />
      <main className='search-reasult-main'>

      </main>
      <Footer />
    </div>
  )
}

export default SearchReasult