import { getAuth } from 'firebase/auth'
import { signInWithPopup } from 'firebase/auth'
import { GoogleAuthProvider } from 'firebase/auth'
import {app } from "../firebase" 
import { signInSuccess } from '../redux/user/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';





export default function OAuth() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
    const handleGoogleCLick = async () => {
    try {
      const googleProvider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, googleProvider);
      const res = await fetch('/api/auth/google', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: result.user.displayName, email:result.user.email, photo: result.user.photoURL }),
      })
      const data = await res.json();
     dispatch(signInSuccess(data));
     navigate('/')
      console.log(data);
    } catch (error) {
      console.log("cant logged in using google",error);
    }
  };
  return (
    <button onClick={handleGoogleCLick} type="button" className="bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
      Continue with Google
    </button>
  )
}
