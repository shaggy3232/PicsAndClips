import React, { useState, forwardRef } from 'react';
import Iframe from 'react-iframe';

const GoHighlevelContactForm = forwardRef((props, ref)=> {
  

    const [isIframeVisible, setIsIframeVisible] = useState(false);

    const handleOpenForm = () => {
      setIsIframeVisible(true);
    };
  
    const handleCloseForm = () => {
      setIsIframeVisible(false);
    };
  
    return (
      <div ref={ref}>
        <h2>Lets Connect</h2>
          <div className="iframe-container">
            <iframe
              src="https://link.youshouldgetpluggedin.io/widget/form/l08ibkNnclakXjcr5mGd"
              style={{ width: '100%', height: '500px', border: 'none', borderRadius: '4px' }}
              id="popup-l08ibkNnclakXjcr5mGd"
              title="Main Website Contact Form"
              data-layout="{'id':'POPUP'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Main Website Contact Form"
              data-height="340"
              data-layout-iframe-id="popup-l08ibkNnclakXjcr5mGd"
              data-form-id="l08ibkNnclakXjcr5mGd"
              onLoad={() => setIsIframeVisible(true)}
            />
          </div>
        <script src="https://link.youshouldgetpluggedin.io/js/form_embed.js"></script>
      </div>
    );
  });
export default GoHighlevelContactForm;
