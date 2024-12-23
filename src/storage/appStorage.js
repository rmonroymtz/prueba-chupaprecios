import { create } from "zustand";

export const useBearStore = create((set) => ({
  currentStore: "amazon",
  searcherText: "",
  currentPage: 1,
  setCurrentStore: (newStore) => set(() => ({ currentStore: newStore })),
  setSearcherText: (value) => set(() => ({ searcherText: value })),
  setCurrentPage: (value) => set(() => ({ currentPage: value })),
}));
