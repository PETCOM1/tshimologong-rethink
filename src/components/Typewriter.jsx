import React, { useState, useEffect } from 'react';

const Typewriter = ({ phrases, delay = 150, pause = 2000 }) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);

    // Typewriter effect logic
    useEffect(() => {
        if (subIndex === phrases[index].length + 1 && !reverse) {
            setReverse(true);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % phrases.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, reverse ? delay / 2 : (subIndex === phrases[index].length ? pause : delay));

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, phrases, delay, pause]);

    return (
        <span className="typewriter-container">
            {`${phrases[index].substring(0, subIndex)}`}
            <span className="typewriter-cursor"></span>
        </span>
    );
};

export default Typewriter;
