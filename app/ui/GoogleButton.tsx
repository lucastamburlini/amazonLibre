"use client";
import { useState } from "react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  getAuth,
  signInWithRedirect,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { app } from "@/app/firebase/firebase";
import { useEffect } from "react";
import googleLogo from "@/app/assets/google.png";
import Image from "next/image";
import { useUser } from "../context/userContext";
import { useRouter } from "next/navigation";
import Loading from "../loading";

const auth = getAuth(app);

export default function GoogleButton() {
  const { login } = useUser();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const displayNameParts = user.displayName
          ? user.displayName.split(" ")
          : [];
        const googleUser = {
          firstName: displayNameParts[0] || "",
          id: user.uid,
          lastName: displayNameParts[1] || "",
          pictureUrl: user.photoURL || "",
        };
        localStorage.setItem("userSession", JSON.stringify(googleUser));
        login(googleUser);

        router.push("/");
      } else {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const googleSignIn = async () => {
    try {
      setLoading(true);
      await setPersistence(auth, browserLocalPersistence);
      const provider = new GoogleAuthProvider();
      await signInWithRedirect(auth, provider);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm flex w-full items-center justify-center">
      {loading ? (
        "Loading..."
      ) : (
        <button
          onClick={googleSignIn}
          className="h-12 flex w-full items-center justify-center bg-white rounded-full px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm border border-gray-300 hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-300 transition-all duration-200 ease-in-out"
        >
          <>
            <Image
              src={googleLogo}
              width={50}
              height={50}
              alt="Google Logo"
              className="w-6 h-6 mr-4"
            />
            Sign in with Google
          </>
        </button>
      )}
    </div>
  );
}
