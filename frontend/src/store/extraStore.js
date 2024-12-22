import { create } from "zustand";

export const useStateExtra = create((set) => ({
    postZoomState: false,
    setPostZoomState: () => set((state) => ({ postZoomState: !state.postZoomState })),
}));
