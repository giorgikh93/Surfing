import React from 'react'


const Context = React.createContext()

const IMAGE_PATH = 'http://localhost:3000';

function ContextProvider(props){
    return(
        <>
        <Context.Provider value={{IMAGE_PATH}}>
            {props.children}
        </Context.Provider>
        </>
    )
}


export {ContextProvider, Context as Consumer}