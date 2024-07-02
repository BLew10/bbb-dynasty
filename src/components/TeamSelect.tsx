import { Team } from "@/types";
import React, { useState, useEffect } from "react";
interface Props {
  handleClick: (value: Team) => void;
  selectedTeam?: Team | null;
}

export default function TeamSelect({ handleClick, selectedTeam }: Props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTeams, setFilteredTeams] = useState<Team[]>([]);
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    setFilteredTeams(
      teams.filter((team) =>
        team.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, teams]);

  useEffect(() => {
    fetch("/api/team", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json().then((data) => setTeams(data.teams)));
  }, []);

  const handleTeamClick = (team: Team) => {
    handleClick(team);
  };

  return (
    <div className="w-full flex flex-col items-center gap-2 max-h-[400px] overflow-auto no-scrollbar relative">
      <input
        type="text"
        placeholder="Search teams..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border-2 border-black rounded-md text-black sticky top-0 focus:outline-none"
      />

      {filteredTeams?.map((team) => (
        <div
          key={team.name}
          className={`w-full border-2 border-black rounded-md p-2 hover:border-red-600 hover:bg-opacity-50 hover:cursor-pointer hover:bg-red-600 ${
            selectedTeam?.name === team.name ? "bg-red-600 bg-opacity-50" : ""
          }`}
          onClick={() => handleTeamClick(team)}
        >
          <p className={`font-EASPORTS text-[#${team.mainColor}] text-xl`}>
            {team.name}
          </p>
        </div>
      ))}
    </div>
  );
}
