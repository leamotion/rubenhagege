/**
 * Category rail header — title + "Voir tout" pill, as used on the homepage.
 * @startingPoint section="Navigation" subtitle="Category rail header" viewport="700x120"
 */
export interface SectionHeaderProps {
  title: string;
  actionLabel?: string;
  onAction?: () => void;
  dark?: boolean;
}
