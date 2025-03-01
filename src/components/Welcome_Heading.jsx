import { Link } from "react-router-dom";

const Welcome_Heading = ({ heading, sub_text, btn_link, btn_text }) => {
    return (
        <div className="p-2 m-2">
            <div className="p-2 m-1 justify-content-center align-item-center text-center">
                <h1>{heading}</h1>
                <div className="p-2 m-1 col-4 mx-auto">
                    <hr style={{ height: "4px", backgroundColor: "white", border: "none" }} />
                </div>
                <p>{sub_text}</p>
                <Link className="px-4 btn btn-success" to={btn_link}>
                    {btn_text}
                </Link>
            </div>
        </div>
    );
};

export default Welcome_Heading;