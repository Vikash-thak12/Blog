// utils/content.ts
export function stripHtml(html: string): string {
  // remove tags & decode basic entities if you want later
  return html.replace(/<[^>]*>/g, "").trim();
}

export function isEmptyContent(html: string): boolean {
  return stripHtml(html).length === 0;
}
