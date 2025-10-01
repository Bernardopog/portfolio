import { AboutViewTypes } from "./AboutViewTypes";

export interface IAboutPageProps {
  currentView: AboutViewTypes;
  changeCurrentView: (toView: AboutViewTypes) => void;
}
