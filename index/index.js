const cardsTitle = document.querySelectorAll(".cardTitle");

const getName = () => {
  return (data = fetch(
    "https://65def7a8ff5e305f32a10062.mockapi.io/test/cardName"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
    //   console.log(data);
      return data;
    })
    .catch((er) => {
      console.error(er);
    }));
};

getName()
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < cardsTitle.length; j++) {
        cardsTitle[i].innerHTML = data[i].cardN;
      }
    }
  })
  .catch((er) => {
    console.error(er);
  });
