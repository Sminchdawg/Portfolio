import { Permanent_Marker, Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const permanentMarker = Permanent_Marker({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-permanentMarker",
});

export const fonts = {
  roboto,
  permanentMarker,
};
