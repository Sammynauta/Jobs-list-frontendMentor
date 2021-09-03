import React, { useState } from 'react';
import data from './data.json';
import Jobs from './components/Jobs';
import Header from './components/Header';

function App() {
  const[filterKeywords,setfilterKeywords] = useState([]);

  const addFilterKeywords = (data) => {
    if(!filterKeywords.includes(data)) {
      setfilterKeywords([...filterKeywords,data])
    }
  };

  const deleteKeywords = (data) => {
    const newKeywords = filterKeywords.filter(key => key != data);
    setfilterKeywords(newKeywords);
  }

  return (
    <div>
      <div className="header"></div>
      {filterKeywords.length > 0 && <Header keywords={filterKeywords}  removeKeywords={deleteKeywords}/>}
      <Jobs data={data}  setKeywords={addFilterKeywords} />
    </div>
  );
}

export default App;
