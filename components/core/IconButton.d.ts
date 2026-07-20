/**
 * Square icon-only button, e.g. the "+" add-to-cart control on product rows.
 * @startingPoint section="Core" subtitle="Add-to-cart style icon controls" viewport="700x160"
 */
export interface IconButtonProps {
  icon: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'subtle' | 'dark' | 'accent' | 'outline';
  onClick?: () => void;
  ariaLabel?: string;
  style?: React.CSSProperties;
}
