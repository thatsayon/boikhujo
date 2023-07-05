import { Search } from 'chakra-ui-search'
import { FaSearch } from "react-icons/fa";
import React, { useState } from 'react'
import './HomeStyles.css'
function Home() {
  const [book, setBook] = useState("");
  return (
    <div>
      <div className='bg'>
        <div className="input-wrapper">
          <input type="text" placeholder='Book name..' onChange={(e) => setBook(e.target.value)}/>

          <FaSearch id='search-icon' onClick={() => { console.log(book) }} />
        </div>
      </div>
    </div>
  )
}

export default Home