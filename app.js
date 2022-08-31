

// +++++++++++++++++++Delete Items++++++++++++++++++++++
let groceryListUl = document.querySelector('#grocery-list ul');

groceryListUl.addEventListener('click', remove);

function remove(e){

 let target = e.target;

 if(target.className =='delete'){  
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

 //attach newly created element to the DOM 
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
// need to convert the groceries to an array, beacuse it's an HTMLCollection
let groceriesArray = Array.from(groceries);
// loop through each grocery item
groceriesArray.forEach((grocery) =>{
    let groceryName = grocery.firstElementChild.textContent;
    
    groceryNameLower = groceryName.toLowerCase(); 
    if(groceryNameLower.indexOf(text) == -1){
     grocery.style.display = 'none'
    } else {
        grocery.style.display = 'block';
    }
  


})
});



// +++++++++++++++++++++++TABS++++++++++++++++++++++++++

let headings = document.querySelector('.heading');

let panels = document.querySelectorAll('.panel');

let selectedPanel = null;

headings.addEventListener('click', (e) =>{
   
    let target = e.target; 
   
    let dataAttribute = e.target.dataset.clicked; 

    if(target.tagName == "LI"){
        // remove the currently selected element
        if(selectedPanel != null){
            selectedPanel.classList.toggle('selected')
        };
        selectedPanel = target;
        selectedPanel.classList.toggle('selected');

    
        let targetPanel = document.querySelector(dataAttribute);
      
        panels.forEach((panel) =>{
            if(panel == targetPanel){
                panel.classList.add('active');
            } else{
                panel.classList.remove('active')
            }
        })

    }
});


let answerButton = document.getElementById('showAnswer');
answerButton.addEventListener('click', answer);

function answer(e) {
    document.getElementById('answer').classList.add('show');
    document.getElementById('answer').textContent = "Lorem, ipsum dolor";
    answerButton.style.display = 'none';
};



