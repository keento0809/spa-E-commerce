import { render, fireEvent } from "@testing-library/react";
import { SearchBar } from "@/components/common/SearchBar";

describe("searchBar", () => {
  it("should be filled on change", () => {
    const mockOnChange = jest.fn();
    const { getByTestId } = render(<SearchBar onChange={mockOnChange} />);
    const input = getByTestId("searchBar") as HTMLInputElement;
    fireEvent.change(input, {
      target: { value: "search word" },
    });
    expect(input.value).toBe("search word");
  });
});
