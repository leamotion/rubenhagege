/**
 * Horizontal product row (list layout) with thumbnail, availability note, price and add button.
 * @startingPoint section="Cards" subtitle="List-row product card, on dark or light surface" viewport="700x300"
 */
export interface ProductCardProps {
  image: string;
  name: string;
  note?: string;
  price: string;
  onAdd?: () => void;
  dark?: boolean;
}

/**
 * Square-image grid product card, e.g. full catalogue browsing.
 * @startingPoint section="Cards" subtitle="Grid product card with optional badge" viewport="360x420"
 */
export interface ProductGridCardProps {
  image: string;
  name: string;
  price: string;
  badge?: string;
  onClick?: () => void;
}
