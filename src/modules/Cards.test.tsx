// src/modules/Cards.test.tsx
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import Cards from "./Cards";
import { MyContext } from "../context/Context";

const mockContext = {
  data: [],
  dispatch: vi.fn(),
  selectedMission: null,
  isOpen: false,
};

describe("Cards component", () => {
  it("отображает заголовок SpaceX Launches 2020", () => {
    render(
      <MyContext.Provider value={mockContext}>
        <Cards />
      </MyContext.Provider>
    );
    expect(screen.getByText("SpaceX Launches 2020")).toBeInTheDocument();
  });

  it("отображает ModalPortal при isOpen и selectedMission", () => {
    const contextWithModalOpen = {
      ...mockContext,
      isOpen: true,
      selectedMission: {
        mission_name: "Test Mission",
        rocket: { rocket_name: "Test Rocket" },
        links: { mission_patch_small: "" },
      },
    };

    render(
      <MyContext.Provider value={contextWithModalOpen}>
        <Cards />
      </MyContext.Provider>
    );

    expect(screen.getByTestId("modal-portal")).toBeInTheDocument();
  });
});
