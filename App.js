/*  en relation madia */

/*if(window.matchMedia && window.matchMedia('(prefers-color-sheme:dark').matches){
    alert('Je suis en dark mode !')
  
}
function themeNuitJour(){
    //console.log("hello");
    const date = new Date()
    const hour = date.getHours()

    if(hour < 5 || hour < 20 ){
        document.documentElement.style.setProperty('--ecriture', '#333')
        document.documentElement.style.setProperty('--fond', '#f1f1f1')
    }else{
        document.documentElement.style.setProperty('--fond', '#333')
        document.documentElement.style.setProperty('--ecriture', '#f1f1f1')
    }

}
themeNuitJour()*

/*const btnToggle = document.querySelector('.btn-toggle');
btnToggle.addEventListener('click', () => {
    const body = document.body;

    if(body.classList.contains('dark')){

        body.classliste.add('light')
        body.classList.remove('dark')
        btnToggle.innerHTML = "Go dark"

    } else if(body.classList.contains('light')){
        body.classList.add('dark');
        body.classList.add('light');
        btnToggle.innerHTML = "Go light"
    }
})*/

const btnToggle = document.querySelector('.btn-toggle');

btnToggle.addEventListener('click', () => {

    const body = document.body;

    if(body.classList.contains('dark')){

        body.classList.add('light')
        body.classList.remove('dark')
        btnToggle.innerHTML = "Go Dark"

    } else if(body.classList.contains('light')){

        body.classList.add('dark')
        body.classList.remove('light')
        btnToggle.innerHTML = "Go Light"

    }

})