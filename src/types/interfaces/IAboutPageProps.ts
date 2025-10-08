import { AboutViewTypes } from "../aliases/AboutViewTypes";

export interface IAboutPageProps {
  currentView: AboutViewTypes;
  changeCurrentView: (toView: AboutViewTypes) => void;
}
