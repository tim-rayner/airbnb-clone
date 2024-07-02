
# AirBnb Clone 🛏️ (Next.js + react + typescript) 
I want to enhance my React skills and refresh my memory on React, so for this reason I have decided to mock out and design a React clone of Airbnb, to use as a portfolio piece for my ever growing development portfolio. I have chose Airbnb as they continue to demonstrate year on year how they raise the bar in the world of tech and UI, and for this reason feel like I might be able to learn a thing or two from them by cloning their designs and get myself used to implementing such practices. 

This document provides as a rough plan and checklist on how I’m going to develop a visually appealing user interface using react, ensuring every view and component is strongly typed. I want this demo to stand out above the other projects in my portfolio in terms of standardisation and best practices. 

## Step 1: Market Research: 
I first read this blog post by an employee at Airbnb describing the steps and considerations they took before making a large refactor to their systems when upgrading from a largely legacy codebase powered by ruby on rails. This was a really great eye opener on how I should be using state, how components should be rendered, and what the user experience flow should be kept like. 

read here: https://medium.com/airbnb-engineering/rearchitecting-airbnbs-frontend-5e213efc24d2

Key takeaways from this article, which should be considered when designing the architecture of my Airbnb clone: 

⚙️ Separating API data from other data (configuration, cache, phrases, internationalisation, etc) 
segregating api calls using abstraction to separate concerns: https://medium.com/weekly-webtips/implementing-a-rest-api-with-react-hooks-using-patterns-2ea1476e2a05
keeping ‘other data’ in suitable data storage

⚙️ LazyLoading the frontend and Asynchronous components, React vs Next, Async components, are they necessary everywhere? 

⚙️ Transitions & a Smooth, Professional user experience

⚙️ Build accessibility into the design language, every single component needs to be accessible for all users. The UI is rich enough that we want to associate a CheckBox not only with a title, but also a subtitle using aria-describedby. To achieve this requires a unique identifier in the DOM, which means enforcing a required ID as a prop that any calling parents need to provide. These are the types of hard constraints the UI can impose to ensure that if a component is used in the product, it is delivered with accessibility built in.

⚙️ Each and every component should be completely abstract. totally reusable. Wherever we want. 

## Step 2: Preparation/considerations:
Picking a framework - Before we scaffold the project we need to discover the most appropriate framework solution for what we’re aiming to build. Straight off the bat, I am leaning towards Next.js as this is offers SSR and Asynchronous components out of the box. I know for whatever solution I go with I’d like to use React JSX components just to support my learning path, but whether this is Next.js or plain React is something I’m needing to consider in this step. 

UI Components -  I am also aware that the UI component library to use is VERY important to keep up to the standards of Airbnb; so for this reason I will do some research on the best to use to keep a rich user interface once the base framework has been chosen. 

Mobile responsive design - I always implement mobile responsive design into every web application I build so picking the correct techniques for this is something which is important to me. I am thinking about using mobile first tailwind classes with the viewport flags inline for each component, then moving any further more complicated styling such as for animations or transitions into its own style class for the relevant component. 

Data - Finding a suitable API, or series of API’s to build this project is important before we start writing code. The V2 api discussed in the blog referenced above by the Airbnb employee is somewhere I’d like to start. If this is not available, I will do my best to find something which offers the resources to find places to rent, etc in local areas. The API will need to be free as this is not a profitable project for me. 

### Picking a Framework: 
Next JS Next JS vs React Pros: 
✔️ ‘Easy’ streamlined coding experience 

✔️ speedy coding experience, for getting apps out of the door quickly. 

✔️ real-time rendering - every changer made offered in the UI immediately 

✔️ API Integration - Next.js seamlessly connects to third party apis expanding project abilities out of the box. 


Next JS vs React Disadvantages: 


❌ React relies a lot on the community with offering narrow options out of the box, however this makes expanding a project more bespoke which could be seen as an advantage. 

❌ the two downfalls of Next as of 2024 is routing and community. It uses file based routing but for dynamic routing vanilla JS is necessary. 


Next JS Vs React Differences: 
🤝 Development speed - Next.js comes with built in features to make developing with React easier. 

🤝 Data fetching and performance - Next.js is significantly faster at fetching data than just plain react. In contrast react apps generally take longer to load. 

🤝 Rending and SEO - Next.js offers pre rendering which offers massive SEO and accessibility support whereas react suffers with this unless SSR is used in addition to plain old react. 

🤝 Routing - Next offers a pretty defined system for routing while react offers many different methods of routing by utilising different libraries for this same job. 

🤝 Configuration - Next.js offers MUCH more customisation to how the infrastructure works, something React cannot offer. 


Conclusion - Which Do I use? 
I have found that Next.js serves as a “powerful engine” to serve reacts capabilities... supercharged. it builds on top of React and raises it to a new level. Code splitting & routing also come out-of-the-box so would seem silly to waste extra time building thins into a standalone react application. So for this Airbnb clone I will be using Next.js.


### Picking a component/style library (+Font): 
Since we’re wanting to create a rich, smooth UI to keep up with the ever growing standards of Airbnb, it’s important we pick a component library to 1) keep everything consistent, and 2) save us lots of development time not having to code such components from scratch. 

I have found that Airbnb actually have their own library for these exact reasons, which I will incorporate into the design with my clone. Their library is called Visx https://airbnb.io/visx. 

While Visx handles a lot of the lower level, more complicated UI components, I want to create or implement a library of react composable to handle all of the high level components such as basic user input. After some research I have found bit.dev. Which I will be using to develop a super slick composable library for all of the components which Visx isn’t being used for; such as buttons, input fields, cards, etc. 

I have also found that Airbnb use the following fonts, which I will also provide with a brand guidelines document which I will reference whilst creating all of the relevant components: 

Airbnb uses a custom font called Cereal however this is not a free resource, so after some research decided to replace Cereal with Montserrat as its a hot, close enough free alternative. 

Here are the rest of Airbnb brand guidelines which I will strictly follow while creating this clone:


### Finding suitable Data:
After some thorough research, its become apparent that using an official Airbnb API is not a possibility, since they lock all of their endpoints behind a strict product base only top companies tend to get access to. This is a slight setback, however does give us an option to create our very own API for serving such data. 

I’ve decided the best approach is to use multiple different APIs from similar property booking services such a ‘booking.com’ and other public facing apis to curate all of the data we need. This could also offer us the extensibility to create our own booking database to deepen our clone showing an even more extensive set of skill use.   

After a look at available APIs I’ve decided to construct my own bespoke api piggy-backing from the google Hotels API. I figured I would use their API which can scan all kinds of engines for villas and accommodation then return the key information I need back to me. This enables me to also add custom locations If I wanted to add some special locations or personal favourite stays into my project. Just to keep it as fun and interesting as possible. 

I will then use MongoDB to construct my own database for rental bookings, accounts, and rates to ensure that I am creating the most interactive copy I can. I will create this API within the same repo as the frontend clone using Express on a local node server.
 






