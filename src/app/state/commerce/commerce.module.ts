import { v4 as uuid } from 'uuid';

export interface Commerce {
    animationIndex: number;
    "id": number,
    "uid": typeof uuid,
    "color": string,
    "department": string,
    "material": string,
    "product_name": string,
    "price": number,
    "price_string": string,
    "promo_code": string
}