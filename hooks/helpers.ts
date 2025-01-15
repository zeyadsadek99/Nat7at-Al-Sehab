import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { CountryPhoneCodes } from "../public/countries/country-phone-code";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// phonecode => 'EG'   phone=> 1032323232
export const formatPhoneNumber = (phonecode: string, phone: string): string => {
  // const [code, number] = phone.split('+')
  // const dialCode = (CountryPhoneCodes.find((country: { [key: string]: string }) => code.toLowerCase() == country.code.toLowerCase()).dial_code || '')

  const dial_code =
    CountryPhoneCodes.find(
      (country) => `+${phonecode}` == country.dial_code.toLowerCase()
    )?.dial_code || "";
  return `${dial_code}${phone}`;
};
