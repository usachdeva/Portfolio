import { FaStackOverflow, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
    const styles = {
        footer: {
            display: "flex",
            justifyContent: "center",
            padding: "20px",
            backgroundColor: "#333",
            color: "#fff",
            positon: "fixed",
        },
        icon: {
            margin: "0 10px",
            fontSize: "24px",
            color: "#fff",
            textDecoration: "none",
        },
    };

    return (
        <footer className="fixed-bottom" style={styles.footer}>
            <a
                href="https://github.com/usachdeva"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.icon}
            >
                <FaGithub />
            </a>
            <a
                href="https://www.linkedin.com/in/udit-sachdeva-90a324179/"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.icon}
            >
                <FaLinkedin />
            </a>
            <a
                href="https://stackoverflow.com/users/23236583/udit-sachdeva"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.icon}
            >
                <FaStackOverflow />
            </a>
        </footer>
    );
}
