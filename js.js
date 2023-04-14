var doc = document;

var loe = doc.getElementById("loe");

var loen = doc.getElementById("loen");
var loe2 = doc.getElementById("summary");

var speed = 100;

let words = `I am a software engineer that creates
websites and web applications using the MERN Stack. I am also a full stack developer that can create apps using C#, .NET, and SQL. I am a graduate of PerScholas Institute with a Bachelors of Science in Computer Science. I am currently looking for a full time position as a software engineer.`;

let words2 = `Here you can find a list of my projects, my resume, and my contact information.`

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

function typeWriter() {
    if (i < words.length) {
      loe.textContent += words.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
    if (i < words2.length) {
      loen.textContent += words2.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
    if (i < Summ.length) {
      loe2.textContent += Summ.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  const form = document.querySelector("#form")
  const submitButton = document.querySelector("#submit")
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxLZTlgHBunzjDAyvzTFB9AAQZS2vGT4hSZKlfMDVMQrrHEQwKDYO2-fo05BNfFegYWVg/exec'

  form.addEventListener('submit', e => {
    submitButton.disabled = true
    e.preventDefault()
    let requestBody = new FormData(form)
    fetch(scriptURL, { method: 'POST', body: requestBody})
      .then(response => {
         alert('Success!', response)
         submitButton.disabled = false
        })
      .catch(error => {
      alert('Error!', error.message)
        submitButton.disabled = false

      }
      )
  })
  
typeWriter();