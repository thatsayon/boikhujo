import { Search } from 'chakra-ui-search'
import { FaSearch } from "react-icons/fa";
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './HomeStyles.css'
import DataTable from './DataTable';

function Home() {
  const [book, setBook] = useState("");
  const [bookdata, setBookdata] = useState([])

  const fetchInfo = () => {
    return axios.get(`http://127.0.0.1:5000/book?name=${book}`)
      .then((res) => setBookdata(res.data));
  }

  return (
    <div>
      <div className='bg'>
        <div className="input-wrapper">
          <input type="text" placeholder='Book name..' onChange={(e) => setBook(e.target.value)} />

          <FaSearch id='search-icon' onClick={() => { fetchInfo() }} />
        </div>
      </div>
      <div className="table">
        <DataTable book_data={bookdata} />
      </div>
    </div>
  )
}

export default Home