import React from "react";

const RandomIdGenerator = () => {
  const idList = []
  const getRandomId = () => {
    let randomId;
    do {
      randomId = Math.floor(Math.random() * 10000);
    } while (idList.includes(randomId));
    return randomId;
  };
  const newId = getRandomId();

    idList.push(newId)
    return newId;
};

export default RandomIdGenerator;