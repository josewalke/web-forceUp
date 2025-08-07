import React from 'react';

const ContactItem = React.memo(({ icon: Icon, children }) => (
  <div className="contact-item">
    <Icon />
    <span dangerouslySetInnerHTML={{ __html: children }} />
  </div>
));

ContactItem.displayName = 'ContactItem';

export default ContactItem; 