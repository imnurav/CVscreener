console.log('this is iterator tutorial');
const applicant = [
    {
        name: "varun kumar",
        age: 20,
        city: "Delhi",
        language: "pyhton",
        framework: "django",
        image: "https://randomuser.me/api/portraits/men/51.jpg"
    },
    {
        name: "Ravi kumar",
        age: 25,
        city: "Bengaluru",
        language: "javascript",
        framework: "angular",
        image: "https://randomuser.me/api/portraits/men/55.jpg"
    },
    {
        name: "akash verma",
        age: 20,
        city: "mumbai",
        language: "machine learning",
        framework: "Artificial Intelligence",
        image: "https://randomuser.me/api/portraits/men/45.jpg"
    },
    {
        name: "Vamshi Dontula",
        age: 21,
        city: "Telengana",
        language: "java/kotlin",
        framework: "spring",
        image: "https://randomuser.me/api/portraits/men/59.jpg"
    },
    {
        name: "ashish dubey",
        age: 29,
        city: "maharashtra",
        language: "nodejs",
        framework: "express",
        image: "https://randomuser.me/api/portraits/men/74.jpg"
    },
    {
        name: "bhaskar gautam",
        age: 45,
        city: "uttar pradesh",
        language: "golang",
        framework: "nil",
        image: "https://randomuser.me/api/portraits/men/60.jpg"
    }
]
function cviterator(arraydata) {
    let nextindex = 0;
    return {
        next: function () {
            return nextindex < arraydata.length ?
                { value: arraydata[nextindex++], done: false } :
                { done: true }
        }
    }
}

const people = cviterator(applicant)
nextresume()
const nextdata = document.getElementById('next')
nextdata.addEventListener('click', nextresume)
function nextresume() {
    const current = people.next().value
    console.log(current);
    let image = document.getElementById('image')
    let profile = document.getElementById('profile')
    if(current!=undefined){
    image.innerHTML = `<img src='${current.image}'>`
    profile.innerHTML = `<img src='${current.image}'>`;
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${current.name}</li>
    <li class="list-group-item">${current.age} years old</li>
    <li class="list-group-item">Lives in ${current.city}</li>
    <li class="list-group-item">Primarily works on ${current.language}</li>
    <li class="list-group-item">Uses ${current.framework} framework</li>
  </ul>`;
    }
    else{
        alert('End of the application')
        window.location.reload();
    }

}