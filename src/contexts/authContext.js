import React from "react";

export default React.createContext({
    authenticed: false,
    updateAuth:(value)=>{}
});