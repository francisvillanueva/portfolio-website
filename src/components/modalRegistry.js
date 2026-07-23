import About from "./modals/About";
import Links from "./modals/Links";
import Projects from "./modals/Projects";
import Resume from "./modals/Resume";
import Contact from "./modals/Contact";
import Builder from "./modals/PCBuilder";

const modalRegistry = {
    info: About,
    links: Links,
    projects: Projects,
    resume: Resume,
    builder: Builder,
    contact: Contact,
};

export default modalRegistry;