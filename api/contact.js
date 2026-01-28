import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const {
        firstName,
        lastName,
        email,
        phone,
        requirements,
        formType,
        ...rest
    } = req.body;

    // Validate basic fields
    if (!email || !firstName) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    // Configure the transporter for Hostinger SMTP
    // Settings for Hostinger:
    // Host: smtp.hostinger.com
    // Port: 465 (SSL)
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST || 'smtp.hostinger.com',
        port: parseInt(process.env.EMAIL_PORT || '465'),
        secure: true, // Use SSL for port 465
        auth: {
            user: process.env.EMAIL_USER, // e.g. contact@truenorthae.com
            pass: process.env.EMAIL_PASS  // Your Hostinger email password
        }
    });

    // Formatting any additional data passed in the body
    const additionalData = Object.entries(rest)
        .map(([key, value]) => `<tr><td style="padding: 10px; font-weight: bold; border: 1px solid #e4e4e7;">${key}:</td><td style="padding: 10px; border: 1px solid #e4e4e7;">${value}</td></tr>`)
        .join('');

    // Email content construction
    const mailOptions = {
        from: `"TrueNorth Website" <${process.env.EMAIL_USER}>`,
        to: 'contact@truenorthae.com',
        replyTo: email,
        subject: `[${formType || 'New Inquiry'}] ${firstName || ''} ${lastName || ''}`,
        html: `
            <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding: 40px; color: #18181b; background-color: #fcfcfc; border: 1px solid #e4e4e7; border-radius: 16px; max-width: 600px; margin: 0 auto;">
                <div style="text-align: center; margin-bottom: 30px;">
                    <h1 style="color: #f97316; font-size: 28px; font-weight: 800; letter-spacing: -0.025em; margin: 0;">TrueNorth Consulting</h1>
                    <p style="color: #71717a; font-size: 14px; margin-top: 8px; text-transform: uppercase;">New Lead Received</p>
                </div>
                
                <div style="background-color: #ffffff; padding: 30px; border-radius: 12px; border: 1px solid #f4f4f5; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
                    <h2 style="font-size: 18px; font-weight: 700; margin-bottom: 20px; border-bottom: 1px solid #f4f4f5; padding-bottom: 10px;">Submission Details</h2>
                    
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 12px 0; font-weight: 600; color: #71717a; font-size: 13px; text-transform: uppercase;">Form Type:</td>
                            <td style="padding: 12px 0; font-weight: 700; color: #18181b;">${formType || 'General Inquiry'}</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 0; font-weight: 600; color: #71717a; font-size: 13px; text-transform: uppercase;">Name:</td>
                            <td style="padding: 12px 0; font-weight: 700; color: #18181b;">${firstName || ''} ${lastName || ''}</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 0; font-weight: 600; color: #71717a; font-size: 13px; text-transform: uppercase;">Email:</td>
                            <td style="padding: 12px 0; font-weight: 700; color: #18181b;"><a href="mailto:${email}" style="color: #f97316; text-decoration: none;">${email}</a></td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 0; font-weight: 600; color: #71717a; font-size: 13px; text-transform: uppercase;">Phone:</td>
                            <td style="padding: 12px 0; font-weight: 700; color: #18181b;">${phone || 'Not provided'}</td>
                        </tr>
                    </table>

                    ${requirements ? `
                    <div style="margin-top: 25px; padding-top: 20px; border-top: 1px solid #f4f4f5;">
                        <h3 style="font-size: 13px; font-weight: 600; color: #71717a; text-transform: uppercase; margin-bottom: 10px;">Message / Requirements:</h3>
                        <p style="background-color: #f9fafb; padding: 15px; border-radius: 8px; font-size: 15px; line-height: 1.6; color: #3f3f46; margin: 0;">${requirements}</p>
                    </div>
                    ` : ''}

                    ${additionalData ? `
                    <div style="margin-top: 25px; padding-top: 20px; border-top: 1px solid #f4f4f5;">
                        <h3 style="font-size: 13px; font-weight: 600; color: #71717a; text-transform: uppercase; margin-bottom: 10px;">Additional Info:</h3>
                        <table style="width: 100%; border-collapse: collapse;">
                            ${additionalData}
                        </table>
                    </div>
                    ` : ''}
                </div>
                
                <div style="text-align: center; margin-top: 30px;">
                    <p style="font-size: 12px; color: #a1a1aa; margin: 0;">This inquiry was sent from the TrueNorth Consulting official website.</p>
                </div>
            </div>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        return res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        console.error('Nodemailer Error:', error);
        return res.status(500).json({
            success: false,
            message: 'Failed to send email. Check SMTP settings.',
            error: error.message
        });
    }
}
