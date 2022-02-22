const buttons = [...document.querySelectorAll('button')]
console.log(buttons)

function btnAddLike(parameter){
    const likesBox = document.querySelector(`#${parameter}`)
    let numberOfLikes = parseInt(likesBox.innerText.substring(0,likesBox.innerText.indexOf(" ")));
    numberOfLikes++;
    likesBox.innerText = `${numberOfLikes} like (s)`;
}