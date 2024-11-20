import React from "react";
import MinutesEmoji from "./Minutes";

function Article({title, date, preview, minutes}) {
    return (
        <div id="article">
        <article>
            <h3>
                {title}
            </h3>
            <small>
                {date || "January 1, 1970"}
            </small>
            <p>
                {preview}
            </p>
            <p>
                <MinutesEmoji minutes={minutes} />
            </p>
        </article>
        </div>
    )
}

export default Article;