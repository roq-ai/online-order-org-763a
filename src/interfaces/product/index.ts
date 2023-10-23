import { OrderItemInterface } from 'interfaces/order-item';
import { ReviewInterface } from 'interfaces/review';
import { GrocerInterface } from 'interfaces/grocer';
import { GetQueryInterface } from 'interfaces';

export interface ProductInterface {
  id?: string;
  name: string;
  description?: string;
  price: number;
  stock: number;
  grocer_id: string;
  created_at?: any;
  updated_at?: any;
  order_item?: OrderItemInterface[];
  review?: ReviewInterface[];
  grocer?: GrocerInterface;
  _count?: {
    order_item?: number;
    review?: number;
  };
}

export interface ProductGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  grocer_id?: string;
}
