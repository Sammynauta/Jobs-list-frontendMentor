import React, { useEffect, useState } from "react";
import SingleJob from "./Singlejob";
const Jobs = ({ data, setKeywords, keywords }) => {
  console.log(data);
  const [filteredData, setfilteredData] = useState([]);

  const ModifiedData = () => {
    if (keywords.length > 0) {
      const newData = filteredData.filter((d) => {
        return keywords.every((key) => {
          return (
            d.role == key ||
            d.level == key ||
            d.languages.includes(key) ||
            d.tools.includes(key)
          );
        });
      });
      setfilteredData(newData);
    } else {
      setfilteredData(data);
    }
  };

  useEffect(() => {
    ModifiedData();
  }, [keywords]);

  return (
    <div className="jobs">
      {filteredData.map((d) => {
        return <SingleJob key={d.id} data={d} setKeywords={setKeywords} />;
      })}
    </div>
  );
};

export default Jobs;
