function $( toDo ){
    document.addEventListener('DOMContentLoaded', toDo);
};

function click(HTMLElement, toDo ){
    each(HTMLElement, function(elem){
        elem.addEventListener('click', toDo);
    });
}

function all(selector, root = null){
    console.log(root);
    return (exists(root)) ? root.querySelectorAll(selector) : document.querySelectorAll(selector);
}

function one(selector, root = null){
    return (exists(root)) ? root.querySelector(selector) : document.querySelector(selector);
}

function toggleClass( HTMLElement, classNameOne, classNameTwo = "" ){
    each(HTMLElement, function(elem){
        if( elem.classList.contains(classNameOne) ){
            elem.classList.remove(classNameOne);
            elem.classList.add(classNameTwo);
        }
        else{
            elem.classList.remove(classNameTwo);
            elem.classList.add(classNameOne);
        }
    });
}

function each( HTMLElement, toDo ){
    if(exists(HTMLElement.forEach )){
            HTMLElement.forEach(function(element){
                toDo(element);
            });
        }
    else{
        toDo(HTMLElement);
    }
}

function exists(element){
    return ( element != "undefined" && element != undefined && element != null);
}

$(function(){
    click(all(".sucursal-box"), function(){
        toggleClass(one(".sucursal-box .elementor-widget-container", this), "closed", "opened");
    });
});