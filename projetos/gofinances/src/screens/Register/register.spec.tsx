import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react-native";
import { Register } from ".";
import { ThemeProvider } from "styled-components/native";
import theme from "../../global/styles/theme";
import { NavigationContainer } from "@react-navigation/native";

jest.mock("@react-navigation/native", () => {
  return {
    useNavigation: { navigate: jest.fn() },
  };
});

const Provider = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

describe("Register screen", () => {
  it("should be open category modal when user click on the category button", async () => {
    const { getByTestId } = render(<Register />, { wrapper: Provider });

    const categoryModal = getByTestId("modal-category");
    const buttonCategory = getByTestId("button-category");
    fireEvent.press(buttonCategory);

    await waitFor(() => expect(categoryModal.props.visible).toBeTruthy());
  });
});
