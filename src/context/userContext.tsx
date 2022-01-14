import { createContext, useState } from "react";

type UserState = {
    userState: boolean
    setUserState?: React.Dispatch<React.SetStateAction<boolean>>
}

export const UserContext = createContext<UserState>({
    userState: false
})


export const ContextProvider = ({ children }) => {
    const [userState, setUserState] = useState(false);

    return (
        <UserContext.Provider value={{ userState, setUserState }}>
            {children}
        </UserContext.Provider>
    )
} 