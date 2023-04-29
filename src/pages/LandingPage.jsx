import { StrictMode } from "react"
import TopBar from "../layout/landing-page/TopBar"
import LandingPageMainContainer from "../components/LandingPage/LandingPageMainContainer"

const LandingPage = (props) => {
    return <StrictMode>
        <div>
            <TopBar />
            <LandingPageMainContainer />
        </div>
    </StrictMode>
}

export default LandingPage

