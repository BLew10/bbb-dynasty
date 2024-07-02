"use client";

import AnimateWrapper from "../../components/AnimateWrapper";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Home() {
  const [players, setPlayers] = useState<any>([]);
  const router = useRouter();
  const [code, setCode] = useState<string>("");

  useEffect(() => {
    fetch("/api/player")
      .then((res) => res.json())
      .then((data) => {
        setPlayers(data.players);
        setCode(data.code);
      });
  }, []);

  const handleClick = () => {
    router.push(`/teams`);
  };
  return (
    <AnimateWrapper isNext={true}>
      <div className="relative z-10 text-center text-white font-EASPORTS flex-col items-center justify-center gap-4 grid grid-cols-2 text-md">
        <p className="col-span-1 text-red-600">Players</p>
        <p className="col-span-1 text-red-600">Team</p>
        {players.map((player: any) => (
          <>
            <p className="col-span-1">{player.name}</p>
            <p className={`col-span-1 flex items-center gap-1`}>
              <span
                className="p-1 rounded-lg w-full"
                style={{
                  color: player.team?.mainColor,
                  backgroundColor: player.team?.secondaryColor,
                }}
              >
                {player.team?.shortName || player.team?.name}
              </span>{" "}
              {player.code === code && (
                <button
                  onClick={handleClick}
                  className="bg-red-600 text-white p-1 rounded-lg text-sm"
                >
                  Edit
                </button>
              )}
            </p>
          </>
        ))}
      </div>
    </AnimateWrapper>
  );
}
