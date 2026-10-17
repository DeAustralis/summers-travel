// Location and licence verification: docs/tuscany-editorial.md.
export const tuscanyPhotography: Record<number, {
  src: string; width: number; height: number; alt: string; caption: string;
  credit: string; source: string; license: string; licenseUrl?: string;
}> = {
  1: {
    src: "/images/tuscany/greve-piazza-matteotti.webp", width: 1280, height: 656,
    alt: "Arcaded buildings, the town hall and parked cars around Piazza Matteotti in Greve in Chianti",
    caption: "Piazza Matteotti, Greve in Chianti: the first square of the week.",
    credit: "© Raimond Spekking", source: "https://commons.wikimedia.org/wiki/File:Greve_in_Chianti_-_Piazza_Giacomo_Matteotti-9295.jpg",
    license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
  },
  4: {
    src: "/images/tuscany/sant-antimo-abbey.webp", width: 1280, height: 975,
    alt: "Rounded stone apses and the bell tower of Sant’Antimo Abbey beside a tall cypress tree",
    caption: "The apses and bell tower of Sant’Antimo, near Castelnuovo dell’Abate.",
    credit: "Inga Tomane", source: "https://commons.wikimedia.org/wiki/File:Abbazia_di_Sant%27_Antimo_(1).jpg",
    license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
  },
  5: {
    src: "/images/tuscany/bagno-vignoni-square.webp", width: 1280, height: 430,
    alt: "Historic stone buildings and a covered loggia reflected in Bagno Vignoni’s central thermal basin",
    caption: "Piazza delle Sorgenti, Bagno Vignoni. The central basin is for looking, not swimming. Stitched panorama.",
    credit: "Spike", source: "https://commons.wikimedia.org/wiki/File:Bagno_Vignoni_Piazza_delle_Sorgenti_01.jpg",
    license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
  },
  7: {
    src: "/images/tuscany/montepulciano-piazza-grande.webp", width: 1280, height: 562,
    alt: "Montepulciano’s Piazza Grande with the cathedral steps at left and the crenellated Palazzo Comunale ahead",
    caption: "Piazza Grande, Montepulciano: the architectural heart of the final day.",
    credit: "Walter Giannetti", source: "https://commons.wikimedia.org/wiki/File:Montepulciano_Piazza_Grande.jpg",
    license: "Public domain",
  },
};
