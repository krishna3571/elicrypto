import React, { useEffect } from 'react';
const Favicon = ({ url }) => {
    useEffect(() => {
        const link = document.querySelector("link[rel*='icon']") || document.createElement('link'); link.type = 'image/x-icon';
        link.rel = 'shortcut icon'; link.href = url;
        document.getElementsByTagName('head')[0].appendChild(link);
    }, [url]);

    return null;
};
export default Favicon;