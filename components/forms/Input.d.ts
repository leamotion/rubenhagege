/**
 * Text input for checkout fields (nom, prénom, téléphone, email, adresse).
 * @startingPoint section="Forms" subtitle="Checkout text fields" viewport="700x160"
 */
export interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: string;
  helper?: string;
}
