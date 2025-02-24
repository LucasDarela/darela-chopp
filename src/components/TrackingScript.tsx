"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer: any[];
  }
}

export const TrackingScripts = () => {
  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (consent !== "accepted") return;

    // ✅ Google Analytics
    const gaScript = document.createElement("script");
    gaScript.async = true;
    gaScript.src = `https://www.googletagmanager.com/gtag/js?id=G-SEU_ID_AQUI`;
    document.head.appendChild(gaScript);

    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    gtag("js", new Date());
    gtag("config", "G-SEU_ID_AQUI");

    // ✅ Facebook Pixel
    const fbScript = document.createElement("script");
    fbScript.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', 'SEU_PIXEL_ID');
      fbq('track', 'PageView');
    `;
    document.head.appendChild(fbScript);
  }, []);

  return null;
};