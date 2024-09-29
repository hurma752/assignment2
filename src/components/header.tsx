import Link from "next/link";
export default function Header(){
    return(
        <div className="header">
        <ul className="header-buttons">
            <div className="name-logo"><li >HZ</li></div>
            <div className="nav-links">
        <Link href="/">
            <li>Home</li>
            </Link>
            <Link href="projects">
            <li>Projects</li>
            </Link>
            <Link href="services">
            <li>Services</li>
            </Link>
            <Link href="about">
            <li>About</li>
            </Link>
            </div> 
            <Link href="contact-us">
            <button className="Contact-us-Button">Contact Us</button>
            </Link>
        </ul>
    </div>
    );
}