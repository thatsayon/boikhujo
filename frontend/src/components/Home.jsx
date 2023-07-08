import { Search } from 'chakra-ui-search'
import { FaSearch } from "react-icons/fa";
import React, { useEffect, useState, Button } from 'react'
import axios from 'axios';
import './HomeStyles.css'
import DataTable from './DataTable';
import BasicUsage from './LoadingModal';
import Footer from './Footer';
import Edata from './Edata';
function Home() {
  const [book, setBook] = useState("");
  const [bookdata, setBookdata] = useState([])
  const [loading, setLoading] = useState(false)
  const fetchInfo = () => {
    return axios.get(`http://127.0.0.1:5000/book?name=${book}`)
      .then((res) => { setBookdata(res.data); setLoading(false) })
  }

  const handleKeyDown = (event) => {
    if (event.key == 'Enter') {
      fetchInfo();
      setLoading(true);
      setBook("");
    }
  }
  return (
    <div>
      {loading && <BasicUsage />}
      <div className='bg'>
        <div className="input-wrapper">
          <input
            value={book}
            type="text"
            placeholder='Book Name...'
            onChange={(e) => setBook(e.target.value)}
            onKeyDown={handleKeyDown}
          />

          <FaSearch id='search-icon' onClick={() => {
            fetchInfo();
            setLoading(true);
            setBook("");
          }} />
        </div>
      </div>
      <div className="table">
        {bookdata.length == 0 ? <Edata /> : <DataTable book_data={bookdata} />}
      </div>
      <Footer/>
    </div>
  )
}

export default Home