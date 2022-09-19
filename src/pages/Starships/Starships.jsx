import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import "./starships.css";

function Starships() {
  const [starhips, setStarships] = useState([]);
  console.log(starhips);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/starships/?page=1")
      .then((response) => {
        const data = response.data.results;
        setStarships(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Starships Page</h1>
      <StarshipList>
        {starhips.map((starship) => {
          return (
            <StarshipCard key={starship.name}>
              <StarshipName> {starship.name}</StarshipName>
              <p>{starship.model}</p>
            </StarshipCard>
          );
        })}
      </StarshipList>
    </div>
  );
}

const StarshipList = styled.div`
  background-color: #b07373;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const StarshipCard = styled.div`
  border: 1px solid saddlebrown;
  background-color: white;
  padding: 10px;
  margin: 1%;
  width: 23%;
`;

const StarshipName = styled.h3`
  color: red;
`;

export default Starships;
