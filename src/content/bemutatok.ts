// Ügyfeleknek szóló, telefonon és számítógépen is lapozható bemutatók.
// Saját tárhelyen futnak (public/bemutato/…, Vercel) – a megnyitáshoz nem kell Claude-fiók és bejelentkezés.
// A link végére tett #p.<hex> kód („Név|telefon” UTF-8 bájtjai) dönti el, kinek az elérhetősége
// jelenik meg az utolsó dián – így minden partner a saját linkjét küldi tovább.

export const DOG_BEMUTATO_URL = "https://tudastar.bterapia.hu/dog";

export function szemelyesLink(alapUrl: string, nev: string, telefon: string): string {
  const hex = Buffer.from(`${nev.trim()}|${telefon.trim()}`, "utf8").toString("hex");
  return `${alapUrl}#p.${hex}`;
}
