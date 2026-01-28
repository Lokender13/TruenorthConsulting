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

    if (!email || !firstName) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    // Clean credentials to ensure no invisible spaces
    const SMTP_USER = String(process.env.EMAIL_USER || '').trim();
    const SMTP_PASS = String(process.env.EMAIL_PASS || '').trim();
    const SMTP_HOST = String(process.env.EMAIL_HOST || 'smtp.hostinger.com').trim();

    // Use Port 465 (SSL) which is most stable for Hostinger
    const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: 465,
        secure: true,
        auth: {
            user: SMTP_USER,
            pass: SMTP_PASS
        },
        // Security bypass for Vercel Serverless
        tls: {
            rejectUnauthorized: false,
            minVersion: 'TLSv1.2'
        },
        debug: true, // Show detailed logs in Vercel
        logger: true
    });

    const mailOptions = {
        from: `"TrueNorth Inquiry" <${SMTP_USER}>`,
        to: 'contact@truenorthae.com',
        replyTo: email,
        subject: `[${formType || 'New Inquiry'}] ${firstName || ''} ${lastName || ''}`,
        html: `
            <div style="font-family: Arial, sans-serif; padding: 30px; border: 1px solid #eee; border-radius: 10px;">
                <h2 style="color: #f97316;">New Lead from TrueNorth Website</h2>
                <p><strong>Source:</strong> ${formType || 'Contact Form'}</p>
                <hr>
                <p><strong>Name:</strong> ${firstName} ${lastName || ''}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
                <p><strong>Details:</strong> ${requirements || 'N/A'}</p>
                ${Object.entries(rest).map(([k, v]) => `<p><strong>${k}:</strong> ${v}</p>`).join('')}
            </div>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        return res.status(200).json({ success: true });
    } catch (error) {
        console.error('Final SMTP Error Log:', error);
        return res.status(500).json({
            success: false,
            message: 'Authentication failed. Please verify Password in Vercel Settings.',
            error: error.message
        });
    }
}
