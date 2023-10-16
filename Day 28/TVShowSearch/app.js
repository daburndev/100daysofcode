const form = document.querySelector('#searchForm');
form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(form.elements.query.value)
}
)