import HeaderContext from "./HeaderContext";
import { useState } from "react";

function ContextWrapper({children, categoriesItems, userProfile, jwt}){

    const [categories] = useState(categoriesItems);
    const [user] = useState(userProfile);

    return(
        <HeaderContext.Provider value={{categoriesItems, userProfile, jwt}}>
            {children}
        </HeaderContext.Provider>
)
}

export default ContextWrapper;