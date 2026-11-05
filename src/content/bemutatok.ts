// Ügyfeleknek szóló, telefonon és számítógépen is lapozható bemutatók.
// Saját tárhelyen futnak (public/bemutato/…, Vercel) – a megnyitáshoz nem kell Claude-fiók és bejelentkezés.
// A link végére tett #p.<hex> kód („Név|telefon” UTF-8 bájtjai) dönti el, kinek az elérhetősége
// jelenik meg az utolsó dián – így minden partner a saját linkjét küldi tovább.

export const DOG_BEMUTATO_URL = "https://tudastar.bterapia.hu/dog";
export const TERAPIA_BEMUTATO_URL = "https://tudastar.bterapia.hu/terapia";

// A terápiás bemutató kártyája a partnereknek ekkor nyílik ki magától (a 2026-11-11-i szerdai partnermeetingen
// mutatjuk be). Előtte lakatos: se link, se jegyzet nem kerül az oldal HTML-jébe; az admin végig látja.
// November → téli idő, Budapest = UTC+1.
export const TERAPIA_NYITAS = "2026-11-11T19:00:00+01:00";

export function nyitva(nyitas: string, most: Date = new Date()): boolean {
  return most.getTime() >= new Date(nyitas).getTime();
}

export function szemelyesLink(alapUrl: string, nev: string, telefon: string): string {
  const hex = Buffer.from(`${nev.trim()}|${telefon.trim()}`, "utf8").toString("hex");
  return `${alapUrl}#p.${hex}`;
}
