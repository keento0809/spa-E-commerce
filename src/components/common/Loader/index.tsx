import React from "react";

export default function Loader() {
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 w-full z-50 bg-slate-50 opacity-30">
      <div className="h-screen flex flex-col justify-center items-center">
        <span className="animate-ping inline-flex h-14 w-14 rounded-full bg-slate-900 opacity-75 z-40"></span>
        <span className="mt-12 text-gray-800 text-center text-sm font-semibold">
          Loading...
        </span>
      </div>
    </div>
  );
}

// <span className="animate-ping inline-flex h-12 w-12 rounded-full bg-slate-700 opacity-75"></span>
