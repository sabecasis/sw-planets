import { Planet } from "./planet-interface";

export interface PlanetResponse {
    results: Planet[],
    count:number,
    next:string,
    previous:string
}