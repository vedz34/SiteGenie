"use client";
import "../style/globals.css";
import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";
import SvgLogo from "../components/chatbotLogo";
const supabase = createClient(
  "https://jphemcuwfpxnynveilja.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpwaGVtY3V3ZnB4bnludmVpbGphIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk5NTMxMTUsImV4cCI6MjAxNTUyOTExNX0.y8HPHiQHoXP0iIWnrgxptJ1X4uvw-ycRmiFNHnndSUM"
);
// const checkSession = async () => {

//   const { data } = await supabase.auth.getSession();
//   console.log(data);

// };
// useEffect(() => {
//   checkSession();
// },[]);

// const signOut=async()=>{
//   const supabase = createClient('https://jphemcuwfpxnynveilja.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpwaGVtY3V3ZnB4bnludmVpbGphIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk5NTMxMTUsImV4cCI6MjAxNTUyOTExNX0.y8HPHiQHoXP0iIWnrgxptJ1X4uvw-ycRmiFNHnndSUM')
//   supabase.auth.signOut();
//   router.push("/");

// }
const checkSession = async () => {
  try {
    const { data } = await supabase.auth.getSession();
    console.log(data);
  } catch (error) {
    console.error("Error checking session:", error.message);
  }
};

const signOut = async () => {
  try {
    await supabase.auth.signOut();
    router.push("/");
  } catch (error) {
    console.error("Error signing out:", error.message);
  }
};
const create = {
  tiers: [
    {
      title: "www.daywiseai.com",
      price: "DaywiseAi",
      cta: "Preview",
      link: "http://localhost:3000/preview?url=https://daywiseai.com/",
    },
    {
      title: "alentarelectric.com",
      price: "AlenElectric",
      cta: "Preview ",
      link: "http://localhost:3000/preview?url=https://alentarelectric.com/",
    },
    {
      title: "sippline.com",
      price: "Sippline",
      cta: "Preview",
      link: "http://localhost:3000/preview?url=https://sippline.com/", // Add a link property for Box 3
    },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  const router = useRouter();

  // const handleCreateNewClick = () => {
  //   router.push('/create');
  // };

  //const router = useRouter();
  useEffect(() => {
    checkSession();
  }, []);

  return (
    <>
      <div className="min-h-full">
        <nav className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <SvgLogo />

                  <span
                    className="ml-2 font-bold text-indigo-700"
                    style={{ fontSize: "2em" }}
                  >
                    SiteGenie
                  </span>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <button
                  type="button"
                  className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="sr-only">View notifications</span>
                  {/* Heroicon name: outline/bell */}
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </button>
                {/* Profile dropdown */}
                <div className="ml-3 relative">
                  <div>
                    <button
                      type="button"
                      className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      id="user-menu-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </button>
                  </div>
                  {/*
        Dropdown menu, show/hide based on menu state.

        Entering: "transition ease-out duration-200"
          From: "transform opacity-0 scale-95"
          To: "transform opacity-100 scale-100"
        Leaving: "transition ease-in duration-75"
          From: "transform opacity-100 scale-100"
          To: "transform opacity-0 scale-95"
      */}
                </div>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <button
                  type="button"
                  className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {/*
        Heroicon name: outline/menu

        Menu open: "hidden", Menu closed: "block"
      */}
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  {/*
        Heroicon name: outline/x

        Menu open: "block", Menu closed: "hidden"
      */}
                  <svg
                    className="hidden h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* Mobile menu, show/hide based on menu state. */}
        </nav>

        <div className="py-10">
          <header>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold leading-tight text-gray-900">
                Dashboard
              </h1>
            </div>
          </header>
          <main>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              {/* Replace with your content */}

              <div className="px-4 py-12 sm:px-0">
                <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
                  <div className="m-8 relative p-2 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-row items-center w-80 bg-indigo-50 text-indigo-700 hover:bg-indigo-100">
                    <button
                      onClick={() => router.push("/create")}
                      type="button"
                      class="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <svg
                        class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </button>
                    <h3 className="ml-4 my-0 py-0 text-xl font-semibold text-gray-900">
                      Create New
                    </h3>
                  </div>

                  <div className="max-w-7xl mx-auto py-2 px-4 bg-white sm:px-6 lg:px-8">
                    {/* <h2 className="text-3xl font-bold text-gray-900 sm:text-3xl sm:leading-none sm:tracking-tight lg:text-3xl">
          Make your own chatbot
          </h2> */}

                    <div className="mt-0 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
                      {create.tiers.map((tier) => (
                        <div
                          key={tier.title}
                          className="relative p-6 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col"
                        >
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-indigo-500">
                              {tier.title}
                            </h3>

                            <p className="mt-4 flex items-baseline text-gray-900">
                              <span className="text-4xl font-extrabold tracking-tight">
                                {tier.price}
                              </span>
                            </p>
                          </div>

                          <a
                            href={tier.link} // Use the link property for the href attribute
                            className={classNames(
                              tier.mostPopular
                                ? "bg-indigo-500 text-white hover:bg-indigo-600"
                                : "bg-indigo-50 text-indigo-700 hover:bg-indigo-100",
                              "mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium"
                            )}
                          >
                            {tier.cta}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* /End replace */}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
