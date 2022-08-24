import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;
  shippingCosts;
  selectedShipping;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) { 
    this.items = this.cartService.getItems();
    this.shippingCosts = this.cartService.getShippingPrices();

    this.checkoutForm = this.formBuilder.group({
      name: '',
      email: '',
      shipping: this.selectedShipping
    });
  }

  onSubmit(customerData) {
    console.warn('Your order has been submitted', customerData);
    window.alert('Your order has been submitted!');
 
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

  onChange(event): void { 
    const newVal = event.target.value;
    this.selectedShipping = newVal;
  }

  removeToCart(product) {
    this.cartService.removeToCart(product);
  }

  ngOnInit() {
  }

}
