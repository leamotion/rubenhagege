/**
 * Horizontal scrollable category filter — Gâteaux individuels / à partager / indispensables.
 * @startingPoint section="Navigation" subtitle="Scrollable category pills" viewport="700x120"
 */
export interface CategoryTab { label: string; value: string; }
export interface CategoryTabsProps {
  tabs: CategoryTab[];
  value?: string;
  onChange?: (value: string) => void;
}
