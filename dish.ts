import { IRestaurant } from './restaurant';

/**
 * Model definition for dish
 */
export interface IDish {
  id: string;
  name?: string;
  description?: string;
  image?: any;
  price?: number;
  restaurant?: IRestaurant;
}