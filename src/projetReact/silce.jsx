import { createSlice } from "@reduxjs/toolkit";
import { data } from "./data";
import { useNavigate } from "react-router-dom";

const nav=(url)=>{
    return useNavigate(url)
}
const slice = createSlice({
    name:'artist slice',
    initialState:{
        data:data,
        login_R:'',
        Allowed:false,
        nbId:3,
        idreviews:6,
        idreserv:4
    },
    reducers:{
    login:(state,action)=>{
        let user=state.data.users.find(user=>user.email==action.payload.email && user.password==action.payload.password)
        if(user){
            state.Allowed=true
           state.login_R=user.id
           console.log(state.login_R)
        }
    },
    logout:(state,action)=>{
       state.Allowed=action.payload
    },
    singin:(state,action)=>{
        const newuser=action.payload
        newuser.id=state.nbId+1
        state.data.users.push(newuser)
        state.nbId=state.nbId+1
        state.data.users.map(e=>{
            console.log(e)
        })
    },
    becomeArtist:(state,action)=>{
        state.data.artists.push(action.payload)
        console.log(action.payload)
        console.log(state.data.artists.find(e=>e.id==action.payload.id))
    },
    addPayInfo:(state,action)=>{
      const i= state.data.users.findIndex(e=>e.id==action.payload.id)
      state.data.users[i]=action.payload
       console.log(action.payload)
       console.log(state.data.users.find(e=>e.id==action.payload.id))
    },
    terminer:(state,action)=>{
        state.data.reservations.find(e=>e.id==action.payload).etat="done"
    }
    ,
    annuler:(state,action)=>{
       const i = state.data.reservations.findIndex(e=>e.id==action.payload)
       state.data.reservations.splice(i,1)
    }
    ,
    accept:(state,action)=>{
        state.data.reservations.find(e=>e.id==action.payload).etat="In progress"
    }
    ,
    refuse:(state,action)=>{
        state.data.reservations.find(e=>e.id==action.payload).etat="refused"
    },
    addreview:(state,action)=>{
        action.payload.id=state.idreviews
        state.data.reviews.push(action.payload)
        state.idreviews=state.idreviews+1
        
        const reviews = state.data.reviews.filter(e=>e.idArtist==action.payload.idArtist)
        state.data.artists.find(e=>e.id==action.payload.idArtist).rating=reviews.reduce((rating,review)=>{ return rating+=review.rating},0)/reviews.length

        },
        addreservation:(state,action)=>{
            action.payload.id=state.idreserv 
            state.data.reservations.push(action.payload)
            state.idreserv=state.idreserv+1
        },
        editinfo:(state,action)=>{
            const i =state.data.artists.findIndex(e=>e.id==action.payload.id)
            state.data.artists[i]=action.payload.update
        }
    }
})

export const {login,logout,singin,becomeArtist,addPayInfo,terminer,annuler,accept,refuse,addreview,addreservation,editinfo}=slice.actions ;
export default slice ;