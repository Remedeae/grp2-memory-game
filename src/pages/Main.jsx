import "../components/Main.css";
import Cards from "../components/Cards.jsx";
import Score from "../components/Score.jsx";

function Main() {
    return (
        <>
            <div className="main">
                <div className="header">
                    <Score></Score>
                </div>
                <div className="cards">
                    <Cards></Cards>
                    <Cards></Cards>
                    <Cards></Cards>
                    <Cards></Cards>
                    <Cards></Cards>
                    <Cards></Cards>
                    <Cards></Cards>
                    <Cards></Cards>
                </div>

            </div>
        </>
    )

}

export default Main;