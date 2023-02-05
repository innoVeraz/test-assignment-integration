/**
 * @jest-environment jsdom
 */

import { handleSubmit } from "../ts/movieApp";
jest.mock("../ts/services/movieservice");

describe("handleSubmit", () => {
  test("should render no result if empty response", async () => {
    document.body.innerHTML = `
 <input type="text" id="searchText" placeholder="Skriv titel här" />
 <div id="movie-container"></div>`;

    await handleSubmit();
    const p = document.querySelector("p");
    expect(p?.innerHTML).toBe("Inga sökresultat att visa");
  });

  test("should render no result if error", async () => {
    document.body.innerHTML = `
 <input type="text" id="searchText" value="error" />
 <div id="movie-container"></div>`;

    await handleSubmit();
    const p = document.querySelector("p");
    expect(p?.innerHTML).toBe("Inga sökresultat att visa");
  });

  test("should render movie list", async () => {
    document.body.innerHTML = `
 <input type="text" id="searchText" value="Scream" />
 <div id="movie-container"></div>`;

    await handleSubmit();

    const movieList = document.querySelectorAll(".movie");
    const movie = movieList[0];
    const h3 = movie.querySelector("h3");
    const img = movie.querySelector("img");

    expect(movieList.length).toBe(1);
    expect(h3?.innerHTML).toBe("Scream");
    expect(img?.src).toBe("http://localhost/imgurl");
    expect(img?.alt).toBe("Scream");
  });
});
