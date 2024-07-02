"use client";

import { useState, useEffect } from "react";
import AnimateWrapper from "../../components/AnimateWrapper";
import TeamSelect from "@/components/TeamSelect";
import { Team } from "@/types";
import { useRouter } from "next/navigation";

export default function Home() {
  const [team, setTeam] = useState<Team | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const router = useRouter();

  const handleTeamClick = (team: Team) => {
    console.log(team);
    setTeam(team);
  };

  const handleSave = () => {
    setIsSaving(true);
    fetch("/api/team", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        teamId: team?.id,
      })
    }).then((res) => {
      setIsSaving(false);
      if (res.ok) {
        router.push("/players");
      }
    });
  };

  return (
    <AnimateWrapper isNext={true}>
      <div className="relative z-10 text-center text-white font-EASPORTS flex flex-col items-center justify-center gap-4">
        <h1
          className="text-3xl font-bold bg-opacity-50  p-2 rounded-xl"
          style={{
            color: team?.mainColor,
            backgroundColor: team ? team.secondaryColor : "transparent",
            width: "100%",
          }}
        >
          {team?.name || "SELECT YOUR TEAM"}
        </h1>
        <TeamSelect handleClick={handleTeamClick} selectedTeam={team} />
        <div className="flex items-center gap-4">
          <button className="bg-red-600 text-white py-2 px-4 rounded" onClick={handleSave}>
            {isSaving ? "SAVING..." : "SAVE"}
          </button>
        </div>
      </div>
    </AnimateWrapper>
  );
}