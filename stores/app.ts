// Utilities
import { defineStore } from "pinia";

type Settings = {
  email: string;
  logo: string;
  fav_icon: string;
  phone: string;
  locationInformation_ar: string;
  locationInformation_en: string;
  website_title_ar: string;
  website_title_en: string;
} | null


export const useAppStore = defineStore("app", {
  state: () => ({
    settings: null as Settings

  }),

  actions: {



  },
});
