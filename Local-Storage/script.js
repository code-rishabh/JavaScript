
const clickbutton = document.getElementById('click-btn');
const username = document.getElementById('username');
const inputValue = document.getElementById('input');


clickbutton.addEventListener('click', () => {
    const newUsername = inputValue.value;
    localStorage.setItem('name', newUsername)
    // username.innerText = newUsername;
    location.reload();
    console.log(newUsername);

})

window.addEventListener('load', () => {
    const newvalue = localStorage.getItem('name')
    username.innerText = newvalue;
})
