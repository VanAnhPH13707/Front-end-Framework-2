import instance from './instance';
import { CategoryType } from '../types/category';


export const listCate = () => {
    const url = '/category';
    return instance.get(url);
}
export const removeCate = (id: number) => {
    const url = `/category/${id}`;
    return instance.delete(url);
}
export const addCate = (data:any) => {
    const url = `/category`;
    return instance.post(url, data);
}
export const updateCate = (category: any) => {
    const url = `/category/${category.id}`;
    return instance.put(url, category);
}
export const readCate = (id: string | undefined ) => {
    const url = `/category/${id}`;
    return instance.get(url);
}
export const getProInCate = (id:number) => {
    const url = `/categoryDetail/${id}`
    return instance.get(url)
}