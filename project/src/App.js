import React from "react";
import GlobalStyle from "./styles/global";
import RouteApp from "./rotes";
import { AuthProvider } from "./contexts/auth";
const App = () =>{
    return(
    <AuthProvider>
     <RouteApp/>
     <GlobalStyle/>
     </AuthProvider>
    )
};
export default App