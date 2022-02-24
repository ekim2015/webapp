import { useEffect, useState } from 'react';
import firebaseApp from '../firebaseSetup';

const AuthContext = React.createContext();

const authProvider = ({ children })  => {
    const [user, setUser] = useState(NULL);
    const [loading, isLoading] = useState(true);

    useEffect(() => {
        firebaseApp.auth().onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                isLoading(false);
            }
        })
    })

    return (
        <AuthContext.Provider
            value={(user)}
        >
        </AuthContext.Provider>
    )
}