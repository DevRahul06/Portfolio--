import note from "./src/assets/Project-image/Notekeeper.jpg"
import Photography from "./src/assets/Project-image/Photography-website.jpg"
import { IoLogoJavascript } from "react-icons/io5";
import {FaHtml5,FaCss3} from "react-icons/fa"

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
    }
];

export {projects};