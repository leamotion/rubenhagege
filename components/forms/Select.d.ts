/**
 * Dropdown select, used for the shared-cake parts count (4/6/8/10/12).
 * @startingPoint section="Forms" subtitle="Parts-count and other dropdowns" viewport="700x160"
 */
export interface SelectOption { label: string; value: string; }
export interface SelectProps {
  label?: string;
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}
