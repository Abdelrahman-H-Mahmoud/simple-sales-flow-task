# Setup

* Load Dependencies with `npm ci`
* Start Development server with `npm start`
* Run Tests with `npm test`

# Exercise

Representing a sales flow using 3 screens: 
1. screen1
* Already exists with a simple button "start"
* Load the products after a click on the button "start" (on screen2)
* A json with the raw data is located at /public/data.json and can be loaded during runtime at localhost:3000/data.json
2. screen2
* Displays loaded products with prices (see rendered screen2)
* Products can be selected
* After a click on the button "basket" screen3 is displayed
3. screen3
* Displays a summary of the selected products with prices
* Redirect to screen1 after a click on the button "order" without further action

# Technical guidelines:

* Business logic is integrated in selectors (not in the react components)
* A high test coverage is required (example test is written with react-testing-library, enzyme is also ok)
* A clean solution is more important than a complete solution
* A small example of the desired data flow is given with the use case of "dark mode"