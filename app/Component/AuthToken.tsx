'use client'
import React, { useEffect, useState, createContext } from 'react'

export const AuthTokenHeader = createContext<[string | null, React.Dispatch<React.SetStateAction<string | null>>] | null>(null);

function AuthToken({ children }: { children: React.ReactNode }) {
    const [tval, setTvl] = useState<string | null>(null);

    // const tokenVal=localToken;

    useEffect(() => {
        const localToken: any = localStorage.getItem('token');

        setTvl(localToken);
        // setTvl(localToken);
    }, [])

    return (
        <AuthTokenHeader.Provider value={[tval, setTvl]}>
            {children}
        </AuthTokenHeader.Provider>
    )


}

export default AuthToken
