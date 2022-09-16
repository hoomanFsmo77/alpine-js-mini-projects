import Alpine from 'alpinejs'
import select from "./components/select.js";
import carousel from "./components/carousel.js";
import dropdown from "./components/dropdown.js";

window.Alpine = Alpine

Alpine.data('select',select)
Alpine.data('carousel',carousel)
Alpine.data('dropdown',dropdown)

Alpine.start()


document.querySelectorAll('a').forEach(link=>{
    link.addEventListener('click',e=>{
        e.preventDefault()
    })
})


