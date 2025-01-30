import Mazzini from "../images/mazzini-logo.webp";
import Falken from "../images/falken-logo.webp";
import Michelin from "../images/michelin-logo.webp";
import Mazzinityre from "../images/mazzini-eco.png";
import Falkentyre from "../images/falken-ziex.png";
import Michelintyre from "../images/michelin-primacy.png";

const generatePrices = (basePrice, maxQuantity = 5) =>
    Array.from({ length: maxQuantity }, (_, i) => ({
        quantity: i + 1,
        price: (i + 1) * basePrice,
    }));

export default [
    {
        id: 1,
        brandImg: {
            src: Mazzini,
            alt: "Mazzini Logo",
        },
        tyreImage: Mazzinityre,
        tyreModelName: "Eco 307",
        tyreRegister: "185/55R16 87V",
        tyrePrice: 56.94,
        tyreInfo: "Fully fitted price per tyre",
        quantityPrices: generatePrices(56.94),
    },
    {
        id: 2,
        brandImg: {
            src: Falken,
            alt: "Falken Logo",
        },
        tyreImage: Falkentyre,
        tyreModelName: "Ziex ZE310 Ecorun",
        tyreRegister: "185/55R16 83H",
        tyrePrice: 76.14,
        tyreInfo: "Fully fitted price per tyre",
        quantityPrices: generatePrices(76.14),
    },
    {
        id: 3,
        brandImg: {
            src: Michelin,
            alt: "Michelin Logo",
        },
        tyreImage: Michelintyre,
        tyreModelName: "Primacy 4+",
        tyreRegister: "185/55R16 83V",
        tyrePrice: 141.58,
        tyreInfo: "Fully fitted price per tyre",
        quantityPrices: generatePrices(141.58),
    },
    {
        id: 4,
        brandImg: {
            src: Michelin,
            alt: "Michelin Logo",
        },
        tyreImage: Michelintyre,
        tyreModelName: "Primacy 4+",
        tyreRegister: "185/55R16 83V",
        tyrePrice: 56.94,
        tyreInfo: "Fully fitted price per tyre",
        quantityPrices: generatePrices(141.58),
    },
    {
        id: 5,
        brandImg: {
            src: Falken,
            alt: "Falken Logo",
        },
        tyreImage: Falkentyre,
        tyreModelName: "Ziex ZE310 Ecorun",
        tyreRegister: "185/55R16 83H",
        tyrePrice: 56.94,
        tyreInfo: "Fully fitted price per tyre",
        quantityPrices: generatePrices(76.14),
    },

    {
        id: 6,
        brandImg: {
            src: Mazzini,
            alt: "Mazzini Logo",
        },
        tyreImage: Mazzinityre,
        tyreModelName: "Eco 307",
        tyreRegister: "185/55R16 87V",
        tyrePrice: 141.58,
        tyreInfo: "Fully fitted price per tyre",
        quantityPrices: generatePrices(56.94),
    },
];
