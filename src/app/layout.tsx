"use client";
import "./globals.css";

import { createContext, useContext, useEffect, useState } from "react";
import { RecaptchaVerifier, onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import DynamicHeader from "./component/header";

type Dispatch<T> = (action: T) => void;
interface AuthContextType {
  user: null;
  setUser: Dispatch<any>;
  setUpRecaptcha: () => void;
}
const AuthContext = createContext({
  user: null,
  setUser: () => {},
} as {
  user: null;
  setUser: Dispatch<any>;
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState(null);

  const setUpRecaptcha = () => {
    const recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {}
    );
    recaptchaVerifier.render();
  };

  useEffect(() => {
    onAuthStateChanged(auth, async (u) => {
      if (u) {
        try {
          const userDoc = doc(db, "Users", u.uid);
          const userSnapshot = await getDoc(userDoc);

          if (userSnapshot.exists()) {
            const userData = userSnapshot.data();
            const { role } = userData;

            const updatedUser: any = {
              uid: u.uid,
              email: u.email,
              role: role,
            };

            setUser(updatedUser);
          } else {
            setUser(null);
          }
        } catch (error) {
          console.error("Error fetching user role from Firestore:", error);
          setUser(null);
        }
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <>
      <AuthContext.Provider value={{ user, setUser, setUpRecaptcha }}>
        <html lang="en">
          <body>
            <DynamicHeader />
            {children}
          </body>
        </html>
      </AuthContext.Provider>
    </>
  );
}

export const useAuthContext = () => useContext(AuthContext);
