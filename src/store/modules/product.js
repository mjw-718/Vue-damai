// import shop from "../../api/data"
const state = {
    data:[1,2]
}
const getters = {
    
}
const actions = {
    async getdata ({commit}) {
        // let products = await shop()
        commit("setdata",{products})
    }
}
const mutations = {
    setdata(state,payload){
        state.data = payload.products
    },
    // decreaseinventory(state,{id}){
    //     let product = state.data.find(product=>product.id===id)
    //     product.inventory--
    // }
}
export default({
    namespaced: true,
    state,
    getters,
    actions,
    mutations
})

