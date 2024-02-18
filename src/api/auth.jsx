import {createUserWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../../firebase.config';


export const signIn = (email, password) => {
    try {
        let response = createUserWithEmailAndPassword(auth, email , password)
        return response  
    } catch (err) {
        return err
    }
    
}
