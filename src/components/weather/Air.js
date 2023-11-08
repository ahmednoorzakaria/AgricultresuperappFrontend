import React, { useEffect } from 'react';

const Air = () => {
  useEffect(() => {
    // This function is used to load and render the Tomorrow.io widget
    function loadTomorrowWidget() {
      const id = 'tomorrow-sdk';

      if (document.getElementById(id)) {
        if (window.__TOMORROW__) {
          window.__TOMORROW__.renderWidget();
        }
        return;
      }

      const script = document.createElement('script');
      script.id = id;
      script.src = 'https://www.tomorrow.io/v1/widget/sdk/sdk.bundle.min.js';

      script.onload = function () {
        if (window.__TOMORROW__) {
          window.__TOMORROW__.renderWidget();
        }
      };

      document.getElementsByTagName('script')[0].parentNode.insertBefore(script, document.getElementsByTagName('script')[0]);
    }

    loadTomorrowWidget();
  }, []);

  return (
    <div className="tomorrow"
      data-location-id="064845"
      data-language="EN"
      data-unit-system="METRIC"
      data-skin="light"
      data-widget-type="aqiPollutant"
      style={{ paddingBottom: '22px', position: 'relative' }}
    >
      <a
        href="https://www.tomorrow.io/weather-api/"
        rel="nofollow noopener noreferrer"
        target="_blank"
        style={{ position: 'absolute', bottom: 0, transform: 'translateX(-50%)', left: '50%' }}
      >
        <img
          alt="Powered by the Tomorrow.io Weather API"
          src="https://weather-website-client.tomorrow.io/img/powered-by.svg"
          width="250"
          height="18"
        />
      </a>
    </div>
  );
};

export default Air;
