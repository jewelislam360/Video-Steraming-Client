import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const createUserEmailPass = createAsyncThunk(
  "authSlice/createUserEmailPass",
  async ({ email, password }) => {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    const {
      displayName,
      email: userEmail,
      emailVerified,
      phoneNumber,
      photoURL,
    } = result.user;
    const user = {
      displayName,
      userEmail,
      emailVerified,
      phoneNumber,
      photoURL,
    };
    return user;
  }
);
export const loginEmailPass = createAsyncThunk(
  "authSlice/loginEmailPass",
  async ({ email, password }) => {
    const result = await signInWithEmailAndPassword(auth, email, password);
    console.log(result);
    const {
      displayName,
      email: userEmail,
      emailVerified,
      phoneNumber,
      photoURL,
    } = result.user;
    const user = {
      displayName,
      userEmail,
      emailVerified,
      phoneNumber,
      photoURL,
    };
    return user;
  }
);

export const googleLog = createAsyncThunk("authSlice/googleLogin", async () => {
  const result = await signInWithPopup(auth, googleProvider);
  const {
    displayName,
    email: userEmail,
    emailVerified,
    phoneNumber,
    photoURL,
  } = result.user;
  const user = {
    displayName,
    userEmail,
    emailVerified,
    phoneNumber,
    photoURL,
  };
  console.log(user);
  return user;
});
