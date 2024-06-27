import note from "./src/assets/Project-image/Notekeeper.jpg"
import Photography from "./src/assets/Project-image/Photography-website.jpg"
import food from "./src/assets/Project-image/Food-website.png"

const projects = [
    {
        name:"Notekeeper",
        description:"A simple note taking app",
        stack: ['HTML', 'CSS', 'JavaScript', ],
        img: note,
        sourceCode:'https://github.com/DevRahul06/Notekeeper',
        livePreview:'https://devrahul06.github.io/Notekeeper/'
    },
    {
        name:"Photography_Website",
        description:"A Photography Portfolio",
        img: Photography,
        stack: ['HTML', 'CSS', 'JavaScript', ],
        sourceCode:'https://github.com/DevRahul06/Photography_Website',
        livePreview:'https://devrahul06.github.io/Photography_Website/'
    },
    {
        name:"Agency-website",
        description:"A simple Agency-website",
        stack: ['HTML', 'CSS', 'JavaScript', ],
        img: food,
        sourceCode:'https://github.com/DevRahul06/Agency-website',
        livePreview:'https://devrahul06.github.io/Notekeeper/'
    },
];

export {projects};