import React,{createContext,useState,useEffect} from 'react';

export const TokenContext = createContext();

const TokenProvider = (props) => {
    const [token,setToken] = useState([]);    

    useEffect(() => {
        const storedToken = localStorage.getItem('token');

        if(storedToken){
            setToken(storedToken)
        }
    }, [])

    const saveToken = (newToken)=>{
        localStorage.setItem('token',newToken);
        setToken(newToken)
    }

    return (
        <TokenContext.Provider
            value={{
                token,
                saveToken                
            }}
        >
            {props.children}
        </TokenContext.Provider>
    )
}

export default TokenProvider;