import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@emotion/react";
import Button from "../../../components/global/Button";
import { theme } from "../../../components/global/Global";

describe("Button component", () => {
  describe("when variant prop value is contained", () => {
    it("should render a ContainedButton", () => {
      render(
        <ThemeProvider theme={theme}>
          <Button variant="contained" />
        </ThemeProvider>
      );

      const containedButton = screen.getByTestId("contained-button");

      expect(containedButton).toBeInTheDocument();
    });
  });
  describe("when it has no variant prop", () => {
    it("should render a TextButton", () => {
      render(
        <ThemeProvider theme={theme}>
          <Button />
        </ThemeProvider>
      );

      const textButton = screen.getByTestId("text-button");

      expect(textButton).toBeInTheDocument();
    });
  });
});
