import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


async function main() {
    const opis1="Nuty zapachowe Top: Bergamot, Pear, Berry Mid: Coconut, Jasmine, Rose Dry: Cashmere, Amber, Patchouli, Musk Zapachy są zgodne ze standardami INTERNATIONAL FRAGRANCE ASSOCIATION (IFRA). (Certyfikaty IFRA dla poszczególnych produktów dostępne na żądanie). Zapachy są zgodne z przepisami REACH oraz żaden z produktów, ani jego opakowanie, nie zawierają substancji opublikowanych przez Europejską Agencję Chemiczną (ECHA) w zaktualizowanej liście kandydatów SVHC (substancje wzbudzające szczególnie duże obawy) zgodnie ze stanem na dzień 07.2019 (https://echa.europa.eu/en/candidate-list-table). DEKLARACJA ZGODNOŚCI Certyfikacja wegańska – zgodnie z naszą najlepszą wiedzą, firma French Color and Fragrance Co. nie wykorzystuje w produktach żadnych składników zapachowych ani barwników pochodzących od zwierząt. Zapachy ani żaden z ich składników (wymienionych w THE INTERNATIONAL COSMETIC INGREDIENT DICTIONARY AND HANDBOOK – edycja 8) nie były testowane przez French Color & Fragrance na zwierzętach – ANIMAL NON-TESTING DECLARATION (TI/9/6). Wszystkie zapachy IPRA France produkowane są w stolicy zapachów - Grasse we Francji."
    const opis2="Świeca sojowa zapachowa, zapach o nazwie Giorgio Armani Si. 100% wosku sojowego Nuty zapachowe: Top: orange, peach, pear, crisp greens Mid: jasmine, tuberose, petitgrain, lavender, rose, geranium, violet Base: cedarwood, cashmere woods, vanilia, amber musk Zapachy są zgodne ze standardami INTERNATIONAL FRAGRANCE ASSOCIATION (IFRA). (Certyfikaty IFRA dla poszczególnych produktów dostępne na żądanie). Zapachy są zgodne z przepisami REACH oraz żaden z produktów, ani jego opakowanie, nie zawierają substancji opublikowanych przez Europejską Agencję Chemiczną (ECHA) w zaktualizowanej liście kandydatów SVHC (substancje wzbudzające szczególnie duże obawy) zgodnie ze stanem na dzień 07.2019 (https://echa.europa.eu/en/candidate-list-table). DEKLARACJA ZGODNOŚCI Certyfikacja wegańska – zgodnie z naszą najlepszą wiedzą, firma French Color and Fragrance Co. nie wykorzystuje w produktach żadnych składników zapachowych ani barwników pochodzących od zwierząt. Zapachy ani żaden z ich składników (wymienionych w THE INTERNATIONAL COSMETIC INGREDIENT DICTIONARY AND HANDBOOK – edycja 8) nie były testowane przez French Color & Fragrance na zwierzętach – ANIMAL NON-TESTING DECLARATION (TI/9/6)."
    const opis3="Nuty Głowy: Róża, Aldehyd Nuty Serca: Fiołek, Kwiat Bawełny Nuty Bazy: Białe Piżmo, Drzewo Cedrowe Zapachy są zgodne ze standardami INTERNATIONAL FRAGRANCE ASSOCIATION (IFRA). (Certyfikaty IFRA dla poszczególnych produktów dostępne na żądanie). Zapachy są zgodne z przepisami REACH oraz żaden z produktów, ani jego opakowanie, nie zawierają substancji opublikowanych przez Europejską Agencję Chemiczną (ECHA) w zaktualizowanej liście kandydatów SVHC (substancje wzbudzające szczególnie duże obawy) zgodnie ze stanem na dzień 07.2019 (https://echa.europa.eu/en/candidate-list-table) Jednocześnie zobowiązujemy się niezwłocznie powiadomić Państwa gdyby sytuacja ta uległa zmianie. DEKLARACJA ZGODNOŚCI Certyfikacja wegańska – zgodnie z naszą najlepszą wiedzą, firma French Color and Fragrance Co. nie wykorzystuje w produktach żadnych składników zapachowych ani barwników pochodzących od zwierząt. Zapachy ani żaden z ich składników (wymienionych w THE INTERNATIONAL COSMETIC INGREDIENT DICTIONARY AND HANDBOOK – edycja 8) nie były testowane przez French Color & Fragrance na zwierzętach – ANIMAL NON-TESTING DECLARATION (TI/9/6)"
    const opis4="Nuty zapachowe: Top: Orange, Clove, Winterberry, Zest Aire Mid: Cinnamon, Cedar, Siberian Fir, Violet, Patchouli Dry: Tonka, Cedar Zapachy IPRA France produkowane są w stolicy zapachów - Grasse we Francji."
    const opis5="Specjalna kompozycja olejku zapachowego lawendy oraz towarzyszących jej olejków mandarynki, trawy cytrynowej, geranium, paczuli, nut pudrowych, piżma, cedru. Zapachy produkowane są w stolicy zapachów - Grasse we Francji."
    const opis6="Nuty Zapachowe Nuty Głowy: Pieczone Jabłko, Cynamon Nuty Serca: Piernik, Goździki Nuty Bazy: Wanilia Zapachy są zgodne ze standardami INTERNATIONAL FRAGRANCE ASSOCIATION (IFRA). (Certyfikaty IFRA dla poszczególnych produktów dostępne na żądanie). Zapachy są zgodne z przepisami REACH oraz żaden z produktów, ani jego opakowanie, nie zawierają substancji opublikowanych przez Europejską Agencję Chemiczną (ECHA) w zaktualizowanej liście kandydatów SVHC (substancje wzbudzające szczególnie duże obawy) zgodnie ze stanem na dzień 07.2019 (https://echa.europa.eu/en/candidate-list-table). DEKLARACJA ZGODNOŚCI Certyfikacja wegańska – zgodnie z naszą najlepszą wiedzą, firma French Color and Fragrance Co. nie wykorzystuje w produktach żadnych składników zapachowych ani barwników pochodzących od zwierząt. Zapachy ani żaden z ich składników (wymienionych w THE INTERNATIONAL COSMETIC INGREDIENT DICTIONARY AND HANDBOOK – edycja 8) nie były testowane przez French Color & Fragrance na zwierzętach – ANIMAL NON-TESTING DECLARATION (TI/9/6)."
    const opis7="Nuty zapachowe Nuty Głowy: Czerwone jagody Nuty Serca: Igły Sosnowe, Mięta Nuty Bazy: Mech Drzewny, Balsam Jodłowy Zapachy IPRA France produkowane są w stolicy zapachów - Grasse we Francji."

  const products = [
    {
      name: 'Perfumowana Świeca Sojowa Lady M',
      description: opis1,
      price: 50.00,
      stock: 0,
      image: 'https://sklep119227.shoparena.pl/environment/cache/images/750_750_productGfx_181/lady.webp',
      categoryId: null,
    },
    {
      name: 'Perfumowana Świeca Sojowa Si',
      description: opis2,
      price: 50.00,
      stock: 0,
      image: 'https://sklep119227.shoparena.pl/environment/cache/images/750_750_productGfx_181/lady.webp',
      categoryId: null,
    },
    {
      name: 'Świeca Sojowa Bawełna',
      description: opis3,
      price: 50.00,
      stock: 0,
      image: 'https://sklep119227.shoparena.pl/environment/cache/images/750_750_productGfx_181/lady.webp',
      categoryId: null,
    },
    {
      name: 'Świeca Sojowa Christmas',
      description: opis4,
      price: 50.00,
      stock: 0,
      image: 'https://sklep119227.shoparena.pl/environment/cache/images/750_750_productGfx_181/lady.webp',
      categoryId: null,
    },
    {
      name: 'Świeca Sojowa Lawenda',
      description: opis5,
      price: 50.00,
      stock: 0,
      image: 'https://sklep119227.shoparena.pl/environment/cache/images/750_750_productGfx_181/lady.webp',
      categoryId: null,
    },
    {
      name: 'Świeca Sojowa Pierniczek',
      description: opis6,
      price: 50.00,
      stock: 0,
      image: 'https://sklep119227.shoparena.pl/environment/cache/images/750_750_productGfx_181/lady.webp',
      categoryId: null,
    },
    {
      name: 'Świeca Sojowa Świąteczny Poranek',
      description: opis7,
      price: 50.00,
      stock: 0,
      image: 'https://sklep119227.shoparena.pl/environment/cache/images/750_750_productGfx_181/lady.webp',
      categoryId: null,
    },
  ];

  // Wgraj dane do bazy
  for (const product of products) {
    await prisma.product.create({
      data: product,
    });
  }

  console.log('Produkty zostały dodane do bazy danych!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
