import { User } from "firebase/auth";

export interface UserProfile {
    username: string;
    email: string;
    password: string;
}

export interface AuthContextType {
    currentUser:  User | null;
}

export interface ProtectedRouteProps {
    element: React.ReactNode;
} 

export interface PageTitleProps {
    title: string;
}