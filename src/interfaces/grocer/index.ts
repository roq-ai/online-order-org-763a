import { ProductInterface } from 'interfaces/product';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface GrocerInterface {
  id?: string;
  description?: string;
  location?: string;
  contact_number?: string;
  rating?: number;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  product?: ProductInterface[];
  user?: UserInterface;
  _count?: {
    product?: number;
  };
}

export interface GrocerGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  location?: string;
  contact_number?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
