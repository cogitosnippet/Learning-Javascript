let URL = "https://cat-fact.herokuapp.com/facts";

// let response = fetch(URL);
// console.log(response);

const get_data = async ()=>{
  console.log("getting data");
  let response = await fetch(URL);
  console.log(response);
  let data = await response.json();
  for (let i =0; i<data.length; i++){
    console.log(data[i].text);
  }
}

get_data();