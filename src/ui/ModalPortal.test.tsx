import { render, screen } from "@testing-library/react";
import ModalPortal from "./ModalPortal";
import type { Launch } from "../context/types";

const baseMission: Omit<Launch, "rocket" | "links" | "details" | "isOpen"> = {
  flight_number: 1,
  launch_date_unix: 0,
  mission_name: "Test Mission",
};

const missionWithRocket: Launch = {
  ...baseMission,
  rocket: { rocket_name: "Falcon 9" },
  links: { mission_patch: null, mission_patch_small: null },
  details: "Some details",
  isOpen: true,
};

describe("ModalPortal - rocket name", () => {
  beforeEach(() => {
    const modalRoot = document.createElement("div");
    modalRoot.setAttribute("id", "modal");
    document.body.appendChild(modalRoot);
  });

  afterEach(() => {
    const modalRoot = document.getElementById("modal");
    if (modalRoot) document.body.removeChild(modalRoot);
  });

  it("отображает rocket_name, если он есть", () => {
    render(<ModalPortal mission={missionWithRocket} onClose={() => {}} />);
    expect(screen.getByText("Falcon 9")).toBeInTheDocument();
  });

  it("отображает 'Unknown', если rocket отсутствует", () => {
    const missionWithoutRocket: Launch = {
      ...baseMission,
      rocket: undefined,
      links: { mission_patch: null, mission_patch_small: null },
      details: "Some details",
      isOpen: true,
    };

    render(<ModalPortal mission={missionWithoutRocket} onClose={() => {}} />);
    expect(screen.getByText("Unknown")).toBeInTheDocument();
  });
});

describe("ModalPortal - дополнительные проверки", () => {
  beforeEach(() => {
    const modalRoot = document.createElement("div");
    modalRoot.setAttribute("id", "modal");
    document.body.appendChild(modalRoot);
  });

  afterEach(() => {
    const modalRoot = document.getElementById("modal");
    if (modalRoot) document.body.removeChild(modalRoot);
  });

  it("отображает кнопку закрытия", () => {
    render(<ModalPortal mission={missionWithRocket} onClose={() => {}} />);
    expect(screen.getByRole("button", { name: /close/i })).toBeInTheDocument();
  });

  it("отображает описание миссии, если оно есть", () => {
    const missionWithDescription = {
      ...missionWithRocket,
      details: "Test mission details",
    };
    render(<ModalPortal mission={missionWithDescription} onClose={() => {}} />);
    expect(screen.getByText(/test mission details/i)).toBeInTheDocument();
  });
});
