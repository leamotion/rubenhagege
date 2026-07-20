/**
 * Bottom sheet used for product personalization (parts, plaque text) and checkout steps.
 * @startingPoint section="Core" subtitle="Bottom sheet for product customization" viewport="420x520"
 */
export interface SheetProps {
  open: boolean;
  onClose?: () => void;
  title?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
}
