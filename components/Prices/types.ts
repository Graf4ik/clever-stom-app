export type PriceItem = {
    id: number;
    name: string;
    price: string;
};

export type PriceSection = {
    id: number;
    title: string;
    items: PriceItem[];
};
