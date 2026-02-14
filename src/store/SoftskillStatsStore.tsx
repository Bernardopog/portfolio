import { create } from 'zustand';

type PlatformTypes = 'frontendMentor';

interface ISoftskillStatsStore {
  fetched: Record<PlatformTypes, boolean>;
  softskillStats: Record<PlatformTypes, Record<string, number>>;
  getStats: (target: PlatformTypes) => Promise<boolean>;
}

export const useSoftskillStatsStore = create<ISoftskillStatsStore>(
  (set, get) => ({
    fetched: {
      frontendMentor: false,
    },
    softskillStats: {
      frontendMentor: {
        mentorScore: 0,
        comments: 0,
        helpfulComments: 0,
        wallOfFame: 0,
      },
    },
    getStats: async (target) => {
      try {
        const urls: Record<PlatformTypes, string> = {
          frontendMentor: 'api/stats',
        };

        if (get().fetched[target] === true) return true;

        const res = await fetch(urls[target]);
        const data = await res.json();

        set({
          softskillStats: {
            ...get().softskillStats,
            [target]: data.stats,
          },
          fetched: {
            ...get().fetched,
            [target]: true,
          },
        });

        return true;
      } catch (err) {
        console.error(`Error getting stats: ${target} | ${err}`);
        return false;
      }
    },
  }),
);
