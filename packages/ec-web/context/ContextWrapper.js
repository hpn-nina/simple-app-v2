import HeaderContext from "./HeaderContext";
import { useState } from "react";

function ContextWrapper({children, categoriesItems, userProfile}){

    const [categories] = useState(categoriesItems);
    const [user] = useState(userProfile);

    return(
        <HeaderContext.Provider value={{categoriesItems, userProfile}}>
            {children}
        </HeaderContext.Provider>
)
}

export default ContextWrapper;