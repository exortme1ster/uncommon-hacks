export const title = "Hack Duel";
export const year = new Date().getFullYear();

export const page = ["Login", "Play", "Account", "Leaderboard"];
export const loggedPages = ["Leaderboard", "Play", "Account"];

export interface User {
  user_id: string;
  created_at: Date;
  friends: string[];
  wins: number;
  avg_score: number;
}
export const user: User = {
  user_id: "12093",
  created_at: new Date(),
  friends: ["12390", "120912093"],
  wins: 0,
  avg_score: 0,
};
let dummyUsers: User[] = [];

for (let i = 0; i < 10; ++i) {
  dummyUsers.push({
    user_id: `${Math.trunc(Math.random() * 100000 + 1)}`,
    created_at: new Date(),
    friends: ["12390", "120912093"],
    wins: Math.trunc(Math.random() * 100 + 1),
    avg_score: Math.random() * 100 + 1,
  });
}

export const users: User[] = dummyUsers;
dummyUsers.sort((a: User, b: User) => b.wins - a.wins);

const usersSortedByWins: User[] = dummyUsers;

dummyUsers.sort((a: User, b: User) => b.avg_score - a.avg_score);

const usersSortedByScore: User[] = dummyUsers;

export const usersSBW = usersSortedByWins;
export const usersSBS = usersSortedByScore;
