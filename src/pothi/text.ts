/** Splits text around dandas, which pothi scribes picked out in red. Odd entries are the dandas. */
export function aroundDandas(text: string): string[] {
  return text.split(/([।॥]+)/);
}
