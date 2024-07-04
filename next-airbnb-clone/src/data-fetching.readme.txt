# Fetching Data

## Server Components

Server components fetch data on the server. Because these components have not client side JS, they don’t fall into the render logic / loop that client components do and instead they work more like regular js functions. This means we can just async / await a server component to get data.

```tsx
const getContent = async () => {
  const res = await fetch('https://cms.com/......')
	const content = await res.json()
	return cotent.homePage
}

const HomePage = async () => {
  const content = await getContent()
	return (
		<div>{content.title}</div>
	)
}

export default HomePage
```

This entire component will be executed on the server every time the matching route is triggered. You can use `fetch` in your server side calls, its built it as a global from Next.js. It also has advanced caching and deduping features to help keep things fast

## Client Components

For now, you can use any current data fetching