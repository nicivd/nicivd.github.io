import { Modules } from "./module";

export interface Bundels {
  name: string;
  category: string;
  price: number;
  rent: string;
  dependency: number;
  modules: Array<Modules>;
}
