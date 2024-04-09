var fan = document.getElementById('fan');

document.addEventListener('click', function (e) {
    let target = e.target;
    let name = target.getAttribute('data-name');

    fan.classList.remove ('stop', 'one', 'two', 'three');

    if (name != null) {
        fan.classList.add (name);
    }
});


// getElementById, getElementByTagName, getElementByClassName
// querySelector, querySelectorAll

// add and remove class
//  element.classList.add('class-name');
//  element.classList.remove('class-name');
// element.classList.toggle('class-name);

// to get the attribute of element
// element.getAttribute('attribute-name');
// element.setAttribute ('attribute-name);

// to create html element
// document.createElement ('tag-name');

// appending child
// element.innerText or element.innerHTML
// element.appendChild ('child-name');

