import clothing from "../assets/clothing.png";
import crwn from "../assets/crwn-clothing.gif";
import todolist from "../assets/todolist.png";
import todolistGif from "../assets/todolist-gif.gif";
import sociopedia from "../assets/sociopedia.png";
import sociopediaGif from "../assets/socialmedia.gif";
import extennndo from "../assets/extennndo.png";
import extennndoPromo from "../assets/extennndo-promo.png";

export const projectData = [
  {
    title: "Extennndo",
    pictureUrl: extennndo,
    gif: extennndoPromo,
    shortDescription:
      "Minimal new tab page fetching pictures from @entropy API",
    longDescription:
      "extennndo will replace your new tab page. Giving you a fresh new image from @ennntropy any time you open a new one. The way it works is by fetching their API that offers an image URL from their archive, which is then placed on the html of the new tab page.",
    repo: "https://github.com/waldo2810/extennndo",
    features: ["creative", "inspirational", "visionary"],
    technologies: ["html", "css", "javascript"],
  },
  {
    title: "Crwn-Clothing",
    pictureUrl: clothing,
    gif: crwn,
    shortDescription:
      "This is an E-Commerce project where I used front-end technologies such as React-Typescript and a Backend with firebase to implement auth.",
    longDescription:
      "This is a web application for an online clothing store called 'CRWN Clothing'. It was built using React, Redux, Firebase, and other modern web technologies. The app allows users to browse different clothing collections, add items to their cart, and complete checkout using Stripe payment processing. It also includes features like user authentication and authorization, user profile management, and admin panel for managing products and orders. The code is well-organized and follows best practices for modern web development",
    repo: "https://github.com/waldo2810/crwn-clothing",
    features: ["Authentication", "Persistance", "GraphQL"],
    technologies: ["React", "TypeScript", "Firebase", "Redux"],
  },
  {
    title: "Todolist",
    pictureUrl: todolist,
    gif: todolistGif,
    shortDescription:
      "Simple web-based to-do list application using Node.js, Express, MongoDB, HTML, CSS, and JavaScript for the backend server, database, and front-end user interface, respectively.",
    longDescription:
      "This is a simple, yet functional to-do list web application. The application is built using a combination of HTML, CSS, JavaScript, and jQuery, and allows users to add tasks to a list, mark them as complete, delete them, and filter the list to show only active or completed tasks. The web application has a minimalistic design, with a clean and easy-to-use interface that is both responsive and accessible. The user interface consists of a header, a task input field, a task list, and a footer that shows the total number of tasks and the number of completed tasks. Overall, Todolist provides an excellent example of a well-designed and functional to-do list web application that can be used as a starting point for building similar applications.",
    repo: "https://github.com/waldo2810/todolist",
    features: [
      "Add new task to the list",
      "Mark a task as complete",
      "Remove a task from the list",
    ],
    technologies: ["NodeJS", "MongoDB", "EJS"],
  },
  {
    title: "Sociopedia",
    pictureUrl: sociopedia,
    gif: sociopediaGif,
    shortDescription:
      "Social media platform developed using the MERN stack. MERN stands for MongoDB, Express.js, React, and Node.js.",
    longDescription:
      "The project includes a backend built with Node.js and Express.js, which provides a REST API for data storage and retrieval. The database is MongoDB, which stores user information, posts, and comments.\nThe frontend of the application is built with React.js, which provides a responsive user interface that allows users to interact with the platform. Users can sign up, log in, create posts, view posts, and comment on posts.\nThe project also includes various features such as a like button for posts, user profiles, and the ability to search for users and posts. Overall, the project is a complete social media platform that can be used as a starting point for building a custom social media application.",
    repo: "http://github.com/waldo2810/mern-socialmedia",
    features: [
      "Social Media Platform",
      "Authentication and Authorization",
      "Real-time Communication",
    ],
    technologies: ["MongoDB", "Express.js", "React"],
  },
];
