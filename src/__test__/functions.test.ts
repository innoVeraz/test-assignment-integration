import { movieSort } from "../ts/functions";

function createMovie(Title: string) {
  return {
    Title: Title,
    imdbID: "test",
    Type: "test",
    Poster: "test",
    Year: "test",
  };
}

describe("movieSort", () => {
  test("should sort ascending", () => {
    const movies = [
      createMovie("Scream"),
      createMovie("Warcraft"),
      createMovie("Casablanca"),
    ];
    const result = movieSort(movies, true);

    expect(result[0].Title).toBe("Casablanca");
    expect(result[1].Title).toBe("Scream");
    expect(result[2].Title).toBe("Warcraft");
  });

  test("should sort descending", () => {
    const movies = [
      createMovie("Scream"),
      createMovie("Warcraft"),
      createMovie("Casablanca"),
    ];
    const result = movieSort(movies, false);

    expect(result[0].Title).toBe("Warcraft");
    expect(result[1].Title).toBe("Scream");
    expect(result[2].Title).toBe("Casablanca");
  });
});
