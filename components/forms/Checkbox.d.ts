/**
 * Checkbox for gift-order options (add plaque, add gift message, etc).
 * @startingPoint section="Forms" subtitle="Checked / unchecked states" viewport="700x140"
 */
export interface CheckboxProps {
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}
