import React from 'react';

const ContactItem = React.memo(({ icon: Icon, children }) => (
  <div className="contact-item" role="listitem">
    <Icon aria-hidden="true" />
    <span dangerouslySetInnerHTML={{ __html: children }} />
  </div>
));

ContactItem.displayName = 'ContactItem';

export default ContactItem; 