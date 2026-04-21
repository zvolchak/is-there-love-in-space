import { render, screen } from "@testing-library/react";
import ListOfPlanets from "./ListOfPlanets";

describe("ListOfPlanets", () => {
  it("renders each planet name and status", () => {
    render(
      <ListOfPlanets
        planets={[
          { name: "Mercury", statue: "no" },
          { name: "Venus", statue: "maybe" },
          { name: "Earth", statue: "yes" },
        ]}
      />
    );

    expect(screen.getByText("Mercury")).toBeInTheDocument();
    expect(screen.getByText("Venus")).toBeInTheDocument();
    expect(screen.getByText("Earth")).toBeInTheDocument();

    expect(screen.getByText("Status: No")).toBeInTheDocument();
    expect(screen.getByText("Status: Maybe")).toBeInTheDocument();
    expect(screen.getByText("Status: Yes")).toBeInTheDocument();
  });

  it("renders one status row per planet", () => {
    const planets = [
      { name: "Mars", statue: "maybe" },
      { name: "Jupiter", statue: "no" },
    ];

    render(<ListOfPlanets planets={planets} />);

    expect(screen.getAllByText(/Status:/i)).toHaveLength(planets.length);
  });
});
