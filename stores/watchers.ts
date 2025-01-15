import { defineStore } from 'pinia';

export const useWatcherStore = defineStore('watcherStore', {
  state: () => ({
    watcherCounts: {} as Record<string, number>, // A record where keys are strings (image IDs or URLs) and values are numbers
  }),
  actions: {
    incrementWatcher(imageKey: string) {
      if (!this.watcherCounts[imageKey]) {
        this.watcherCounts[imageKey] = 0;
      }
      this.watcherCounts[imageKey]++;
    },
    getWatcherCount(imageKey: string): number {
      return this.watcherCounts[imageKey] || 0;
    },
  },
});
