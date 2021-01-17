function handleSearch() {

  let input = document.getElementById("userInput").value;
  let url = "https://restcountries.eu/rest/v2/name/" + input;

  fetch(url).then((response) => {

    if (response.status === 404) {
      alert("Please input correct country name !");
    }

    if (response.status === 200) {
      response.json().then((res) => {
        let data = res[0];
        console.log(data);
        document.getElementById('name').innerText = data.name;
        document.getElementById('flag').src = data.flag;
        document.getElementById('area').innerText = data.area;
      });
    }
    
  });
}
