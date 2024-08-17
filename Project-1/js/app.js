const darkmode = document.getElementById('darkmode');
const logo = document.getElementById('logo')


let rootElement = document.documentElement;
let cssVariableValue1 = getComputedStyle(rootElement).getPropertyValue('--text-primary-color').trim();
let cssVariableValue2 = getComputedStyle(rootElement).getPropertyValue('--background-primary-color').trim();
let isdark = false;
darkmode.addEventListener('click' , () => {
    if ( isdark !== true  ) {
        



        darkmode.style.filter = 'invert(100%)'
        logo.style.filter = 'invert(100%)'
        document.documentElement.style.setProperty('--text-primary-color' , '#f8f9fa' )
        document.documentElement.style.setProperty('--background-primary-color' , '#000' )

    }else {
        darkmode.style.filter = 'invert(0%)'
        logo.style.filter = 'invert(0%)'
         
        document.documentElement.style.setProperty('--text-primary-color' , '#000')
        document.documentElement.style.setProperty('--background-primary-color' , '#f8f9fa')


    }
    darkmode.classList.add('sunrotation')
        setTimeout (() => {
            darkmode.classList.remove('sunrotation')
        } , 2000)
    isdark = !isdark;
}) 