import { useState } from "react";
import NavTabs from "./navbar";
import AboutMe from "./aboutMe";
import Resume from "./pages/resume";
import FeedBack from "./pages/feedBack";
import Footer from "./footer";

export default function PortfolioContainer() {
    const styles = {};

    const [currentPage, setCurrentPage] = useState("Home");

    const renderPage = () => {
        switch (currentPage) {
            case "Home":
                return <AboutMe />;
            case "Resume":
                return <Resume />;
            case "FeedBack":
                return <FeedBack />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <div>
                <nav>
                    <div>
                        <NavTabs
                            currentPage={currentPage}
                            handlePageChange={handlePageChange}
                        />
                    </div>
                </nav>
            </div>
            <main>{renderPage()}</main>
            <Footer />
        </div>
    );
}
