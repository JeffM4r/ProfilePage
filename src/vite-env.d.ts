/// <reference types="vite/client" />
import dts from "vite-plugin-dts";

export interface referencesType {
  homeRef: React.MutableRefObject<null | HTMLDivElement>,
  aboutRef: React.MutableRefObject<null | HTMLDivElement>,
  skillRef: React.MutableRefObject<null | HTMLDivElement>,
  projectRef: React.MutableRefObject<null | HTMLDivElement>
}
