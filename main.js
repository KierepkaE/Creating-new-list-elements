let size = 10;
let orderElement = 1;

const init = () => {
    document.body.appendChild(document.createElement('button'));
    const btnClear = document.body.appendChild(document.createElement('button'));
    btnClear.textContent = 'Clear';
    document.body.appendChild(document.createElement('ul'));
    document.querySelector('ul').style.listStyle = 'none';
    document.querySelector('button').textContent = "Create 10 elements to list";
    document.querySelector('button').addEventListener('click', createLiElements);


    btnClear.addEventListener('click', clearList);

}


const clearList = function() {
    document.querySelector('ul').textContent = "";
    size = 10;
    orderElement = 1;
};



const createLiElements = () => {

    for (let i = 0; i < 10; i++) {
        const li = document.createElement('li');
        li.textContent = `Element number ${orderElement++}`;
        document.querySelector('ul').appendChild(li);
        li.style.fontSize = size++ + "px";
    }
}

init()