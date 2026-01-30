import DocumentsIcon from './assets/icons/Documents.webp';
import ExplorerIcon from './assets/icons/Explorer-outline.webp';
import InfoIcon from './assets/icons/Info.webp';
import MailIcon from './assets/icons/Mail.webp';
import NotepadIcon from './assets/icons/Notepad.webp';

function Icons(){
    return(
        <div id="icons">
            <ul>
                <li><a className="link" href=""><img src= {InfoIcon} alt="" />About</a></li>
                <li><a className="link" href=""><img src={ExplorerIcon} alt="" />Links</a></li>
                <li><a className="link" href=""><img src={DocumentsIcon} alt="" />Projects</a></li>
                <li><a className="link" href=""><img src={NotepadIcon} alt="" />Resume</a></li>
                <li><a className="link" href=""><img src={MailIcon} alt="" />Contact</a></li>
            </ul>
        </div>
    );
}

export default Icons