import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { firstName, email, phone, requirements, formType } = req.body;

    const SMTP_USER = String(process.env.EMAIL_USER || '').trim();
    const SMTP_PASS = String(process.env.EMAIL_PASS || '').trim();

    // Configuration for Port 465 which is usually best for Hostinger
    const transporter = nodemailer.createTransport({
        host: 'smtp.hostinger.com',
        port: 465,
        secure: true,
        auth: {
            user: SMTP_USER,
            pass: SMTP_PASS
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    try {
        await transporter.sendMail({
            from: `"TrueNorth Website" <${SMTP_USER}>`,
            to: 'contact@truenorthae.com',
            replyTo: email,
            subject: `[${formType || 'Lead'}] ${firstName}`,
            html: `
                <div style="font-family: Arial; padding: 20px;">
                    <h3>New Inquiry Received</h3>
                    <p><strong>Name:</strong> ${firstName}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
                    <p><strong>Source:</strong> ${formType}</p>
                    <p><strong>Message:</strong> ${requirements || 'N/A'}</p>
                </div>
            `
        });
        return res.status(200).json({ success: true });
    } catch (error) {
        console.error('Final attempt failed:', error.message);
        return res.status(500).json({
            success: false,
            message: 'Email delivery failed. Verify Hostinger SMTP permissions.',
            error: error.message
        });
    }
}
