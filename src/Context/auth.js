import { createContext, useState } from "react";


export const authContext = createContext()
export function AuthProvider({ children }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const Error = () => {

        let error = [];
        if (!(email, password)) {
            error.push("Please fill both Email and Password");
        }
        if (password < 6) {
            error.push("Password should be atleast 6 charcter");
        }
        if (!(email === "admin@gmail.com")) {
            error.push("wrong Email");
        }
        if (!(password === "admin123")) {
            error.push("wrong Password");
        }
        return error;
    };
    return (
        <authContext.Provider value={{ Error, email, password, setEmail, setPassword }}>
            {children}
        </authContext.Provider>
    )
}

