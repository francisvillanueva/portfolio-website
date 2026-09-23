import { useState} from 'react';

import DocumentsIcon from '../assets/icons/Documents.webp';
import ExplorerIcon from '../assets/icons/Explorer-outline.webp';
import InfoIcon from '../assets/icons/Info.webp';
import MailIcon from '../assets/icons/Mail.webp';
import NotepadIcon from '../assets/icons/Notepad.webp';
import PCBuilderIcon from '../assets/icons/PCBuilder.webp';

import modalRegistry from "./modalRegistry";
import WeatherWidget from "./widgets/weather/WeatherWidget";

function Icons() {
    const [activeModal, setActiveModal] = useState("info");

    const openModal = (name) => setActiveModal(name);
    const closeModal = () => setActiveModal(null);

    const ActiveModal = modalRegistry[activeModal];

    return(
        <div id="icons">
            {/* Desktop: original flat list */}
            <ul className="desktop-icon-list">
                <li><button className="icon-trigger" onClick={() => openModal('info')}><img src={InfoIcon} alt="info" />About</button></li>
                <li><button className="icon-trigger" onClick={() => openModal('links')}><img src={ExplorerIcon} alt="links" />Links</button></li>
                <li><button className="icon-trigger" onClick={() => openModal('projects')}><img src={DocumentsIcon} alt="projects" />Projects</button></li>
                <li><button className="icon-trigger" onClick={() => openModal('resume')}><img src={NotepadIcon} alt="resume" />Resume</button></li>
                <li><button className="icon-trigger" onClick={() => openModal('builder')}><img src={PCBuilderIcon} alt="PC Builder" />PC Builder</button></li>
            </ul>

            {/* Mobile: tiered layout */}
            <div className="mobile-home">
                <div className="floating-tier">

                    <WeatherWidget />

                    <div className="WidgetContainers">
                        <div className="app-badge-row">
                            <div className="app-badge-item">
                                <button className="app-badge" onClick={() => openModal('info')}>
                                    <img src={InfoIcon} alt="About" />
                                    <span className="app-label">About</span>
                                </button>
                            </div>

                            <div className="app-badge-item">
                                <button className="app-badge" onClick={() => openModal('builder')}>
                                    <img src={PCBuilderIcon} alt="PC Builder" />
                                    <span className="app-label">PC Builder</span>
                                </button>
                            </div>
                        </div>

                        <div className="taskbar-tier">
                            <button className="icon-trigger" onClick={() => openModal('links')}>
                                <img src={ExplorerIcon} alt="Links" />Links
                            </button>
                            <button className="icon-trigger" onClick={() => openModal('projects')}>
                                <img src={DocumentsIcon} alt="Projects" />Projects
                            </button>
                            <button className="icon-trigger" onClick={() => openModal('resume')}>
                                <img src={NotepadIcon} alt="Resume" />Resume
                            </button>
                            <button className="icon-trigger" onClick={() => openModal('contact')}>
                                <img src={MailIcon} alt="Contact" />Contact
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal Rendering */}
            {ActiveModal && (
                <ActiveModal
                    show={true}
                    onClose={closeModal}
                />
            )}
        </div>
    );
}

export default Icons