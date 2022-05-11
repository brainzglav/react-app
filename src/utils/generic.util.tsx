export function formatSearchQuery(query: string): string {
  return query.toLowerCase().replace(/\s/g, "");
}
