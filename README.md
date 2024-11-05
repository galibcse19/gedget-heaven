## Live Website Link:
https://gedget-heaven.netlify.app/

## Requirement Document Link:
https://github.com/ProgrammingHero1/B10-A8-gadget-heaven/blob/main/Batch-10_Assignment-08-.pdf

## Fundamental concepts used in the project
1. React Components: React components are reusable, self-contained pieces of UI. You’re creating components (e.g., ProductItem, Cart, Wishlist) to build a modular interface.

2. State Management with useState: State in React allows components to manage and update data that affects how the component renders.
You’re using useState to keep track of dynamic values like wishlist, cartItems, and addedToWishlist. This helps React automatically update the UI when the state changes.

3. Context API (createContext and useContext): The Context API is used to share data globally across components without prop drilling.
By creating contexts like CartContext, you can make wishlist, cartItems, and totalPrice available to all components that need them, improving accessibility and code readability.

4. Event Handling: React’s event handling (onClick, onChange, etc.) allows you to handle user interactions.
You’re using onClick handlers on buttons like "Add to Wishlist" and "Purchase" to trigger actions such as adding items to the cart or wishlist, and updating the UI based on user input.

5. Conditional Rendering: Conditional rendering is used to display different UI elements based on certain conditions.
For example, you show the "In Stock" or "Out of Stock" message based on data.availability, and display the totalPrice only if it’s greater than 0.

6. Array Manipulation: JavaScript array methods like map, filter, and find are crucial for working with lists of data.
In your project, you’re using map to iterate over cartItems and display each item, and filter to sort or filter data for specific components.

7. Conditional Styling: You’re conditionally setting class names based on states, such as changing button colors when an item is in the wishlist or cart.
This enhances user experience by providing visual feedback based on interactions.

9. Toasts for Notifications: You’re using react-toastify to show toast notifications, which provide feedback to the user.
This adds to the user experience by confirming actions, like successfully adding an item to the wishlist.

10. Router for Navigation: The React Router library allows for seamless navigation between pages without reloading the entire app.
You’re using it to handle routes like /cart and /wishlist, enabling you to structure your app across multiple views.

## Using ContextAPI for handling and managing data

## 5 features of your website/project:
1. Dynamic Product Filtering and Sorting
2. Add to Wishlist and Cart Functionality
3. Real-Time Price Calculation
4. In-Stock and Out-of-Stock Indicators
5. Context API for Global State Management