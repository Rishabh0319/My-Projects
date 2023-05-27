import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import MicIcon from '../assets/mic.svg';
import ImageIcon from '../assets/image.svg';
import { IoMdClose } from 'react-icons/io';
import { useNavigate, useParams } from 'react-router-dom';

const SearchInput = () => {

  const { query } = useParams();
  const [searchQuery, setSearchQuery] = useState(query || "");
  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && searchQuery.length > 0) {
      navigate(`/${searchQuery}/${1}`);
    }
  }

  return (
    <div className="searchBox">
      <AiOutlineSearch size={20} />
      <input
        type="text"
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyUp={searchQueryHandler}
        placeholder='Search'
        value={searchQuery} />
      <div className="search-icons-utl">
        {
          searchQuery && (
            <IoMdClose
              size={24}
              color="#70757a"
              className="cursor-pointer"
              onClick={() => setSearchQuery("")}
            />
          )
        }
        <img src={MicIcon} alt="Mic" />
        <img src={ImageIcon} alt="cam-icon" />
      </div>
    </div>
  )
}

export default SearchInput