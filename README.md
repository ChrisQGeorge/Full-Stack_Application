# Full-Stack Application

## Intro
This is a full-stack application for a website called travlr. This project consists of a database, API, a public front end, and a Single Page Application admin dashboard. The database was created using MongoDB with a Mongoose go between that would interact with the database and the API. The public facing site and the API were created using Angular using an MVC architecture. The admin dashboard was created using Express and has all CRUD interactions with the database. Admins are able to create, read, update, and delete trip entries into the database. More in depth information can be found in the Software Design Document linked below.

Software Design Document: 

### Pictures
Angular front-end
<image src = "Pics/Main Page.png" ></image>

Add new trip UI
<image src = "Pics/Add Trip.png" ></image>

Reading of a new trip added to the database
<image src = "Pics/New Added Trip.png" ></image>

Edit trip UI
<image src = "Pics/Edit Trip.png" ></image>

## Architecture
•	Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
The front end used a page-based system of HBS files as the html sources for the pages. Express was used to run the front end and page content was router through to the pages from MongoDB using routers and controllers.

The SPA on the other hand was composed of a single page with html elements that were shown or not. These elements drew page content from MongoDB using a router. The individual html elements were then displayed with the main page “app.component.html”

•	Why did the backend use a NoSQL MongoDB database?

MongoDB is a versatile data storage solution which has a lot of flexibility when creating a website. Using MongoDB, page content was easily stored as documents in collections which were then easily accessed by both the front-end web site, and the admin SPA.


## Functionality
•	How is JSON different from JavaScript and how does JSON tie together the frontend and backend development pieces?
JSON is a data storage format while JavaScript is a scripting language. JavaScript is used to tie a lot of the SPA content together in the component.ti files while page data is stored in a JSON format in the MongoDB server.

•	Provide instances in the full stack process when you refactored code to improve functionality and efficiencies and name the benefits that come from reusable user interface (UI) components.

One of the main times when I refactored the code was when I added security features to the admin SPA. Before this point, anyone with the page URL could have added, edited, or removed any trips in the MongoDB database. In the refactoring, HTML elements were deleted until the admin logged in. This would be unacceptable for a live website, but this is ok for testing.


## Testing
•	Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

For testing, I mainly used Postman and running the site. The inspect tool was great for diagnosing errors in my code. Each API endpoint was put into Postman and then examined.


Reflection
•	How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

This course has greatly increased my understanding of full stack projects and what actually goes into creating them. Using and setting up an express server was especially helpful. I expect that I will use express a lot when setting up future sites. In the past, I had only used static .html pages, which does have its limits. Angular was also a really helpful tool to learn. In fact, I am currently in the process of making a web-based game with my brother, and I am really considering using an angular SPA for this project.
