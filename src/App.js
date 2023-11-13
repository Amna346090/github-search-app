import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Repos from './components/Repos';
import Pagination from './components/Pagination';

function App() {

  const [inputvalue, setInputvalue] = useState("");
  const [repos, setRepos]  = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage, setReposPerPage] = useState(10)

   useEffect(() => {
      if(!inputvalue){
        return;
      }

      const fetchRepos = async () => {
        try{
          setLoading(true);
          const res = await  axios.get(`https://api.github.com/search/repositories?q=${inputvalue}`);
          setRepos(res.data.items);
          setLoading(false);
        }
        catch(error){
          console.error(error);
        }
        
      }

      fetchRepos();
    },[inputvalue]);

   const onSubmit = (e) => {
      e.preventDefault();
      setInputvalue(e.target.elements.search.value);
   }

   const paginate = (pageNumber) => setCurrentPage(pageNumber);

   //Get current repos
   const indexOfLastRepo = currentPage * reposPerPage;  //10
   const indexOfFirstRepo = indexOfLastRepo - reposPerPage; //0
   const currentRepo = repos.slice(indexOfFirstRepo, indexOfLastRepo);

  return (
    <div className="search-container">
      <form onSubmit={onSubmit}>
         <input 
             type="text" 
             name="search" 
             placeholder="Search Github Repositories" 
             className="search-field" 
             />
      </form>

      <Repos repos={currentRepo} loading={loading}/>
      <Pagination reposPerPage={reposPerPage} totalRepos={repos.length} paginate={paginate} loading={loading}/>

    </div>
  );
}

export default App;