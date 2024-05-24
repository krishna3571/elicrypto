// AdsComponent.js
import React, { useEffect } from 'react';

const AdsComponent = ({
    className = '',
    style = { display: 'block' },
    client,
    slot,
    layout = '',
    layoutKey = '',
    format = 'auto',
    responsive = 'false',
    pageLevelAds = false,
    adTest,
    children,
    ...rest
}) => {
    useEffect(() => {
        const p = {};
        if (pageLevelAds) {
            p.google_ad_client = client;
            p.enable_page_level_ads = true;
        }

        try {
            if (typeof window !== 'undefined' && window.adsbygoogle) {
                // Check if the adsbygoogle script has already been loaded
                (window.adsbygoogle = window.adsbygoogle || []).push(p);
            } else {
                // Load the adsbygoogle script if not already loaded
                const script = document.createElement('script');
                script.async = true;
                script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
                document.head.appendChild(script);

                // Push the ads parameters after the script is loaded
                script.onload = function () {
                    (window.adsbygoogle = window.adsbygoogle || []).push(p);
                };
            }
        } catch (error) {
            console.error('Error pushing to adsbygoogle:', error);
        }
    }, [client, pageLevelAds]);

    return (
        <ins
            className={`adsbygoogle ${className}`}
            style={style}
            data-ad-client={client}
            data-ad-slot={slot}
            data-ad-layout={layout}
            data-ad-layout-key={layoutKey}
            data-ad-format={format}
            data-full-width-responsive={responsive}
            data-adtest={adTest}
            {...rest}
        >
            {children}
        </ins>
    );
};

export default AdsComponent;
