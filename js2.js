var doc = document;

var loe = doc.getElementById("loe");

var loen = doc.getElementById("loen");
var loe2 = doc.getElementById("summary");

let words = `I am a software engineer that creates
websites and web applications using the MERN Stack. I am also a full stack developer that can create apps using C#, .NET, and SQL. I am a graduate of PerScholas Institute with a Bachelors of Science in Computer Science. I am currently looking for a full time position as a software engineer.`;

var speed = 40;

i = 0;

function typeWriter() {
    if (i < words.length) {
      loe.textContent += words.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();