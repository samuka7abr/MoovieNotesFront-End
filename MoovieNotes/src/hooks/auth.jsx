import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../../../../MoviesNotesAPI/src/services/api";

const AuthContext = createContext({});

function AuthProvider( { children} ){
    const [data, setData] = useState({});

    async function signIn(email, password){
        try{
            const response = await api.post('/sessions', { email, password })
            const { user, token } = response.data;

            localStorage.setItem('@moovienotes:user', JSON.stringify(user));
            localStorage.setItem('@moovienotes:token', token);

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setData({ user, token });
        }catch(error){
            if(error.response){
                alert(error.response.data.message);
            }else{
                alert('Não foi possível entrar.');
            }
        }
    }

    useEffect(() => {
        const token = localStorage.getItem("@rocketnotes:token");
        const user = localStorage.getItem("@rocketnotes:user");


        if(token && user){
            api.defaults.headers.common['Authorization'] = `Bearer  ${token}`;

            setData({
                token,
                user: JSON.parse(user)
            });
        }
    }, []);

    return(
        <AuthContext.Provider value={{ 
        signIn, 
        user: data.user,
        }}>
            { children }
        </AuthContext.Provider>

    )
}

function useAuth(){
    const context = useContext(useAuth);
    return context;
}

export { AuthProvider, useAuth }