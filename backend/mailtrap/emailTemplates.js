export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Email Verification</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
      line-height: 1.6;
      color: #333;
    }
    .container {
      max-width: 600px;
      margin: 20px auto;
      padding: 20px;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
    .header {
      background-color: #0056b3;
      padding: 20px;
      text-align: center;
      border-radius: 8px 8px 0 0;
      color: white;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
      font-weight: bold;
    }
    .content {
      padding: 20px;
    }
    .verification-code {
      font-size: 36px;
      font-weight: bold;
      color: #0056b3;
      text-align: center;
      letter-spacing: 5px;
      margin: 30px 0;
    }
    .footer {
      text-align: center;
      color: #888;
      font-size: 12px;
      padding-top: 10px;
    }
    .button {
      display: inline-block;
      background-color: #0056b3;
      color: white;
      padding: 10px 20px;
      text-decoration: none;
      border-radius: 4px;
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Email Verification</h1>
    </div>
    <div class="content">
      <p>Dear User,</p>
      <p>We are excited to welcome you to our platform! To complete your registration, please verify your email address by entering the following code on the verification page:</p>
      <div class="verification-code">{verificationCode}</div>
      <p>This verification code will expire in <strong>24 hours</strong> for your security.</p>
      <p>If you did not create this account, you can safely disregard this email.</p>
      <p>Best regards,<br>Your Company Name</p>
      <p>If you need assistance, please contact our support team.</p>
    </div>
    <div class="footer">
      <p>This is an automated message. Please do not reply.</p>
      <p>© 2024 Your Company Name. All rights reserved.</p>
    </div>
  </div>
</body>
</html>

`;

export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Reset Successful</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
      line-height: 1.6;
      color: #333;
    }
    .container {
      max-width: 600px;
      margin: 20px auto;
      padding: 20px;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
    .header {
      background-color: #0056b3;
      padding: 20px;
      text-align: center;
      border-radius: 8px 8px 0 0;
      color: white;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
      font-weight: bold;
    }
    .content {
      padding: 20px;
    }
    .verification-code {
      font-size: 36px;
      font-weight: bold;
      color: #0056b3;
      text-align: center;
      letter-spacing: 5px;
      margin: 30px 0;
    }
    .footer {
      text-align: center;
      color: #888;
      font-size: 12px;
      padding-top: 10px;
    }
    .checkmark {
      background-color: #4CAF50;
      color: white;
      width: 50px;
      height: 50px;
      line-height: 50px;
      border-radius: 50%;
      display: inline-block;
      font-size: 30px;
      margin: 30px 0;
    }
    .button {
      display: inline-block;
      background-color: #0056b3;
      color: white;
      padding: 10px 20px;
      text-decoration: none;
      border-radius: 4px;
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Password Reset Successful</h1>
    </div>
    <div class="content">
      <p>Hello,</p>
      <p>We're writing to confirm that your password has been successfully reset.</p>
      <div style="text-align: center;">
        <div class="checkmark">✓</div>
      </div>
      <p>If you did not initiate this password reset, please contact our support team immediately.</p>
      <p>For security reasons, we recommend the following:</p>
      <ul>
        <li>Use a strong, unique password.</li>
        <li>Enable two-factor authentication if available.</li>
        <li>Avoid using the same password across multiple sites.</li>
      </ul>
      <p>Thank you for helping us keep your account secure.</p>
      <p>Best regards,<br>Your App Team</p>
    </div>
    <div class="footer">
      <p>This is an automated message. Please do not reply to this email.</p>
      <p>© 2024 Your Company Name. All rights reserved.</p>
    </div>
  </div>
</body>
</html>

`;

export const PASSWORD_RESET_REQUEST_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset Your Password</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
      line-height: 1.6;
      color: #333;
    }
    .container {
      max-width: 600px;
      margin: 20px auto;
      padding: 20px;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
    .header {
      background-color: #0056b3;
      padding: 20px;
      text-align: center;
      border-radius: 8px 8px 0 0;
      color: white;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
      font-weight: bold;
    }
    .content {
      padding: 20px;
    }
    .verification-code {
      font-size: 36px;
      font-weight: bold;
      color: #0056b3;
      text-align: center;
      letter-spacing: 5px;
      margin: 30px 0;
    }
    .footer {
      text-align: center;
      color: #888;
      font-size: 12px;
      padding-top: 10px;
    }
    .button {
      display: inline-block;
      background-color: #0056b3;
      color: white !important;
      padding: 10px 20px;
      font-weight:800;
      text-decoration: none;
      border-radius: 4px;
      margin-top: 20px;
    }
  </style>
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Password Reset Request</h1>
    </div>
    <div class="content">
      <p>Dear User,</p>
      <p>We received a request to reset the password for your account. If you did not initiate this request, please disregard this email.</p>
      <p>To reset your password, please click the button below:</p>
      <div style="text-align: center; margin: 30px 0;">
        <a href="{resetURL}" class="button">Reset Password</a>
      </div>
      <p>This password reset link will expire in <strong>10 minutes</strong> for your security.</p>
      <p>If you require further assistance, feel free to contact our support team.</p>
      <p>Best regards,<br>Your Company Team</p>
    </div>
    <div class="footer">
      <p>This is an automated message. Please do not reply.</p>
      <p>© 2024 Your Company Name. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`;