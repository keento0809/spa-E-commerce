import React from "react";

export default function Loader() {
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 w-full z-40 bg-slate-200 opacity-50">
      <div className="h-screen flex flex-col justify-center items-center z-50">
        <span className="animate-ping inline-flex h-14 w-14 rounded-full bg-slate-900"></span>
        <span className="mt-12 text-gray-800 text-center text-sm font-semibold">
          Loading...
        </span>
      </div>
    </div>
  );
}
