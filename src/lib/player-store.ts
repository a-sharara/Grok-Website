import { create } from "zustand";
import type { Mix } from "@/lib/site";

type PlayerState = {
  active: Mix | null;
  play: (mix: Mix) => void;
  close: () => void;
};

export const usePlayer = create<PlayerState>((set) => ({
  active: null,
  play: (mix) => set({ active: mix }),
  close: () => set({ active: null }),
}));
