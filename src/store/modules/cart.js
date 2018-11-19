const state = {
    items:[]
}
const getters = {
    cartinfo(state,getters,rootState){
        return state.items.map(item =>{
            return{
                id: item.product.id,
                pic: "http://image.juooo.com"+item.product.pic,
                price: item.product.min_price,
                schedularName: item.product.schedular_name,
                vName: item.product.v_name,
                quentitiy: item.quentitiy
            }
        })
    },
    carttotal(state,getters){
        return getters.cartinfo.reduce((total,item) =>{
            return total + item.price * item.quentitiy
        },0)
    }
}
const actions = {
    addtocart({commit},product){
        // if(product.inventory>0){
        let index = state.items.find(item=>item.product.id===product.id)
        if(!!index){
            commit('addcount',{product})

        }else{
            commit('pushpro',{product,quentitiy:1})
        } 
        // console.log(state.items)
        // console.log(product)
        //     commit("product/decreaseinventory",{id:product.id},{root:true})
        // }
    },
    delinfo({commit},value){
        // console.log(value)
        commit("delinfo",value)
    }
}
const mutations = {
    addcount(state,{product}){
        const item=state.items.find(item=>item.product.id===product.id)
        item.quentitiy++
    },
    pushpro(state,product){
        state.items.push(product)
    },
    delinfo(state,value){
        
        const item=state.items.find(item=>item.product.id===value.id)
        const index = state.items.indexOf(item);
        
        // state.items
        state.items.splice(index, 1); 

    }
}
export default({
    namespaced: true,
    state,
    getters,
    actions,
    mutations
})




