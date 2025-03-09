import { useState, createContext, useContext, ReactNode } from "react"

interface AuthState {
    user: any;
    token: string;
    refreshToken: string;
}

type AuthContextType = [AuthState, React.Dispatch<React.SetStateAction<AuthState>>];

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [auth, setAuth] = useState<AuthState>({
        user: null,
        token: "",
        refreshToken: ""
    });

    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

export { useAuth, AuthProvider };
