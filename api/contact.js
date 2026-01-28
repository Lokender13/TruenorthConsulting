import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { firstName, lastName, email, phone, requirements, formType, ...rest } = req.body;

    if (!email || !firstName) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    // Explicitly trim environment variables to prevent hidden character issues
    const SMTP_USER = String(process.env.EMAIL_USER || '').trim();
    const SMTP_PASS = String(process.env.EMAIL_PASS || '').trim();

    // The most reliable config for Hostinger + Vercel
    const transporter = nodemailer.createTransport({
        host: 'smtp.hostinger.com',
        port: 465,
        secure: true,
        pool: true, // Crucial for Vercel serverless to maintain connection
        auth: {
            user: SMTP_USER,
            pass: SMTP_PASS
        },
        tls: {
            // This allows the connection to proceed even if Vercel has security interceptors
            rejectUnauthorized: false
        }
    });

    const mailOptions = {
        from: `"TrueNorth Website" <${SMTP_USER}>`,
        to: 'contact@truenorthae.com',
        replyTo: email,
        subject: `[${formType || 'New Inquiry'}] ${firstName} ${lastName || ''}`,
        html: `
            <div style="font-family: Arial, sans-serif; padding: 25px; border: 1px solid #ddd; background: #fff;">
                <h2 style="color: #f97316; margin: 0 auto 15px;">New Inquiry Received</h2>
                <div style="border-top: 2px solid #f97316; padding-top: 15px;">
                    <p><strong>From:</strong> ${firstName} ${lastName || ''}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
                    <p><strong>Form Type:</strong> ${formType || 'Contact Form'}</p>
                    <p><strong>Message:</strong><br/>${requirements || 'No requirements specified.'}</p>
                    ${Object.entries(rest).length > 0 ? `
                        <div style="background: #f4f4f5; padding: 10px; border-radius: 5px; margin-top: 15px;">
                            ${Object.entries(rest).map(([k, v]) => `<p><strong>${k}:</strong> ${v}</p>`).join('')}
                        </div>
                    ` : ''}
                </div>
            </div>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        return res.status(200).json({ success: true });
    } catch (error) {
        console.error('Nodemailer Error Details:', error);
        return res.status(500).json({
            success: false,
            message: 'Email failed to send. Check logs.',
            error: error.message
        });
    }
}
