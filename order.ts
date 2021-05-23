/**
 * Model definition for order
 */
export interface IOrder {
  id: string;
  address?: string;
  city?: string;
  dishes?: { [key: string]: any };
  amount?: number;
}