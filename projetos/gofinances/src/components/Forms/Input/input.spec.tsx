import React from "react";
import { render } from "@testing-library/react-native";
import { Input } from ".";
import { ThemeProvider } from "styled-components/native";
import theme from "../../../global/styles/theme";

const renderWithTheme = (children: React.ReactNode) => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};

/* const Provider = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}; */

describe("Input component", () => {
  it("must have specific border color when active", () => {
    /*     const { getByTestId } = render(
      <Input
        testID="input-email"
        placeholder="E-mail"
        keyboardType="email-address"
        autoCorrect={false}
        active={true}
      />,
      {
        wrapper: Provider,
      }
    ); */

    const { getByTestId } = renderWithTheme(
      <Input
        testID="input-email"
        placeholder="E-mail"
        keyboardType="email-address"
        autoCorrect={false}
        active={true}
      />
    );

    const inputComponent = getByTestId("input-email");
    expect(inputComponent.props.style[0].borderColor).toEqual("#E83F5B");
  });
});
