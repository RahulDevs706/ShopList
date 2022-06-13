import { createReducer } from "@reduxjs/toolkit";
import moment from 'moment';

const shopState = {
    add:{
        success:false
    },
    list:[],
    delete:{
        success:false
    }
}

export const shopReducer = createReducer(shopState,{
    
    add: (state, action)=>{
        
        if(JSON.parse(localStorage.getItem("shopList"))){
            let data = JSON.parse(localStorage.getItem("shopList"));
            data.push(action.payload);
            localStorage.setItem("shopList", JSON.stringify(data));
            state.add.success = true;
        }
        else{
            let formData = []
            formData.push(action.payload)
            localStorage.setItem("shopList", JSON.stringify(formData));
            state.add.success = true;
        }
        
    },
    
    formReset:(state)=>{
        state.add.success=false
    },

    getList:(state)=>{
        state.list = JSON.parse(localStorage.getItem("shopList")) ? JSON.parse(localStorage.getItem("shopList")) :[]
    },

    filter:(state, action)=>{
        const {area, category, status} = action.payload;
        console.log(area, category, status)
        let filteredList = [];
        let data = JSON.parse(localStorage.getItem("shopList"));
        let unfiltered = true;
        if(area){
            filteredList = data.filter(shop=>(
                shop.area === area
            ))

            if(filteredList.length===0){
                unfiltered=false;
            }
        }

        if(category && unfiltered){
            if(filteredList.length!==0){
                filteredList=filteredList.filter(shop=>(
                    shop.category=== category
                ))
            }else{
                filteredList = data.filter(shop=>(
                    shop.category === category
                ))
            }
        }

        if(status && unfiltered){
            const today = moment().format('YYYY-MM-DD')
            if(status==="open"){
                if(filteredList.length!==0){
                    filteredList=filteredList.filter(shop=>(
                            moment(today).isBetween(shop.openDate, shop.closeDate, "day", [])===true
                        ))
                }else{
                    filteredList = data.filter(shop=>(
                            moment(today).isBetween(shop.openDate, shop.closeDate, "day",[])===true)
                        )
                }
            }
            else if(status==="close"){
                if(filteredList.length!==0){
                    filteredList=filteredList.filter(shop=>(
                        moment(today).isBetween(shop.openDate, shop.closeDate, "day",[])===false
                    ))
                }else{
                    filteredList = data.filter(shop=>(
                        moment(today).isBetween(shop.openDate, shop.closeDate, "day",[])===false
                    ))
                }
            }
        }

        console.log(filteredList)

        if(filteredList){
            state.list = filteredList;
        }else{
            state.list=JSON.parse(localStorage.getItem("shopList"));
        }

    },

    deleteShop:(state, action)=>{
        const id = action.payload;
        console.log(id)

        let data = JSON.parse(localStorage.getItem("shopList"));

        let newData = data.filter(shop=>(
            shop._id !== id
        ))

        state.list = newData
        
        localStorage.setItem("shopList", JSON.stringify(newData));
        
        state.delete.success = true;
    },

    clearError:(state)=>{
        state.delete.success=false
    },

})