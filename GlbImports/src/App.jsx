import React from "react";
import { Book } from "./components/Book";

export function App() {

  return (
    <div className="w-full h-screen grid grid-cols-2">
      <div className="w-[560px] h-[560px] bg-transparent m-20">
        <Book />
      </div>

      <div className="bg-white">
        <h2 className="text-3xl font-bold text-neutral-900">Hello World</h2>
      </div>
    </div>
  );
}
