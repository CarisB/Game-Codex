import Genre from "./Genre";
import Platform from "./Platform";
import Publisher from "./Publisher";

export default interface Game {
  id: number;
  slug: string;
  name: string;
  description: string;
  genres: Genre[];
  publishers: Publisher[];
  released: string;
  metacritic: number;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  website: string;
}
