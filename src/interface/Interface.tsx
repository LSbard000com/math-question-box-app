import { User } from "firebase/auth";

export interface UserProfile {
    username: string;
    email: string;
    password: string;
}

export interface AuthContextType {
    currentUser:  User | null;
}