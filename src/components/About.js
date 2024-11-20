import React from "react";

function About({about, image}) {
    return (
        <div id = "about">
        <aside>
            <img src={image
            || "https://via.placeholder.com/215" }
            alt="blog logo" />

            <p>
                {about}
            </p>
        </aside>
        </div>
    )
}
export default About;