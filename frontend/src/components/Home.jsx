import { Search } from 'chakra-ui-search'
import { FaSearch } from "react-icons/fa";
import React, { useEffect, useState, Button } from 'react'
import axios from 'axios';
import './HomeStyles.css'
import DataTable from './DataTable';
import BasicUsage from './LoadingModal';
function Home() {
  const [book, setBook] = useState("");
  const [bookdata, setBookdata] = useState([])
  const [loading, setLoading] = useState(false)
  const fetchInfo = () => {
    return axios.get(`http://127.0.0.1:5000/book?name=${book}`)
      .then((res) => {setBookdata(res.data); setLoading(false)})
  }

  const handleKeyDown = (event) => {
    if (event.key == 'Enter') {
      fetchInfo();
      setLoading(true);
    }
  }
  return (
    <div>
      {loading && <BasicUsage />}
      <div className='bg'>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder='Book Name...'
            onChange={(e) => setBook(e.target.value)}
            onKeyDown={handleKeyDown}
          />

          <FaSearch id='search-icon' onClick={() => { fetchInfo(); setLoading(true) }} />
        </div>
      </div>
      <div className="table">
        <DataTable book_data={bookdata} />
      </div>
    </div>
  )
}

export default Home