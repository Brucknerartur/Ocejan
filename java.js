function display(index){
    let popelem = Array.from(document.getElementsByClassName("pop"));
    popelem.forEach(function(element, index, arr) {
        element.classList.add("d-none");
    })
    popelem[index].classList.remove("d-none")
}