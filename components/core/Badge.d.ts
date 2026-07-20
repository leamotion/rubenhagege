/**
 * Small uppercase pill label for availability notes like "Uniquement le vendredi".
 * @startingPoint section="Core" subtitle="Availability / status pills" viewport="700x140"
 */
export interface BadgeProps {
  children?: React.ReactNode;
  tone?: 'muted' | 'accent' | 'gold' | 'inverse';
}
