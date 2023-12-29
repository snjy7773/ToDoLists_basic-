var inn = document.querySelector("#inn");
var ad = document.querySelector("#ad");
var remove = document.querySelector("#remove");
var ul = document.querySelector("#ul");
// var li = document.createElement('li');
var li;
ad.addEventListener("click", function () {
    if (inn.value.trim() !== '') {
        li = document.createElement('li');
         li.textContent = inn.value
        
        ul.appendChild(li);
        inn.value = ""; }
    {
          
    }
})


remove.addEventListener("click", function () {
    
    ul.removeChild(li);
})