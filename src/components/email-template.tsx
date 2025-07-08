import React from "react";

interface EmailTemplateProps {
  firstName: string;
  LastName: string;
  message: string;
  email: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  LastName,
  message,
  email,
}) => (
  <div>
    <p>You have received a new message from the contact form of NextGenAI Labs Website:</p>
    <p>
      <strong>Name:</strong> {firstName} {LastName}
      <br />
      <strong>Email:</strong> {email}
    </p>
    <p>
      <strong>Message:</strong>
      <br />
      {message}
    </p>
  </div>
);
export default EmailTemplate;
