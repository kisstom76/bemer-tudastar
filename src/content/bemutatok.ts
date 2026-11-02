// Ügyfeleknek szóló, telefonon lapozható bemutatók (Claude Artifact, „bárki a linkkel”).
// A link végére tett #p.<hex> kód („Név|telefon” UTF-8 bájtjai) dönti el, kinek az elérhetősége
// jelenik meg az utolsó dián – így minden partner a saját linkjét küldi tovább.

export const DOG_BEMUTATO_URL = "https://claude.ai/artifact/Cw9K13RbQuVJfM5D3cqwSD";

export function szemelyesLink(alapUrl: string, nev: string, telefon: string): string {
  const hex = Buffer.from(`${nev.trim()}|${telefon.trim()}`, "utf8").toString("hex");
  return `${alapUrl}#p.${hex}`;
}
