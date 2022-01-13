import React from 'react';

const Background = ({ children }) => {
    return (
        <body className="bg-app dark:bg-neutral-800 transition-all">
            {children}
        </body>
    )
}

export default Background;