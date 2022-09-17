export default ()=>({
    selected:1,
    usersList:null,
    isFetched:false,
    totalPage:null,
    page:1,
    init (){
        this.getData(this.page)
    },
    async getData(){
        this.page>2 ? this.page=1 : this.page<1 ? this.page=2 :null
        let req =await fetch(`https://reqres.in/api/users?page=${this.page}`)
        if(req.ok){
            this.isFetched=true
            await req.json().then(result=>{
                this.usersList=result.data
                this.totalPage=result.total_pages
            })
        }else{
            this.isFetched=false
        }
    }
})