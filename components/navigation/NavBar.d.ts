/**
 * Top navigation bar: menu, centered wordmark, cart with item-count badge.
 * @startingPoint section="Navigation" subtitle="Wordmark nav bar with cart badge" viewport="700x160"
 */
export interface NavBarProps {
  wordmark?: string;
  cartCount?: number;
  dark?: boolean;
  onMenu?: () => void;
  onCart?: () => void;
}
