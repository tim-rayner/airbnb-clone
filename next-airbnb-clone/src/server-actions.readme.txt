# Server Actions

Server actions allow us to run code on the server without ever having to setup a new API route ourselves. Depending on how you use a server action, they might work with JS disabled on the browser. Here’s how to create a Server Actions.

```tsx
const Home = async () => {
  const update = async (data) => {
		'use server'
		const email = data.get('email')
		// ....
  }

	return (
		<form action={update}>
			<input name="email" type="email" />
			<button type="submit">sign up</button>
		</form>
	)
}
```

A Server Actions is a function that must be created with the `use server` directive. Either like above or in a file that uses the directive at the top. You can do whatever you want in a server action, however, you can’t wait for a response to get a return value. This is why server actions are great for performing side effects or any action in which the client isn’t waiting for a response.

If you must perform a mutation in your server action, as in you change some data and need that change to be reflected on the screen, you can use `revalidate` to tell Next.js to fetch the data again for that given path:

```tsx
const newTodo = async (data) => {
	'use server'

	const todo = data.get('todo')
	await db.todo.create({/*....*/})
  revalidate('/todos') // fetch data again on the /todos page
}
```

There are other ways to use a server action outside of a form action as well. However, right now, I recommend only using server actions for forms that trigger non mutations on the server.