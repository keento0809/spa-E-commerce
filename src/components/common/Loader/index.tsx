import React from "react";

export default function Loader() {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center">
        <span className="animate-ping inline-flex h-14 w-14 rounded-full bg-slate-900 opacity-75"></span>
        <span className="mt-12 text-gray-800 text-center text-sm font-semibold">
          Loading...
        </span>
      </div>
    </>
  );
}

// <span className="animate-ping inline-flex h-12 w-12 rounded-full bg-slate-700 opacity-75"></span>
