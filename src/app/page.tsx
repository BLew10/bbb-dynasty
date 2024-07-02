"use client";
import { useState } from "react";
import Link from "next/link";
import AnimateWrapper from "../components/AnimateWrapper";
import { Player } from "../types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [code, setCode] = useState("");
  const [player, setPlayer] = useState<Player | null>(null);
  const [fetching, setFetching] = useState(false);

  const handleClick = (code: string) => {
    const playerCode = code.toUpperCase();
    setFetching(true);
    fetch("/api/player", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code: playerCode }),
    })
      .then((res) => {
        if (res.ok) {
          res.json().then((data) => {
            if (!data.player) {
              toast.error("Invalid player code");
              setFetching(false);
              return;
            }
            setPlayer(data.player);
          });
        } else {
          toast.error("Invalid player code");
        }
        setFetching(false);
      })
      .catch((err) => {
        setFetching(false);
      });
  };

  return (
    <AnimateWrapper isNext={false}>
      <div className="text-center relative z-10 text-white font-EASPORTS flex flex-col items-center justify-center gap-4 rounded-md p-3">
        {player ? (
          <>
            <h1 className="text-4xl font-bold relative z-10">
              WELCOME{" "}
              <span className="font-bold block text-red-600">
                {player.name}
              </span>
            </h1>
            <h2 className="text-xl">
              THIS IS YOUR FORMAL INVITATION TO JOIN THE{" "}
              <span className="font-bold text-red-600">BBB</span> DYNASTY LEAGUE
            </h2>
          </>
        ) : (
          <h2 className="text-xl animate-pulse">
            Please enter your assigned code to proceed...
          </h2>
        )}

        {!player ? (
          <>

            <input
              type="text"
              placeholder="Enter code..."
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full p-2 border-2 border-black rounded-md text-black sticky top-0 focus:outline-none"
            />
            <button
              className="bg-red-600 text-white py-2 px-4 rounded"
              onClick={() => handleClick(code)}
            >
              {fetching ? "LOADING..." : "CONTINUE"}
            </button>
          </>
        ) : (
          <div className="flex items-center gap-4">
            <Link
              href="/teams"
              className="bg-red-600 text-white py-2 px-4 rounded animate-pulse"
            >
              PICK YOUR TEAM
            </Link>
          </div>
        )}
      </div>
    </AnimateWrapper>
  );
}
