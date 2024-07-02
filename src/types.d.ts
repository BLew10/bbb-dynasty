export interface Team {
  id: number;
  name: string;
  mainColor: string;
  secondaryColor: string;
  shortName: string | null;
  player: Player | null;
}

export type Player = {
  id: string;
  name: string;
  code: string;
  team: Team | null;
};
