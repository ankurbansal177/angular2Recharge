# Assignment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.1.
Project was build with node v10.1.0 (npm v5.6.0)

## Development server
Run `npm install` to load all modules

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code Structure Explained
Components:
Recharge Selector: This has all recharge options which are linked with websocket and update once we update the price.csv file   on server side.  
Recharge Banner: Recharge selector consists of multiple recharge banners. Recharge banner has price, bonus Price and checked   property. An interface for Recharge banner was created.  
Payment: Payment component with 2 payment option credit card and netbanking was added.  
Credit Card Component: This has form for credit card nummber, expiry date and cvv with validation. ng2-cc-validator module has   been used for this. Only actual credit card number will work here.  
Internet Banking: Banks will be fetched from server and payment will be validated on server with bank details and amount.  
Payment Successful: This contains message and button to add more cash.  


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
