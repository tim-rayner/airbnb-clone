Loading and Error
Loading State
Next.js allows us to show an instant loading state while a page or layout is fetching data. All we have to do is create a component in the same directory of the page or layout that is fetching data and call it loading.js
/app
	/dashboard
	  page.tsx
    loading.tsx
​
const Loader = () => <div>Loading...</div>

export default Loader
​
Error State
To show some UI for when a page or layout errors our during rendering, we can create a error.js file.
/app
	/dashboard
	  page.tsx
    error.tsx
​
const ErrorMessage = () => <div>Oops...</div>

export default ErrorMessage