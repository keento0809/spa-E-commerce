import React from "react";

export default function Loader() {
  return (
    <div className="flex gap-10 justify-center bg-slate-50 opacity-20">
      <div className="w-8 h-8 bg-indigo-200 rounded-full animate-bounce" />
      <div className="w-8 h-8 bg-indigo-200 rounded-full animate-bounce" />
      <div className="w-8 h-8 bg-indigo-200 rounded-full animate-bounce" />
    </div>
  );
}
