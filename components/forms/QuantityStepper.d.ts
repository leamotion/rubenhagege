/**
 * Numeric stepper for order quantity.
 * @startingPoint section="Forms" subtitle="Quantity increment / decrement" viewport="700x120"
 */
export interface QuantityStepperProps {
  value?: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
}
