import { IMovie } from "../../models/Movie";

export const getData = (searchText: string): Promise<IMovie[]> => {
  if (searchText === "error") {
    return Promise.reject();
  }

  if (searchText === "Scream") {
    return Promise.resolve<IMovie[]>([
      {
        Title: "Scream",
        imdbID: "test",
        Poster: "imgurl",
        Type: "test",
        Year: "1985",
      },
    ]);
  }
  return Promise.resolve([]);
};
