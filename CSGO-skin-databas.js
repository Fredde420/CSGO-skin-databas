// Define the URL of the external JSON file containing the skins data

function search_skin() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let listHolder = document.querySelector('#list-holder');
    listHolder.innerHTML = ""
  
    for (i = 0; i < skins.length; i++) {
      let obj = skins[i];
  
      if (obj.collection.toLowerCase().includes(input) || obj.weapon.toLowerCase().includes(input) || obj.name.toLowerCase().includes(input) || obj.grade.toLowerCase().includes(input)) {
        const elem = document.createElement("li")
        elem.innerHTML = `${obj.collection} - ${obj.weapon} ${obj.name}`
        listHolder.appendChild(elem)
      }
    }
  }

console.log(skins)
