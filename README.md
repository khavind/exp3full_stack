  🚀 Basic Client-Side Routing Using React Router

📌 Aim To implement basic client-side routing in a Single Page Application (SPA) using React Router.

🛠️ Software Requirements

Node.js
React
React Router DOM
Web Browser
📖 Theory Routing in a Single Page Application (SPA) allows navigation between different views without reloading the entire page.

React Router enables smooth client-side routing by mapping URLs to React components using:

BrowserRouter
Routes
Route
Client-side routing is a technique used in modern web applications where navigation between pages happens without reloading the entire webpage. Instead of requesting a new HTML page from the server each time, the application dynamically updates the view using JavaScript.

In traditional websites: Every link click sends a request to the server. The server responds with a new HTML page. The browser reloads completely. In a Single Page Application (SPA): Only one HTML file is loaded initially. JavaScript handles navigation. Components are rendered dynamically based on the URL.

React Router is a powerful routing library for React applications that allows developers to define routes declaratively. It works by monitoring the browser’s URL and rendering the corresponding component when the URL changes.

Important Concepts in React Router:

• BrowserRouter – Wraps the application and enables routing using HTML5 history API. • Routes – A container for all route definitions. • Route – Maps a URL path to a specific component. • Exact Matching – Ensures correct path matching.

Advantages of Client-Side Routing:

Faster navigation Reduced server load Better user experience Seamless transitions No full-page refresh

This experiment demonstrates how URLs can be mapped to React components to create a dynamic and interactive web application.

This improves performance and provides a seamless user experience.

Screenshots: <img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/4aa4cd2b-99b4-448f-ae30-1cbd2a2c821c" />


<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/663d5a98-c97b-4827-a22b-33b5f410ca35" />

Experiment: Multi-Page SPA Using Routing

🌐 Multi-Page SPA Using Routing

📌 Aim To create a multi-page Single Page Application (SPA) using client-side routing.

🛠️ Software Requirements

Node.js
React
React Router DOM
Web Browser
📖 Theory A Single Page Application dynamically updates content without reloading the browser.

React Router enables:

Multiple routes
Component-based navigation
Clean URL structure
Faster page transitions
A Multi-Page Single Page Application may sound contradictory, but it refers to creating multiple views within a single-page architecture using routing.

In this approach: The application behaves like a multi-page website. Internally, it is still a single HTML file. React dynamically renders different components based on the route.

Routing allows us to structure applications logically. Each component represents a page such as: Home About Services Contact

Screenshots: <img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/1fe75112-181b-4a48-b745-d6221e4364a7" />

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/049723c1-e728-4748-bad1-1b7d0a9d724a" />

Experiment: Navigation Using Link Component

📌 Aim To implement navigation links in a SPA using React Router Link component.

🛠️ Software Requirements

Node.js
React
React Router DOM
Web Browser
📖 Theory The Link component allows smooth navigation between routes without refreshing the page.

Unlike the traditional tag, Link:

Prevents page reload
Maintains SPA behavior
Improves performance
Navigation is an essential part of any web application. In traditional HTML, navigation is done using the tag. However, in React SPAs, using causes the browser to reload the entire page, which breaks SPA behavior.

React Router provides the Link component to handle navigation efficiently.

How Link Works: It prevents default browser refresh behavior. It updates the URL. It renders the corresponding component instantly. It maintains application state.

Screenshots: <img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/6fe4ad69-400d-4a40-98d6-75409d4f2582" />


<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/c7e22d46-f61c-49ad-94b1-8f072c831843" />
