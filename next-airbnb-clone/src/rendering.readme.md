# Rendering

In Next.js, routes can be statically or dynamically rendered. Static routes render the components on the server at build time and cache the result for future requests, while dynamic routes render the components on the server at request time.

By default, Next.js statically renders routes to improve performance and caches the result of `fetch()` requests that do not specifically opt out of caching behavior. If any fetch requests in the route use the revalidate option, the route will be re-rendered statically during revalidation.

During static rendering, if a dynamic function or a dynamic `fetch()` request (no caching) is discovered, Next.js will switch to dynamically rendering the whole route at request time. Any cached data requests can still be re-used during dynamic rendering.

Dynamic functions rely on information that can only be known at request time such as a user's cookies, current request headers, or the URL's search params. Using `cookies()` or `headers()` in a Server Component will opt the whole route into dynamic rendering at request time, while using `useSearchParams()` in Client Components will skip static rendering and instead render all Client Components up to the nearest parent Suspense boundary on the client.

Dynamic data fetches are `fetch()` requests that specifically opt out of caching behavior by setting the cache option to 'no-store' or revalidate to 0.