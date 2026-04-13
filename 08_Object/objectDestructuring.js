// Destructuring Assignment with Objects

const course = {
    title: "JavaScript Refresher",
    instructor: "Saurabh",
    duration: "3 hours",
    level: "Beginner"
}

// Destructuring assignment allows you to unpack properties from objects into distinct variables.
const { title, instructor, duration, level } = course;
console.log("Course Title:", title); // Output: Course Title: JavaScript Refresher because it extracts the title property from the course object and assigns it to a variable named title
console.log("Instructor:", instructor);

// You can also assign new variable names while destructuring
const { title: courseTitle, instructor: courseInstructor } = course;
console.log("Course Title with new variable name:", courseTitle);