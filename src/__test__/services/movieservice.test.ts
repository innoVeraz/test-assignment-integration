import { IMovie } from "../../ts/models/Movie";
import { getData } from "../../ts/services/movieservice";

let testData: IMovie[] = [
  {
    Title: "Scream",
    imdbID: "1234",
    Type: "test",
    Poster: "test",
    Year: "test",
  },
];

jest.mock("axios", () => ({
  get: async (url: string) => {
    return new Promise((resolve, reject) => {
      if (!url.endsWith("test")) {
        resolve({ data: { Search: testData } });
      } else {
        reject();
      }
    });
  },
}));

describe("getData", () => {
  test("should get data", async () => {
    let result = await getData("Scream");
    expect(result[0].Title).toEqual("Scream");
  });

  test("should return empty array if axios fail", async () => {
    let result = await getData("test");
    expect(result.length).toBe(0);
  });
});
