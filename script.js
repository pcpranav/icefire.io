async function api(x) {
  try {
    let data = await fetch(x);
    let response = await data.json();
    console.log(response);
    let tbody = document.getElementById("tb");
    for (let i = 0; i < response.length; i++) {
      let tr = document.createElement("tr");
      let td1 = document.createElement("td");
      td1.innerHTML = response[i].name;
      let td2 = document.createElement("td");
      td2.innerHTML = response[i].authors;
      let td3 = document.createElement("td");
      td3.innerHTML = response[i].publisher;
      let td4 = document.createElement("td");
      td4.innerHTML = response[i].country;
      tr.append(td1, td2, td3, td4);
      tbody.append(tr);
    }
  } catch (e) {
    console.error(e);
  }
}
api("https://anapioficeandfire.com/api/books");
