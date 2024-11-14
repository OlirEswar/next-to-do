"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function route2() {
  const [movie, setMovie] = useState("");
  const [num, setNum] = useState(1);

  useEffect(() => {
    fetch(`/api/get-pet/`)
      .then((res) => res.json())
      .then((movie) => {
        setMovie(movie);
      });
  }, [num]);

  function onClick() {
    setNum((num) => num + 1);
  }

  return (
    <div>
      <p>ello</p>
      <Button onClick={onClick} />
      <div>{JSON.stringify(movie)}</div>
      <a href="https://arxiv.org/pdf/2401.00002" target="_blank">
        <button>Download</button>
      </a>
    </div>
  );
}
