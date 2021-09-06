import React, { useState } from 'react';
import data from './data.json';
import Jobs from './components/Jobs';
import Header from './components/Header';
import Search from './components/Search';

function App() {
  const [filterKeywords, setfilterKeywords] = useState("");

  const setSearchKeywords=(data)=>{
    setfilterKeywords(data);
  }

  const addFilterKeywords = (data) => {
    if (!filterKeywords.includes(data)) {
      setfilterKeywords([...filterKeywords, data])
    }
  };

  const deleteKeywords = (data) => {
    const newKeywords = filterKeywords.filter(key => key != data);
    setfilterKeywords(newKeywords);
  }

  const clearAll = () => {
    setfilterKeywords([]);
  }
  return (
    <div>
      <div className="header"></div>
      {filterKeywords.length > 0 && <Header keywords={filterKeywords} removeKeywords={deleteKeywords} clearAll={clearAll} />}
      <Jobs data={data} setKeywords={addFilterKeywords} keywords={filterKeywords} />
    </div>
  );
}

export default App;

//SE QUISER PESQUISAR DIGITANDO AS PALAVRAS-CHAVES.
// SO ADICIONAL EM BAIXO DA DIV CLASSSNAME HEADER
// <Search setSearchKeyword={setSearchKeywords} />