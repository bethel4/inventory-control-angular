export interface WarehouseModel {
    id?: number;
    name: string;
    suk: string;
    unit: string;
    price: string;
    quantnity:string;
    created_at:string;
    updated_at:string;
    expire_date:string;
    producation_date:string
    created_by:string;
  }
export const EMPTY_PORDERSFORM = {
    id: null,
    name: '',
    suk: '',
    unit: '',
    price: '',
    quantnity:'',
    created_at:'',
    updated_at:'',
    expire_date:'',
    producation_date:'',
    created_by:'',
};
