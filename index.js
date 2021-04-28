let Change = document.querySelector('.header4')
let Navibars = document.querySelector('#Navi')
let Dropers = document.querySelector('#dropdown')


Navibars.addEventListener('click', () =>{
    if(Navibars.classList.contains("fa-bars")){
        Navibars.classList.remove("fa-bars")
        Navibars.classList.add("fa-close")

        Dropers.classList.remove("Dshow")
        Dropers.classList.add("Dhide")


    }else{
        Navibars.classList.add("fa-bars")
        Navibars.classList.remove("fa-close")
        
        Dropers.classList.add("Dshow")
        Dropers.classList.remove("Dhide")
    }
})