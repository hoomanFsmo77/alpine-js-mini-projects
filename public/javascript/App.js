document.querySelectorAll('a').forEach(link=>{
    link.addEventListener('click',e=>{
        e.preventDefault()
    })
})


document.addEventListener('alpine:init',()=>{
    Alpine.data('dropdown',()=>({
        show:false,
        trigger:{
            ['@click'](){
                this.show=true
            },
            ['@click.outside'](){
                this.show=false
            },
            ['@keyup.esc'](){
                this.show=false
            }
        },
        makeAppear:{
            ['x-show'](){
                return this.show
            }
        }

    }));
    Alpine.data('carousel',()=>({
       whichImage:0,
        images:[
            {
                url:'https://www.w3schools.com/bootstrap/chicago.jpg',
                title:'New York',
                description:'Thank you, Chicago!'
            },
            {
                url:'https://www.w3schools.com/bootstrap/ny.jpg',
                title:'Los Angles',
                description:'We love the Big Apple!'
            },
            {
                url:'https://www.w3schools.com/bootstrap/la.jpg',
                title:'Miami',
                description:'Thank you, Miami!'
            }
        ]


    }))
})
