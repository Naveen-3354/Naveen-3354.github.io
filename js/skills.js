const colors = [
    "001219",
    "005F73", "0A9396", "94D2BD",
    "E9D8A6",
    "EE9B00",
    "CA6702",
    "BB3E03", "AE2012", "9B2226",
]

const datas = [
    {
        title: "ALL",
    },
    {
        title: "DATABASES"
    },
    {
        title: "JAVA"
    },
    {
        title: "JAVASCRIPT"
    },
    {
        title: "PYTHON"
    },
    {
        title: "LANGUAGES"
    },
    {
        title: "TOOLS"
    },
    {
        title: "CLOUD"
    },
]
const contentDatas = [
    {
        used: "Python",
        rating: 3,
        topic: ["ALL", "PYTHON", "LANGUAGES"]
    },
    {
        used: "SQL",
        rating: 4,
        topic: ["ALL", "DATABASES", "LANGUAGES"]
    },
    {
        used: "Java",
        rating: 4,
        topic: ["ALL", "JAVA", "LANGUAGES"]
    },
    {
        used: "JavaScript",
        rating: 5,
        topic: ["ALL", "JAVASCRIPT", "LANGUAGES"]
    },
    {
        used: "TypeScript",
        rating: 4,
        topic: ["ALL", "JAVASCRIPT", "LANGUAGES"]
    },
    {
        used: "Dart",
        rating: 3,
        topic: ["ALL", "LANGUAGES"]
    },
    {
        used: "C",
        rating: 3,
        topic: ["ALL", "LANGUAGES"]
    },
    {
        used: "Django",
        rating: 3,
        topic: ["ALL", "PYTHON"]
    },
    {
        used: "Flask",
        rating: 3,
        topic: ["ALL", "PYTHON"]
    },
    {
        used: "React",
        rating: 5,
        topic: ["ALL", "JAVASCRIPT"]
    },
    {
        used: "Node.js",
        rating: 4,
        topic: ["ALL", "JAVASCRIPT"]
    },
    {
        used: "ExpressJs",
        rating: 4,
        topic: ["ALL", "JAVASCRIPT"]
    },
    {
        used: "Spring Boot",
        rating: 4,
        topic: ["ALL", "JAVA"]
    },
    {
        used: "Spring Security",
        rating: 4,
        topic: ["ALL", "JAVA"]
    },
    {
        used: "Flutter",
        rating: 3,
        topic: ["ALL"]
    },
    {
        used: "MongoDB",
        rating: 4,
        topic: ["ALL", "DATABASES"]
    },
    {
        used: "MySQL",
        rating: 5,
        topic: ["ALL", "DATABASES"]
    },
    {
        used: "PostgreSQL",
        rating: 5,
        topic: ["ALL", "DATABASES"]
    },
    {
        used: "AWS",
        rating: 5,
        topic: ["ALL", "CLOUD"]
    },
    {
        used: "Docker",
        rating: 4,
        topic: ["ALL", "CLOUD"]
    },
    {
        used: "Redis",
        rating: 3,
        topic: ["ALL", "TOOLS"]
    },
    {
        used: "NextJs",
        rating: 4,
        topic: ["ALL", "JAVASCRIPT"]
    },
    {
        used: "Github",
        rating: 4,
        topic: ["ALL", "TOOLS"]
    },
    {
        used: "Git",
        rating: 4,
        topic: ["ALL", "TOOLS"]
    },
    {
        used: "GCP",
        rating: 4,
        topic: ["ALL", "CLOUD"]
    },
    {
        used: "Azure",
        rating: 4,
        topic: ["ALL", "CLOUD"]
    }
];

function generateColor() {
    return Math.floor(Math.random(1, 11) * 10)
}

let title = document.getElementById("skills-table-title")
let addTitle = () => {
    datas.map(data => {
        const titleElement = document.createElement('p');
        titleElement.textContent = data.title;
        title.appendChild(titleElement);
    });
}
addTitle()

let allContent = (topic) => {
    let content = document.getElementById("table-content")
    content.innerHTML = null
    contentDatas.map(data => {
        if (data.topic.includes(topic)) {
            const contentElement = document.createElement('div');
            const contentName = document.createElement('span');
            const contentRating = document.createElement('div');
            const contentRating1 = document.createElement('span');
            const contentRating2 = document.createElement('span');

            contentElement.classList = ["languages"]
            contentName.classList = ["text"]
            contentRating.classList = ["rating"]


            contentName.textContent = data.used;

            contentRating1.style.width = `${data.rating * 20}%`
            contentRating1.style.backgroundColor = "#98c1d9"
            contentRating2.textContent = `${data.rating}/5`
            contentRating.appendChild(contentRating1)
            contentRating.appendChild(contentRating2)

            contentElement.appendChild(contentName)
            contentElement.appendChild(contentRating)
            content.appendChild(contentElement);
        }
    });
}

allContent("ALL")

title.addEventListener("click",
    function(event){
        allContent(event.target.innerText)
        
    }
)