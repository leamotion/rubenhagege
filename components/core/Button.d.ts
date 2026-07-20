/**
 * Primary call-to-action button. Pill-shaped, matches "Passer commande" / "Voir tout" usage.
 * @startingPoint section="Core" subtitle="Pill buttons in 4 variants" viewport="700x220"
 */
export interface ButtonProps {
  /** Visual treatment. primary = burgundy fill, dark = ink fill, outline = hairline border, subtle = soft dark pill (on dark surfaces) */
  variant?: 'primary' | 'dark' | 'outline' | 'subtle';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
