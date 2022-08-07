

// +++++++++++++++++++Delete Items++++++++++++++++++++++
let groceryListUl = document.querySelector('#grocery-list ul');

groceryListUl.addEventListener('click', remove);

function remove(e){

 let target = e.target;

 if(target.className =='delete'){  // bubbling
     let li = target.parentElement; 
     li.remove();
 }
};

// ++++++++++++Hide Items++++++++++++++++++++++++++++++++
let checkbox = document.querySelector('#hide');
checkbox.addEventListener('change', (e)=>{
    let groceryList = document.getElementById('grocery-list');
    if(checkbox.checked){
        groceryList.style.display ='none';
    } else{
        groceryList.style.display = 'block';
    }
});

//+++++++++++++++++++++++Add Itmes+++++++++++++++++++++++

let formAdd = document.getElementById('add-item');
formAdd.addEventListener('submit', (e) =>{
    let ul = document.getElementsByTagName('ul')[0];
 e.preventDefault();
 // prevent page from refreshing
 //grab user's text
 let text = formAdd.querySelector('input[type="text"]').value;

 formAdd.querySelector('input').value = null;
 //creating list items dynamically
 let li = document.createElement('li');
 let groceryName = document.createElement('span');
 let deleteButton = document.createElement('span');
 // the spans are nested within the li element
 li.appendChild(groceryName);
 li.appendChild(deleteButton);

 //attach our newly created element to the DOM 
 ul.appendChild(li);
 //add text
 groceryName.textContent = text;
 deleteButton.textContent = 'delete';
 //add classes to the spans
 groceryName.classList.add('name');
 deleteButton.classList.add('delete');
});

// +++++++++++Search Items+++++++++++++++++++++++++++++

const SEARCH = document.forms['search-item'].querySelector('input');

// add event listener

SEARCH.addEventListener('keyup', (e) => {
 let text = e.target.value.toLowerCase();
let groceryList = document.querySelector('#grocery-list ul');
let groceries = groceryList.getElementsByTagName('li');
// need to convert the groceries to an array, beacuse it's an HTMLCollection, so we can access the forEach method. Can use JS's Array.from()
let groceriesArray = Array.from(groceries);
// loop through each grocery item
groceriesArray.forEach((grocery) =>{
    let groceryName = grocery.firstElementChild.textContent;
    // convert all of our text into lower case 
    groceryNameLower = groceryName.toLowerCase(); 
    if(groceryNameLower.indexOf(text) == -1){
     grocery.style.display = 'none'
    } else {
        grocery.style.display = 'block';
    }
    // does it exist in grocery name 


})
});

// indexOf(searchItem, startingPoint);
// it only exists for 2 data types
// Arrays and strings 


// +++++++++++++++++++++++TABS++++++++++++++++++++++++++

let headings = document.querySelector('.heading');

let panels = document.querySelectorAll('.panel');

let selectedPanel = null;

headings.addEventListener('click', (e) =>{
    // let's find out which <li> tag trigerred the event
    let target = e.target; // tells us which item trigerred that event
    // lets use our dataset to get our data value.. we've called ours 'clicked' but you can call it whatever you like 
    let dataAttribute = e.target.dataset.clicked; 

    if(target.tagName == "LI"){
        // remove the currently selected element
        if(selectedPanel != null){
            selectedPanel.classList.toggle('selected')
        };
        selectedPanel = target;
        selectedPanel.classList.toggle('selected');

        // find the panel that we want to show
        let targetPanel = document.querySelector(dataAttribute);
        // now we need to determine whether the panel currently selected iss the one diplayed - remember a nodelist has access to the forEach() method but not an html collection need to convert it to an array
        panels.forEach((panel) =>{
            if(panel == targetPanel){
                panel.classList.add('active');
            } else{
                panel.classList.remove('active')
            }
        })

    }
});

// lets deal with our button to display answer 
let answerButton = document.getElementById('showAnswer');
answerButton.addEventListener('click', answer);

function answer(e) {
    document.getElementById('answer').classList.add('show');
    document.getElementById('answer').textContent = "Lorem, ipsum dolor";
    answerButton.style.display = 'none';
};



