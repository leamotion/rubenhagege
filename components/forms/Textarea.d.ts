/**
 * Character-limited textarea for the personalized cake plaque message (45 chars).
 * @startingPoint section="Forms" subtitle="Plaque message, 45-char limit" viewport="700x180"
 */
export interface TextareaProps {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  maxLength?: number;
  placeholder?: string;
}
