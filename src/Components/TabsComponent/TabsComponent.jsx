import React from 'react';
import './TabsComponent.scss'; // Import the modified SCSS file

const TabsComponent = () => {
  return (
    <main className="tabs-component-tabs" mv-app="tabs" mv-bar="no-login" mv-storage="https://github.com/DmitrySharabin/mavo-tabs-widget">
      <h2 property="headline"></h2>
      <section className="tabs-component-tabs-container" style={{ '--count': '[count(tab)]' }}>
        {/* Add the content for tabs here */}
      </section>
    </main>
  );
};

const TabComponent = () => {
  return (
    <details property="tab" mv-multiple open="[open]" mv-action="set(open.$all, false), set(open, true)">
      <meta property="open" />

      <summary className="tabs-component-tab-title" property="title">
        <img className="tabs-component-icon" src="[image]" alt="Icon" />
        <span property="text"></span>
      </summary>

      <section className="tabs-component-tab-content" property="content">
        <h3 property="headline"></h3>
        <img property="image" src="" alt="Illustration for [headline]" />
        <p property="text"></p>
        <a property="url" href="#">
          <span property="destination"></span>
        </a>
      </section>
    </details>
  );
};

export { TabsComponent, TabComponent };
