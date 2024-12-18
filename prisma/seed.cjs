"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
var opis1 = "Nuty zapachowe Top: Bergamot, Pear, Berry Mid: Coconut, Jasmine, Rose Dry: Cashmere, Amber, Patchouli, Musk Zapachy są zgodne ze standardami INTERNATIONAL FRAGRANCE ASSOCIATION (IFRA). (Certyfikaty IFRA dla poszczególnych produktów dostępne na żądanie). Zapachy są zgodne z przepisami REACH oraz żaden z produktów, ani jego opakowanie, nie zawierają substancji opublikowanych przez Europejską Agencję Chemiczną (ECHA) w zaktualizowanej liście kandydatów SVHC (substancje wzbudzające szczególnie duże obawy) zgodnie ze stanem na dzień 07.2019 (https://echa.europa.eu/en/candidate-list-table). DEKLARACJA ZGODNOŚCI Certyfikacja wegańska – zgodnie z naszą najlepszą wiedzą, firma French Color and Fragrance Co. nie wykorzystuje w produktach żadnych składników zapachowych ani barwników pochodzących od zwierząt. Zapachy ani żaden z ich składników (wymienionych w THE INTERNATIONAL COSMETIC INGREDIENT DICTIONARY AND HANDBOOK – edycja 8) nie były testowane przez French Color & Fragrance na zwierzętach – ANIMAL NON-TESTING DECLARATION (TI/9/6). Wszystkie zapachy IPRA France produkowane są w stolicy zapachów - Grasse we Francji.";
var opis2 = "Świeca sojowa zapachowa, zapach o nazwie Giorgio Armani Si. 100% wosku sojowego Nuty zapachowe: Top: orange, peach, pear, crisp greens Mid: jasmine, tuberose, petitgrain, lavender, rose, geranium, violet Base: cedarwood, cashmere woods, vanilia, amber musk Zapachy są zgodne ze standardami INTERNATIONAL FRAGRANCE ASSOCIATION (IFRA). (Certyfikaty IFRA dla poszczególnych produktów dostępne na żądanie). Zapachy są zgodne z przepisami REACH oraz żaden z produktów, ani jego opakowanie, nie zawierają substancji opublikowanych przez Europejską Agencję Chemiczną (ECHA) w zaktualizowanej liście kandydatów SVHC (substancje wzbudzające szczególnie duże obawy) zgodnie ze stanem na dzień 07.2019 (https://echa.europa.eu/en/candidate-list-table). DEKLARACJA ZGODNOŚCI Certyfikacja wegańska – zgodnie z naszą najlepszą wiedzą, firma French Color and Fragrance Co. nie wykorzystuje w produktach żadnych składników zapachowych ani barwników pochodzących od zwierząt. Zapachy ani żaden z ich składników (wymienionych w THE INTERNATIONAL COSMETIC INGREDIENT DICTIONARY AND HANDBOOK – edycja 8) nie były testowane przez French Color & Fragrance na zwierzętach – ANIMAL NON-TESTING DECLARATION (TI/9/6).";
var opis3 = "Nuty Głowy: Róża, Aldehyd Nuty Serca: Fiołek, Kwiat Bawełny Nuty Bazy: Białe Piżmo, Drzewo Cedrowe Zapachy są zgodne ze standardami INTERNATIONAL FRAGRANCE ASSOCIATION (IFRA). (Certyfikaty IFRA dla poszczególnych produktów dostępne na żądanie). Zapachy są zgodne z przepisami REACH oraz żaden z produktów, ani jego opakowanie, nie zawierają substancji opublikowanych przez Europejską Agencję Chemiczną (ECHA) w zaktualizowanej liście kandydatów SVHC (substancje wzbudzające szczególnie duże obawy) zgodnie ze stanem na dzień 07.2019 (https://echa.europa.eu/en/candidate-list-table) Jednocześnie zobowiązujemy się niezwłocznie powiadomić Państwa gdyby sytuacja ta uległa zmianie. DEKLARACJA ZGODNOŚCI Certyfikacja wegańska – zgodnie z naszą najlepszą wiedzą, firma French Color and Fragrance Co. nie wykorzystuje w produktach żadnych składników zapachowych ani barwników pochodzących od zwierząt. Zapachy ani żaden z ich składników (wymienionych w THE INTERNATIONAL COSMETIC INGREDIENT DICTIONARY AND HANDBOOK – edycja 8) nie były testowane przez French Color & Fragrance na zwierzętach – ANIMAL NON-TESTING DECLARATION (TI/9/6)";
var opis4 = "Nuty zapachowe: Top: Orange, Clove, Winterberry, Zest Aire Mid: Cinnamon, Cedar, Siberian Fir, Violet, Patchouli Dry: Tonka, Cedar Zapachy IPRA France produkowane są w stolicy zapachów - Grasse we Francji.";
var opis5 = "Specjalna kompozycja olejku zapachowego lawendy oraz towarzyszących jej olejków mandarynki, trawy cytrynowej, geranium, paczuli, nut pudrowych, piżma, cedru. Zapachy produkowane są w stolicy zapachów - Grasse we Francji.";
var opis6 = "Nuty Zapachowe Nuty Głowy: Pieczone Jabłko, Cynamon Nuty Serca: Piernik, Goździki Nuty Bazy: Wanilia Zapachy są zgodne ze standardami INTERNATIONAL FRAGRANCE ASSOCIATION (IFRA). (Certyfikaty IFRA dla poszczególnych produktów dostępne na żądanie). Zapachy są zgodne z przepisami REACH oraz żaden z produktów, ani jego opakowanie, nie zawierają substancji opublikowanych przez Europejską Agencję Chemiczną (ECHA) w zaktualizowanej liście kandydatów SVHC (substancje wzbudzające szczególnie duże obawy) zgodnie ze stanem na dzień 07.2019 (https://echa.europa.eu/en/candidate-list-table). DEKLARACJA ZGODNOŚCI Certyfikacja wegańska – zgodnie z naszą najlepszą wiedzą, firma French Color and Fragrance Co. nie wykorzystuje w produktach żadnych składników zapachowych ani barwników pochodzących od zwierząt. Zapachy ani żaden z ich składników (wymienionych w THE INTERNATIONAL COSMETIC INGREDIENT DICTIONARY AND HANDBOOK – edycja 8) nie były testowane przez French Color & Fragrance na zwierzętach – ANIMAL NON-TESTING DECLARATION (TI/9/6).";
var opis7 = "Nuty zapachowe Nuty Głowy: Czerwone jagody Nuty Serca: Igły Sosnowe, Mięta Nuty Bazy: Mech Drzewny, Balsam Jodłowy Zapachy IPRA France produkowane są w stolicy zapachów - Grasse we Francji.";
var products = [
    {
        name: 'Perfumowana Świeca Sojowa Lady M',
        description: opis1,
        stock: 0,
        image: 'https://res.cloudinary.com/djio9fbja/image/upload/v1733048713/public/swiecesojowe/r3kuos5p66yzwtgc7ucd.jpg',
        price: 0,
        sizes: [
            { name: 'S - 40g', price: 12.00 },
            { name: 'M - 90g', price: 25.00 },
            { name: 'L - 190g', price: 50.00 }
        ]
    },
    {
        name: 'Perfumowana Świeca Sojowa Si',
        description: opis2,
        stock: 0,
        image: 'https://res.cloudinary.com/djio9fbja/image/upload/v1733048714/public/swiecesojowe/q08xfzu2afg2iysf093f.jpg',
        price: 0,
        sizes: [
            { name: 'S - 40g', price: 12.00 },
            { name: 'M - 90g', price: 25.00 },
            { name: 'L - 190g', price: 50.00 }
        ]
    },
    {
        name: 'Świeca Sojowa Bawełna',
        description: opis3,
        stock: 0,
        image: 'https://res.cloudinary.com/djio9fbja/image/upload/v1733048713/public/swiecesojowe/lepa6zlka5vgpjinxibq.jpg',
        price: 0,
        sizes: [
            { name: 'S - 40g', price: 12.00 },
            { name: 'M - 90g', price: 25.00 },
            { name: 'L - 190g', price: 50.00 }
        ]
    },
    {
        name: 'Świeca Sojowa Christmas',
        description: opis4,
        stock: 0,
        image: 'https://res.cloudinary.com/djio9fbja/image/upload/v1733048714/public/swiecesojowe/ngcxnqdshaadqdq3aook.jpg',
        price: 0,
        sizes: [
            { name: 'S - 40g', price: 12.00 },
            { name: 'M - 90g', price: 25.00 },
            { name: 'L - 190g', price: 50.00 }
        ]
    },
    {
        name: 'Świeca Sojowa Lawenda',
        description: opis5,
        stock: 0,
        image: 'https://res.cloudinary.com/djio9fbja/image/upload/v1733048714/public/swiecesojowe/lw8tmhhpvt3wb1vf8tnu.jpg',
        price: 0,
        sizes: [
            { name: 'S - 40g', price: 12.00 },
            { name: 'M - 90g', price: 25.00 },
            { name: 'L - 190g', price: 50.00 }
        ]
    },
    {
        name: 'Świeca Sojowa Pierniczek',
        description: opis6,
        stock: 0,
        image: 'https://res.cloudinary.com/djio9fbja/image/upload/v1733048714/public/swiecesojowe/nadrkazxnrvlrpoi8aeu.jpg',
        price: 0,
        sizes: [
            { name: 'S - 40g', price: 12.00 },
            { name: 'M - 90g', price: 25.00 },
            { name: 'L - 190g', price: 50.00 }
        ]
    },
    {
        name: 'Świeca Sojowa Świąteczny Poranek',
        description: opis7,
        stock: 0,
        image: 'https://res.cloudinary.com/djio9fbja/image/upload/v1733048714/public/swiecesojowe/pu0zwwrf5uilvuiipwfx.jpg',
        price: 0,
        sizes: [
            { name: 'S - 40g', price: 12.00 },
            { name: 'M - 90g', price: 25.00 },
            { name: 'L - 190g', price: 50.00 }
        ]
    },
];
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var _i, products_1, product, createdProduct;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _i = 0, products_1 = products;
                    _a.label = 1;
                case 1:
                    if (!(_i < products_1.length)) return [3 /*break*/, 4];
                    product = products_1[_i];
                    return [4 /*yield*/, prisma.product.create({
                            data: {
                                name: product.name,
                                description: product.description,
                                stock: product.stock,
                                image: product.image,
                                price: product.price,
                                sizes: {
                                    create: product.sizes.map(function (size) { return ({
                                        name: size.name,
                                        price: size.price,
                                    }); }),
                                },
                            },
                        })];
                case 2:
                    createdProduct = _a.sent();
                    console.log("Produkt ".concat(createdProduct.name, " zosta\u0142 dodany do bazy z rozmiarami!"));
                    _a.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    });
}
main()
    .catch(function (e) {
    console.error(e);
    process.exit(1);
})
    .finally(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
