# Menu

## React Context

1. Theming -> use the Theme context to style App.js
2. Add a Toogle button to the upper left corner
3. When clicking this button, update the value of the ThemeContext.

4. Create a new context called `UserContext`, it's first value will be:
   `{ username: undefined, isLoggedIn: false }`
5. Update your `App.js` main component to become a Provider for the `UserContext` that you defined
6. Create a new Component: `UserProfile` simply displaying the username from `UserContext`
7. Update the `onSubmit` method of your `LoginForm`, to update the user's status (first check if username and password are correct, then update `isLoggedIn` accordingly)
8. Render your `UserProfile` component instead of `LoginForm` when the `isLoggedIn` is truthy.

## React Suspense and React.Lazy

1. Use `React.lazy` to split your `LoginForm` and `UserProfile` components
2. Create an `ImageLoading` component, which shall display `./src/images/dale-waiting.gif`
3. Use `Suspense` to display `<ImageLoading />` while the app is loading your splitted components.
