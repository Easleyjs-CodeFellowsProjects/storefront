# Lab 36 - 38 Storefront: App State with Redux

# Description

# Dependencies
redux axios eslint mui

## Requirements:
As a user, I expect to see a list of available product categories in the store so that I can easily browse products.
As a user, I want to choose a category and see a list of all available products matching that category.
As a user, I want a clean, easy to use user interface so that I can shop the online store with confidence.

### Features
-- Create a visually appealing site using Material UI.
- Use a Redux Store to manage the state of categories and items in the store.
-- Display a list of categories from state.

- When the user selects (clicks on) a category:
-- Identify that category as selected (change of class/display).
-- Show a list of products associated with the category.

### Components
- A <Header /> component which shows the name of your virtual store.
- A <Footer /> component which shows your copyright and contact information.
- A <Categories /> component:
  -- Shows a list of all categories.
  -- Dispatches an action when one is clicked to “activate” it.
- A <Products /> component:
  -- Displays a list of products associated with the selected category.

## Notes on constructing the Redux Store:
**Categories**
- State should contain a list of categories as well as the active category.
- Each category should have a normalized name, display name, and a description.
- Create an action that will trigger the reducer to change the active category.
- Update the active category in the reducer when this action is dispatched.

**Products**
- State should be a list of all products.
- Each product should have a category association, name, description, price, inventory count.
- Create an action that will trigger when the active category is changed.

HINT: Multiple reducers can respond to the same actions.
Create a reducer that will filter the products list based on the active category.
Active Category
State should store active category.
Other components (products, etc) might need to reference this.