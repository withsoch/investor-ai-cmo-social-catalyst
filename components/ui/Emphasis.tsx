/**
 * The italic orange phrase at the end of a headline, with a sun-coloured
 * marker stroke drawn in underneath. Uses a background band (not an SVG) so
 * it follows the text correctly when the phrase wraps onto two lines.
 */
export function Emphasis({ children }: { children: React.ReactNode }) {
  return <span className="marker-underline italic text-brand">{children}</span>;
}
