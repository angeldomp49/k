function $( toDo ){
    document.addEventListener('DOMContentLoaded', toDo);
};

function click(HTMLElement, toDo ){
    each(HTMLElement, function(elem){
        elem.addEventListener('click', toDo);
    });
}

function all(selector){
    return document.querySelectorAll(selector);
}

function one(selector){
    return document.querySelector(selector);
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
    if( HTMLElement.forEach != "undefined" 
        && HTMLElement.forEach != undefined 
        && HTMLElement.forEach != null
        ){
            HTMLElement.forEach(function(element){
                toDo(element);
            });
        }
    else{
        toDo(HTMLElement);
    }
}


$(function(){
    click(all(".sucursal-box"), function(){
        toggleClass(one(".sucursal-box .elementor-widget-container"), "closed", "opened");
    });
});