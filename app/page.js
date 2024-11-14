"use client";
import Image from "next/image";
import Component from "./components/Component";
import CheckboxContainer from "./components/checkbox-container";
import TodoForm from "./components/TodoForm";
import { useState } from "react";

export default function Home() {
  return (
    <div className="flex flex-row min-h-screen justify-center items-center">
      <div>
        <h1 className="text-center m-2 font-semibold text-lg">
          Olir's To Do List
        </h1>
        <CheckboxContainer />
      </div>
    </div>
  );
}
