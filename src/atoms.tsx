import { atom, selector } from "recoil";

interface IToDoState {
  [key: string]: string[];
}

export const toDoState = atom<IToDoState>({
  key: "toDo",
  default: {
    "To Do": ["종이랑 공부", "종이랑 데이트", "아침먹기", "잠자기", "e", "f"],
    Doing: ["저녁먹기","와인마시기","장볼거구경하기"],
    Done: ["크리스마스데이트"],
  },
});
