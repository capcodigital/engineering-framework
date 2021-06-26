import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Content from "./Content";
import { BrowserRouter as Router } from "react-router-dom";
import { EngineeringContextProvider } from "./EngineeringContext";
import {
  ContentContainer,
  ContentHeader,
  categoryAndCompetencyFromUrl,
} from "./Content";

describe("Content", () => {
  it("should render Content component", () => {
    const { container } = render(
      <Router>
        <EngineeringContextProvider>
          <Content title={"Software Engineer"} />
        </EngineeringContextProvider>
      </Router>
    );
    expect(container).toMatchSnapshot();
  });

  it("should render Content component and check SideBar exists", () => {
    render(
      <Router>
        <EngineeringContextProvider>
          <Content title={"Software Engineer"} />
        </EngineeringContextProvider>
      </Router>
    );
    expect(screen.getByTestId("sidebar")).toBeTruthy();
  });

  it("should render Content component and check competency list exists", () => {
    render(
      <Router>
        <EngineeringContextProvider>
          <Content title={"Software Engineer"} />
        </EngineeringContextProvider>
      </Router>
    );
    expect(screen.getByTestId("competency-list")).toBeTruthy();
  });

  it("should check that Narrative competency is in ContentContainer when opening Delivery category", () => {
    const { container } = render(
      <Router>
        <EngineeringContextProvider>
          <Content title={"Software Engineer"} />
        </EngineeringContextProvider>
      </Router>
    );
    fireEvent.click(screen.getByTestId("associate-delivery"));
    expect(container.querySelector(".list-item > .title")).toHaveTextContent(
      "Narrative"
    );
  });

  it("should return a category and competency from hash url", () => {
    const { categoryfromUrl, competencyFromUrl } = categoryAndCompetencyFromUrl(
      "#delivery-technical-leadership"
    );
    expect(categoryfromUrl).toBe("Delivery");
    expect(competencyFromUrl).toBe("Technical Leadership");
  });

  describe("ContentHeader", () => {
    it("should check that correct background image renders", () => {
      const { container } = render(
        <Router>
          <EngineeringContextProvider>
            <ContentHeader level={"Associate"} />
          </EngineeringContextProvider>
        </Router>
      );
      expect(container.firstChild).toHaveStyle(
        "background-image: url(associate.png)"
      );
    });

    it("should render level title with Associate Engineer text by default", () => {
      const { container } = render(
        <Router>
          <EngineeringContextProvider>
            <Content title={"Software Engineer"} />
          </EngineeringContextProvider>
        </Router>
      );
      expect(container.querySelector(".level-title")).toHaveTextContent(
        "Associate • Associate Engineer"
      );
    });

    it("should click Consultant in the side bar and render level title with Consultant Engineer text", () => {
      const { container } = render(
        <Router>
          <EngineeringContextProvider>
            <Content title={"Software Engineer"} />
          </EngineeringContextProvider>
        </Router>
      );

      expect(container.querySelector(".level-title")).toHaveTextContent(
        "Associate • Associate Engineer"
      );

      fireEvent.click(screen.getByText("Consultant"));

      expect(container.querySelector(".level-title")).toHaveTextContent(
        "Consultant • Engineer"
      );
    });

    it("should check that the default category displayed is Overview ", () => {
      const { container } = render(
        <Router>
          <EngineeringContextProvider>
            <Content title={"Software Engineer"} />
          </EngineeringContextProvider>
        </Router>
      );

      expect(container.querySelector(".category")).toHaveTextContent(
        "Overview"
      );
    });
  });

  describe("ContentContainer", () => {
    it("should check that ContentContainer is hidden when menu is open on mobile", () => {
      const { container } = render(
        <Router>
          <EngineeringContextProvider>
            <ContentContainer menuOpen={true} />
          </EngineeringContextProvider>
        </Router>
      );
      expect(container.firstChild).not.toBeVisible();
    });

    it("should check that ContentContainer is visible when menu is closed on mobile", () => {
      const { container } = render(
        <Router>
          <EngineeringContextProvider>
            <ContentContainer menuOpen={false} />
          </EngineeringContextProvider>
        </Router>
      );
      expect(container.firstChild).toBeVisible();
    });
  });
});
