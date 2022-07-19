import instance from "./instance";

export const list = () => {
    const url = '/products';
    return instance.get(url);
}

export const add = (data: any) => {
    const url = "/products";
    return instance.post(url, data);
}