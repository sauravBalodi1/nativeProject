import React,{ createContext,useReducer } from "react";
import authState from "../initialState/authState";
import contactsInitialState from "../initialState/contactsInitialState";
import auth from "./auth";
import contacts from "./contacts";

export const GlobalContext=createContext({});
const GlobalProvider=({children})=>{
    const [authentication, authDispatch] = useReducer(auth, authState)
    const [contactsState, contactsDispatch] = useReducer(contacts, contactsInitialState)
    return <GlobalContext.Provider value={{authentication,authDispatch,contactsState,contactsDispatch}}>{children}</GlobalContext.Provider>
};
export default GlobalProvider;