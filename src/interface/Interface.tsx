import { User } from "firebase/auth";
import { Timestamp } from "firebase/firestore";

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

export interface PostData {
    content: string;
    categories:string[];
    createdAt: Timestamp;
    userId: string;
}