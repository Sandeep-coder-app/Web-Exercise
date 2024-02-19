const btn = document.querySelectorAll('.button')
const body = document.querySelector("body")

btn.forEach( function(btns) {
    btns.addEventListener('click', function(e) {
        if (e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'white') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id;
        }
    })
})