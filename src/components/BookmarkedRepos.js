import React from 'react'

function BookmarkedRepos() {

const savedRepos = [];

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    let repoObj = JSON.parse(value);
  
    console.log('Key: ' + key + ', Value: ' + repoObj);  
    savedRepos.push(repoObj);
  }

  return (
    <div className='bookmarked-repos'>

      { (savedRepos.length !== 0) && <h2>BOOKMARKED REPOS</h2> }
        { savedRepos.map((repo) =>(
                   <ul id={repo.id} className='repo-details'>
                     <li><strong>Name: </strong> <span>{ repo.name }</span></li>
                     <li><strong>Owner: </strong><span>{ repo.owner }</span></li>
                     <li><strong>Description: </strong><span>{ repo.description }</span></li>
                     <li><strong>Rating: </strong><span>{ repo.rating}</span></li>
                   </ul>   
           )) 
           } 
    </div>
  )
}

export default BookmarkedRepos
