import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signOut,
  updatePassword,
} from "firebase/auth";
import app from "../../../Firebase/Firebase.config";
import { setUser } from "./authSlice";

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
    return JSON.stringify(result.user);
  }
);
export const loginEmailPass = createAsyncThunk(
  "authSlice/loginEmailPass",
  async ({ email, password }) => {
    const result = await signInWithEmailAndPassword(auth, email, password);
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
  return user;
});

export const currentUser = createAsyncThunk(
  "authSlice/currentUser",
  async (_, { dispatch }) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {
          displayName,
          email: userEmail,
          emailVerified,
          phoneNumber,
          photoURL,
        } = user;
        const u = {
          displayName,
          userEmail,
          emailVerified,
          phoneNumber,
          photoURL,
        };
        dispatch(setUser(JSON.stringify({ userr: user })));
      } else {
        dispatch(setUser(null));
      }
    });
  }
);

export const sendForgotEmail = createAsyncThunk(
  "authSlice/forgotPass",
  async (email) => {
    const result = await sendPasswordResetEmail(auth, email);
  }
);

export const changePassword = createAsyncThunk(
  "authSlice/changePassword",
  async (newPassword) => {
    try {
      onAuthStateChanged(auth, async (user) => {
        try {
          await updatePassword(user, newPassword);
          console.log("Password updated successfully.");
        } catch (error) {
          console.log("error:", error);
        }
      });
    } catch (error) {
      console.error("Error updating password:", error);
      // throw error; // Rethrow the error to be handled by Redux Toolkit
    }
  }
);

export const logOut = createAsyncThunk("authSlice/logOut", async () => {
  const result = await signOut(auth);
});
