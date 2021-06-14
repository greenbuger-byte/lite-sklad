import {auth, provider} from '../firebase';

export const logIn = () => {
    auth.signInWithPopup(provider).then(({user}) => {
        localStorage.setItem('user',JSON.stringify({displayName: user.displayName, email: user.email,  photoUrl: user.photoURL}));
    }).catch(err=> localStorage(err));
}