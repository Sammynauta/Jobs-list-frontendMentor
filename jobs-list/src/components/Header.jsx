import React from "react";
import close from './images/icon-remove.svg';

const Header = ({keywords, removeKeywords}) => {
    return (
        <div className='header-container'>
            {keywords.map((key,id) => {
                   return <li key={id}>{key}
                   <button onClick={() => removeKeywords(key)}>
                    <img src={close} alt='' />
                   </button>
                   </li>
               } 
            )}
        </div>
    )
}

export default Header;