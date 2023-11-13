import React from 'react'
import { useState } from 'react';
import BookmarkedRepos from './BookmarkedRepos';


function Repos({repos, loading}) {
    const [repoData, setRepoData] = useState({});
   


    if(loading){
        return (<div className="spinner-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>);
    }

    const saveRepo = (repo) => {
        const newData = {
            name: repo.full_name,
            owner: repo.owner.login,
            description: repo.description,
            rating: repo.stargazers_count
        }
        const data = JSON.stringify(newData);
        localStorage.setItem(repo.id, data)
        setRepoData(newData)

    }


    console.log(repos);

    return (
    <div>
       { (repos.length !== 0) && <h2 class="search-heading">SEARCHED RESULT:</h2>}
        { repos.map((repo) =>(
                   <ul id={repo.id} className='repo-details'>
                     <li><strong>Name: </strong> <span>{ repo.full_name }</span></li>
                     <li><strong>Owner: </strong><span>{ repo.owner.login }</span></li>
                     <li><strong>Description: </strong><span>{ repo.description }</span></li>
                     <li><strong>Rating: </strong><span>{ repo.stargazers_count}</span></li>
                     <li><button onClick={() => saveRepo(repo)}>Bookmark</button></li>
                   </ul>   
           )) 
           } 

          <BookmarkedRepos/>
    </div> );
}

export default Repos;
