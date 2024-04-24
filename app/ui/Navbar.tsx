"use client";
import Link from "next/link";
import { useUser } from "../context/userContext";
import { useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../firebase/firebase";
import { useCart } from "../context/cartContext";
import Image from "next/image";

// TODO falta bloquear el carrito si no hay session de user

const auth = getAuth(app);

export default function Navbar() {
  const { user, logout } = useUser();
  const { cart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuProfileOpen, setIsMenuProfileOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMenuProfile = () => {
    setIsMenuProfileOpen(!isMenuProfileOpen);
  };

  const googleSignOut = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("user");
        logout();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <nav className="relative z-50 h-16 bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex items-center flex-shrink-0 text-white">
            <span className="text-2xl font-bold">AmazonLibre</span>
          </div>
          <div className="hidden sm:block">
            <div className="flex gap-5 items-center">
              <Link
                href={"/"}
                className="hover:font-bold transition-font duration-200"
              >
                Products
              </Link>
              <Link
                href={"/cart"}
                className="flex gap-1 hover:font-bold transition-font duration-200"
              >
                Cart{" "}
                <span>
                  {cart.length ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 256 256"
                      className="text-red-600"
                    >
                      <path
                        fill="currentColor"
                        d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m-8 56a8 8 0 0 1 16 0v56a8 8 0 0 1-16 0Zm8 104a12 12 0 1 1 12-12a12 12 0 0 1-12 12"
                      />
                    </svg>
                  ) : (
                    ""
                  )}
                </span>
              </Link>
              <Link
                href={"/dashboard"}
                className="hover:font-bold transition-font duration-200"
              >
                My account
              </Link>

              {user ? (
                <div className="flex items-center">
                  <div>
                    <button
                      type="button"
                      className="relative flex rounded-full border-2 border-transparent text-sm hover:border-black transition-colors duration-200 ease-in-out"
                      id="user-menu-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                      onClick={toggleMenuProfile}
                    >
                      <div className="relative h-8 w-8 flex rounded-full bg-gray-800 text-sm">
                        <Image
                          className="h-8 w-8 rounded-full"
                          src={user.pictureUrl}
                          alt={`${user.firstName} ${user.lastName} image.`}
                          width={50}
                          height={50}
                        />
                      </div>
                    </button>
                  </div>
                  {isMenuProfileOpen && (
                    <div
                      className="absolute top-14 right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu-button"
                    >
                      <button
                        onClick={googleSignOut}
                        className="block px-4 py-2 text-sm text-gray-700"
                      >
                        Sing out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={"/login"}
                  className="hover:font-bold transition-font duration-200"
                >
                  Sign in
                </Link>
              )}
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${isMenuOpen ? "block" : "hidden"} sm:hidden bg-white`}
        id="mobile-menu"
      >
        <div className="bg-slate-900 space-y-1 px-2 pb-3 pt-2 z-20">
          <Link
            href={"/"}
            className="block hover:font-bold transition-font duration-200"
          >
            Products
          </Link>
          <Link
            href={"/cart"}
            className="block hover:font-bold transition-font duration-200"
          >
            Cart
          </Link>
          <Link
            href={"/dashboard"}
            className="block hover:font-bold transition-font duration-200"
          >
            My account
          </Link>

          {!user ? (
            <Link
              href={"/login"}
              className="block hover:font-bold transition-font duration-200"
              onClick={toggleMenu}
            >
              Sign in
            </Link>
          ) : (
            <button
              onClick={googleSignOut}
              className="block hover:font-bold transition-font duration-200"
            >
              Sign out
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
