import SelectCheckBoxGroup from "@/components/common/SelectCheckBoxGroup";
import { productCategoryLabel } from "@/constants/labels";
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("selectBoxGroup", () => {
  it("should change the status as clicked", async () => {
    const mockProps = {
      allCategoriesData: productCategoryLabel,
      selectedCategories: { jewelry: true },
      onChange: jest.fn(),
    };
    render(<SelectCheckBoxGroup {...mockProps} />);

    const firstLabel = "jewelery";
    const SecondLabel = "women's clothing";

    await waitFor(() => {
      expect(screen.getByLabelText(firstLabel)).toBeInTheDocument();
      expect(screen.getByLabelText(SecondLabel)).toBeInTheDocument();
    });

    const firstCheckbox = screen.getByRole("checkbox", { name: firstLabel });

    expect(firstCheckbox).not.toBeChecked();

    await act(async () => {
      await userEvent.click(firstCheckbox);
    });

    expect(firstCheckbox).toBeTruthy();
  });
});
