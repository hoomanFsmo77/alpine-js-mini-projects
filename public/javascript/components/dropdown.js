export  default ()=>({
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

})