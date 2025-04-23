const styles = {
    resumePage: {
        padding: "20px",
        minHeight: "100vh",
    },
    resumeLink: {
        display: "block",
        marginTop: "20px",
        padding: "10px 20px",
        backgroundColor: "#ff8633",
        color: "white",
        textDecoration: "none",
        borderRadius: "5px",
        textAlign: "center",
        maxWidth: "200px",
        margin: "50px auto",
    },
    heading: {
        marginBottom: "20px",
        color: "#333",
    },
};

export default function Resume() {
    return (
        <div style={styles.resumePage}>
            <h2 className="text-start" style={styles.heading}>
                MERN Stack Frameworks
            </h2>
            <p className="text-start">
                <strong>Frameworks: </strong>
                Spring-Boot , Spring Framework( including AOP, Transactions,
                Security, JPA )Bootstrap, Tailwind, Express , Materialize css
            </p>
            <p className="text-start">
                <strong>Web Services: </strong>
                RESTful Services
            </p>
            <p className="text-start">
                <strong>DataBase: </strong>
                MySQL, PostgreSQL, MongoDB
            </p>
            <p className="text-start">
                <strong>Latest Tools: </strong>
                Maven, Git, GitBash, JIRA, IntelliJ, Visual Studio Code,
                Insomnia, Postman, Figma, Notion
            </p>
            <a
                href="https://www.canva.com/design/DAGEkrrZfuw/VykwZC9Rb_z6iInNoilLLw/edit"
                download
                style={styles.resumeLink}
            >
                Download Resume
            </a>
        </div>
    );
}
