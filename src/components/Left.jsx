import React from 'react';
import { MdInsertEmoticon } from 'react-icons/md'

function Left() {
  return (
    <div className='left'>
      <div className="image">
        <img src="/src/img/tihanapic.png" alt="" />
        <div className="emoticonBox">
            <MdInsertEmoticon className="emoticon"/>
        </div>
      </div>

      <div className="leftDetails">
        <h2>Emmypuch</h2>
        <button>Edit profile</button>
      </div>
    </div>
  );
}

export default Left;
