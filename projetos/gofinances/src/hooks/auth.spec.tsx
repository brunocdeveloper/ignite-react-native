import { renderHook, act } from "@testing-library/react-hooks";
import { AuthProvider, useAuth } from "./auth";
import { startAsync } from "expo-auth-session";
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

jest.mock("expo-auth-session", () => {
  return {
    startAsync: () => {
      return {
        type: "success",
        user: {
          id: "any_id",
          email: "brunocmoraes97@gmail.com",
          name: "Bruno",
          photo: "any_photo.png",
        },
      };
    },
  };
});
describe("Auth hook", () => {
  it("should be able to sign in with google account existing", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            id: `userInfo.id`,
            email: `userInfo.email`,
            name: `userInfo.given_name`,
            photo: `userInfo.picture`,
            verified_email: `userInfo.verified_email`,
          }),
      })
    ) as jest.Mock;

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    await act(() => result.current.signInWithGoogle());

    expect(result.current.user).toBeTruthy();
  });

  /* it("should not connect if cancel authentication with Google", async () => {
    const userTest = {
      id: "any_id",
      email: "john.doe@email.com",
      name: "John Doe",
      photo: "any_photo.png",
    };

    const googleMocked = jest.mocked(startAsync as any);

    googleMocked.mockResolvedValueOnce({
      type: "cancel",
    });

    fetchMock.mockResponseOnce(JSON.stringify(userTest));

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    await act(() => result.current.signInWithGoogle());

    expect(result.current.user).not.toHaveProperty("id");
  }); */
});
