import React from "react";
import { render } from "@testing-library/react-native";
import Profile from "../../screens/Profile";

describe("Profile", () => {
  it("Verifica se o input com placeholder correto está na tela", () => {
    const { getByPlaceholderText } = render(<Profile />);

    const inputName = getByPlaceholderText("Nome");

    expect(inputName.props.placeholder).toBeTruthy();
  });

  it("checks if user data has been loaded", () => {
    const { getByTestId } = render(<Profile />);

    const inputName = getByTestId("input-name");
    const inputSurname = getByTestId("input-surname");

    expect(inputName.props.value).toEqual("bruno");
    expect(inputSurname.props.value).toEqual("candido");
  });

  it("checks if title render correctly", () => {
    const { getByTestId } = render(<Profile />);

    const textTitle = getByTestId("text-title");

    expect(textTitle.props.children).toContain("Perfil");
  });
});
