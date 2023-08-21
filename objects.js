let movie = {
    name: "Titanic",
    releaseYear: 1997,
    director: "James Cameron",
    actors: ["Leonardo Dicaprio", "Kate Winslet", "Billy Zane", "Kathy Bates"],
    starActor: {
        name: "Leonardo Dicaprio",
        age: 5,
        born: 1889,
        linkToAwards: "https://en.wikipedia.org/wiki/List_of_awards_and_nominations_received_by_Leonardo_DiCaprio",
        headshotLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Leonardo_DiCaprio_2014.jpg/220px-Leonardo_DiCaprio_2014.jpg"
    },
    budgetInMillions: 200
}

//1 Access the star actor’s age property  and change the value to 48.
movie.starActor.age = 48;
console.log(movie.starActor.age);

//2 Access the star actor’s born property and change the value to 1989.
movie.starActor.born = 1989;
console.log(movie.starActor.born);

//3 Add a new property to the starActor object called isPopular and set its value to true.
movie.starActor.isPopular = true;

//4 Add a new property to the movie object called isGoodMovie with a value of undefined.
movie.isGoodMovie;
console.log(movie.isGoodMovie);

//5 Access the actors array, loop through it and check if the movie has “Tom Cruise” in it. If true, set isGoodMovie to true, else set isGoodMovie to false.

movie.actors.forEach(element => {
    if (element === "Tom Cruise") {
        movie.isGoodMovie = true;
    } else {
        movie.isGoodMovie = false;
    }
});
console.log(movie.isGoodMovie);

console.log("***************Next Object********************");

let cohortFour = {
    classSize: 5,
    instructor: {
        name: "Fred",
        age: 40,
        completedCohortIds: [3, 77, 45, 23],
        email: "fred@fred.com",
        assistant: {
            name: "Brad",
            age: 38,
            email: "Brad@brad.com"
        }
    },
    classGrades: [99, 100, 89, 88, 95]
}

//1 Check if the class size is > 10
const checkClassSize = () => {
    if (cohortFour.classSize > 10) {
        return true + " The class is bigger than 10"
    } else {
        return false + " The class is smaller than 10"
    }
}
console.log(checkClassSize());

//2 Check if the instructor has completed more than 2 cohorts.
const checkCompletedClasses = () => {
    let classCount = 0;
    let moreThanTwo = false;
    for (let i = 0; i < cohortFour.instructor.completedCohortIds.length; i++) {
        classCount++;
    }
    if (classCount > 2) {
        moreThanTwo = true;
    }
    return moreThanTwo;
}
console.log(checkCompletedClasses());

//3 Create a function called changeAssistant that will change the name, age, and email of the assistant
const changeAssistant = () => {
    cohortFour.instructor.assistant.name = "Luke";
    cohortFour.instructor.assistant.age = 31;
    cohortFour.instructor.assistant.email = "luke@fakedomain.com";
}
changeAssistant();
console.log(cohortFour.instructor.assistant);

//4 Loop through the completedCohortIds array and check if Fred completed cohort 55
const checkForId55 = () => {
    let didComplete = false;
    cohortFour.instructor.completedCohortIds.forEach(element => {
        if (element == 55) {
            didComplete = true;
        }
    });
    return didComplete;
}
console.log(checkForId55());

//5 Loop through the classGrades and check if the average grade is > 90
const checkAverageGrade = () => {
    let classAverage = 0;
    let total = 0;
    let count = 0;
    cohortFour.classGrades.forEach(grade => {
        total += grade;
        count++;
    })
    classAverage = total/count;
    if (classAverage > 90) {
        return true;
    } else {
        return false;
    }
}
console.log(checkAverageGrade());




