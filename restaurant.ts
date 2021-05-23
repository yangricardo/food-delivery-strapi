import { IDish } from './dish';

/**
 * Model definition for restaurant
 */
export interface IRestaurant {
  id: string;
  name?: string;
  description?: string;
  image?: any;
  dishes: IDish[];
}