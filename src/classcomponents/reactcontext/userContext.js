import React from "react";

const UserContext = React.createContext()
//we can set default value for context 
//const UserContext = React.createContext("Mohan");
/*Default value will only be used when a component does not have a matching provider
 above it in component tree*/

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider, UserConsumer}