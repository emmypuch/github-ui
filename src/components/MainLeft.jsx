import React from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import list from "../list.json"
import { Link } from "react-router-dom"

function MainLeft() {
  return (
    <div className='mainLeftContainer'>
      <div className="mainLeft">
        <div className="mainLeftName">
            <img src="/src/img/tihanapic.png" alt="apple" />
            <h2>Emmypuch</h2>
            <IoMdArrowDropdown />
        </div>

        {/* Line */}
        <div className="line" />

        {/* Repo */}
        <div className="recentRepo">
            <div className="recentRepos">
                <h2>Recent Repositories</h2>
                <button>New</button>
            </div>

            <div className="inputBox">
                <input type="text" placeholder='Find a repositories...' />
            </div>
        </div>

        <div className="mainLeftLists">
            {list.map((item, idx) =>(
                <div className="item" key={idx}>
                    <img src="/src/img/tihanapic.png" alt="apple" />
                    <div>
                        <h2>{`${item.name}/${item.repo}`}</h2>
                    </div>
                </div>
            ))}
            <Link to="/profile">Show More</Link>
        </div>

        {/* Line */}
        <div className="line" />

        <div className='recentRepo'>
            <div className="recentRepos">
                <h2>Recent Activities</h2>
            </div>
            <p>Thanks for watching</p>
        </div>

        {/* Line */}
        <div className="line" />

        <div className="recentRepo">
            <div className="recentRepos">
                <h2>Your teams</h2>
            </div>
            <div className="inputBoxTwo">
                <input type="text" placeholder='Find a team...' />
            </div>
        </div>
      </div>
    </div>
  );
}

export default MainLeft;
