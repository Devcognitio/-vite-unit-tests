import React from "react";
import { render, screen, act, waitFor, cleanup } from "@testing-library/react";
import MyComponent from "./dataFetch";
import { useApi } from "./useApi.hook";
import "@testing-library/jest-dom/vitest";

import {
  describe,
  beforeEach,
  test,
  expect,
  vi,
  Mock,
  afterEach,
} from "vitest";

const useApiMock = vi.mocked(useApi);

vi.mock("./useApi.hook", () => ({
  useApi: vi.fn(),
}));

describe("MyComponent", () => {
  let fetchDataMock: Mock;

  beforeEach(() => {
    // Reset the fetch mock and provide a new mock implementation

    fetchDataMock = vi.fn();
    useApiMock.mockClear();
    useApiMock.mockReturnValue({
      fetchData: fetchDataMock,
    } as any);
  });

  afterEach(() => {
    cleanup();
  });

  test("renders loading message initially", async () => {
    fetchDataMock.mockResolvedValue("Mocked Data");
    render(<MyComponent />);

    const element = screen.getByText("Loading...");

    expect(element).toBeDefined();
    // Ensure that the loading message is displayed
    expect(screen.getByTestId("loading")).toBeInTheDocument();

    // Wait for the fetch request to complete and re-render the component
    await act(() => Promise.resolve());
  });

  test("renders data when fetch is successful", async () => {

    // arrange 
    fetchDataMock.mockResolvedValue("Mocked data");

    // act 
    render(<MyComponent />);
    await act(async () => {
      await Promise.resolve();
    });


    // assert 
    expect(screen.getByTestId("data")).toHaveTextContent("Mocked data");

  });
});
