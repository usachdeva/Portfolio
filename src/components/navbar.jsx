export default function NavTabs({ currentPage, handlePageChange }) {
    const styles = {
        a: {
            color: "black",
            textDecoration: "none",
        },
    };

    // Here we are using object destructuring assignment to pluck off our variables from the props object
    // We assign them to their own variable names

    return (
        <div id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a
                        style={styles.a}
                        href="#AboutMe"
                        onClick={() => handlePageChange("AboutMe")}
                        // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                        // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                        className={
                            currentPage === "About Me"
                                ? "nav-link active"
                                : "nav-link"
                        }
                    >
                        AboutMe
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        style={styles.a}
                        href="#Experience"
                        onClick={() => handlePageChange("Experience")}
                        // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                        className={
                            currentPage === "Experience"
                                ? "nav-link active"
                                : "nav-link"
                        }
                    >
                        Experience
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        style={styles.a}
                        href="#Resume"
                        onClick={() => handlePageChange("Resume")}
                        // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                        className={
                            currentPage === "Resume"
                                ? "nav-link active"
                                : "nav-link"
                        }
                    >
                        Resume
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        style={styles.a}
                        href="#Contact"
                        onClick={() => handlePageChange("Contact")}
                        // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                        className={
                            currentPage === "Contact"
                                ? "nav-link active"
                                : "nav-link"
                        }
                    >
                        Contact
                    </a>
                </li>
            </ul>
        </div>
    );
}
