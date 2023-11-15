import React from 'react';
import list from '../list.json'

function Overview() {
  return (
    <div className='overview'>
      <div className="overviewDescription">
        <p>Emmypuch / README.md</p>
        <h1>Hi, I'm wumi, emmypuch</h1> 

        <div className='line' />

        <h2>A Vue Developer</h2>
        <p>I love coding with HTML, CSS, TailwindCSS, Vuejs, and others.</p>
        <p>I'm actively learning</p>
        <p>Follow me on Twitter to get updated</p>
      </div>

      <div className="repositories">
        <div className="repositoriesTitle">
            <h2>Popular repositories</h2>
        </div>

        <div className="repositoriesContainer">
            {list.map((repo, i)=> (
                <div className="repositoriesBox" key={i}>
                    <div className="repositoriesTop">
                        <h3>{repo.repo}</h3>
                        <p>{repo.stack}</p>
                    </div>
                    <div className="repositoriesBottom">
                        <p>{repo.stack}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Overview;
