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


    }));
    Alpine.data('select',()=>({
        show:false,
        counter:0,
        selected:[],
        selectedInteger:'',
        tags:['Volvo', 'Saab', 'Opel', 'Audi', 'Mercedes', 'Mazda'],
        addTags(target,destination){
            target.remove()
            this.selected.push(target.innerHTML)
            console.log(this.selected)
            destination.insertAdjacentHTML('beforeend',`<span @click.stop="removeTags($el,$refs.optionContainer)" class="tag-item"><span>${target.innerHTML}</span><i class="bi bi-x"></i></span>`);
            this.counter=this.counter+1;
        },
        removeTags(target,destination){
            target.remove()
            let idx=this.selected.findIndex(item=> item===target.children[0].innerHTML)
            this.selected.splice(idx,1)
            console.log(this.selected)
            destination.insertAdjacentHTML('beforeend',`<li @click="addTags($el,$refs.tagContainer)" >${target.children[0].innerHTML}</li>`);
            this.counter=this.counter-1;
        },
        init(){
            this.$watch('counter',value=>{
                this.selectedInteger=this.selected.join(',')
            })
        }
    }))
})
