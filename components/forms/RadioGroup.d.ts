/**
 * Radio card group for exclusive choices: livraison vs click & collect, payment options.
 * @startingPoint section="Forms" subtitle="Delivery / pickup choice cards" viewport="700x220"
 */
export interface RadioOption { label: string; value: string; helper?: string; }
export interface RadioGroupProps {
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  name?: string;
}
