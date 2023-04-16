var doc = document;

var loe = doc.getElementById("loe");

var loen = doc.getElementById("loen");
var loe2 = doc.getElementById("summary");

var speed = 40;





let Summ = `
Creative and friendly Junior Full Stack Software Engineer with a strong attention
to detail and a proactive attitude. Proficient in HTML, CSS, JavaScript, NodeJS,
React and C#. Experience with web applications and game development.
PROJECTS
Parts Of Plenty Web Application:
Dec 2022 - Jan 2023
Project Description: A full-stack web app using the MERN stack to show
users a shop for robotics and IOT products being sold on the front-end.
The backend helps manage the item data, and the API is handled by the
middleware. MongoDB is being used to manage the items' data base.
Express can help with the API middleware, routing, and requests. NodeJS
for the runtime. React is for the UI.
Organization: Per Scholas
Project Methodology: test driven development, Functional programming
Application Architecture: MVC
Back-End: Javascript
Database: NoSQL: MongoDB
Front-End: HTML, CSS, Javascript, React`;

let i = 0;

  function typeWriter2() {
    if (i < Summ.length) {
      loe2.textContent += Summ.charAt(i);
      i++;
      setTimeout(typeWriter2, speed);
    }
  }

  typeWriter2();


  
