const form = document.querySelector('#shelterForm');
const input = document.querySelector('#catName');
const list = document.querySelector('#cats')
const clear = document.querySelector('#clear')

document.querySelector('body').style.backgroundColor = 'teal';
document.querySelector('body').style.color = 'white';


form.addEventListener("submit",function(e){
    e.preventDefault();
    const catName = input.value;
    const newLI = document.createElement('li');
    newLI.innerText = catName;
    console.log(`Added ${catName}`)
    list.append(newLI);
    input.value ="";
    
});

clear.addEventListener("click", function(e){
    const newLI = document.querySelectorAll('li')
    for (let li of newLI){
       li.remove();
    }
})

