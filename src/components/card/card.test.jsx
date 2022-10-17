import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Card from "./card";
import { BrowserRouter as Router } from "react-router-dom";

const characters = [
    {
      "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    },
    {
      "id": 2,
      "name": "Morty Smith",
      "status": "Alive",
      "species": "Human",
      "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    },
    {
      "id": 3,
      "name": "Summer Smith",
      "status": "Alive",
      "species": "Human",
      "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    },
    {
      "id": 4,
      "name": "Beth Smith",
      "status": "Alive",
      "species": "Human",
      "image": "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
    },
    {
      "id": 5,
      "name": "Jerry Smith",
      "status": "Alive",
      "species": "Human",
      "image": "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
    }
  ];

describe("card", () => {
    it("renders properly", () => {

        render(<Router><Card/></Router>);
        expect(screen.getByAltText("Rick found no characters.")).toBeInTheDocument();
    });

    it("should contains all characters from characters", () => {

        render(<Router><Card characters={characters}/></Router>);

        characters.forEach(character => {
            expect(screen.getByText(character.name)).toBeInTheDocument();
        });
        expect(screen.getAllByRole("heading").length).toBe(characters.length);
        expect(screen.getAllByRole("link").length).toBe(characters.length);
        expect(screen.getAllByRole("img").length).toBe(characters.length);
    });

    it("should order by name when sorting by name", () => {

        const firstByName = [...characters].sort((a, b) => a.name > b.name ? 1 : -1,)[0].name;

        render(<Router><Card characters={characters} orderByField="Name"/></Router>);

        expect(screen.getAllByRole("heading")[0].innerHTML).toBe(firstByName);
    });
});
