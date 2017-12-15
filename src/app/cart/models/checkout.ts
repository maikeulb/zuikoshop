import { CheckoutAddress } from './checkout-address';

export interface Checkout {
  firstName: string;
  lastName: string;
  email: string;
  shippingAddress: CheckoutAddress;
  billingAddress: CheckoutAddress;
}
