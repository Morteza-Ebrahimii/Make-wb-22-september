const textCard = document.querySelectorAll(".card-title");
// console.log(textCard);

const getName = () => {
  return (data = fetch("https://65def7a8ff5e305f32a10062.mockapi.io/test/name")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      // console.log(data);
      return data;
    })
    .catch((er) => {
      console.error(er);
    }));
};

getName()
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      textCard[i].innerHTML = data[i].moviesName;
    }
  })
  .catch((er) => {
    console.error(er);
  });
