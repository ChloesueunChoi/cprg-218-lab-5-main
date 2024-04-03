
const BREED_LIST_URL ='https://dog.ceo/api/breeds/list/all';

async function option1DropdownClickHandler(event) {
  const select = document.getElementById("dropdown");
  const selectedbreed = select.options[select.selectedIndex].value;
  
  let BREED_SELECTED_URL = `https://dog.ceo/api/breed/${selectedbreed}/images`

  try {
    const res = await fetch(BREED_SELECTED_URL);
    const data = await res.json();
    render(data.message, selectedbreed)

  }catch (err) {
    console.log(err)
  }
}

renderOption1Dropdown();

/**
 * Populate the dropdown list with pokemon names and their endpoint urls.
 */
async function renderOption1Dropdown() {
  const select = document.getElementById("dropdown");
  const response = await fetch(`${BREED_LIST_URL}`);
  const data = await response.json();

  for (let breed in data.message ) {
    const option = document.createElement("option");
    option.textContent = breed;
    option.value = breed;
    select.appendChild(option);
  }
}

function clearResults(){
  document.getElementById("option-1-results").innerHTML = '';
}

function render(arrData, breed) {
  clearResults();
  let cards = '';
  console.log(arrData)
  for (let x = 0; x < arrData.length; x++){
    console.log('loop')
    cards+= `
    <li class="card">
      <img src="${arrData[x]}" alt="">
      <div class="card-content">
        <h3 class="header">${breed}</h3>
      </div>
    </li>`;
  }
  document.getElementById("option-1-results").innerHTML = cards;
  
}

/**
 * Attach an event listener to the submit button for the Option 1 dropdown list.
 */
const option1SubmitButton = document.getElementById("submit-button");
option1SubmitButton.addEventListener("click", option1DropdownClickHandler);
