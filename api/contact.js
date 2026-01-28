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

    const SMTP_USER = String(process.env.EMAIL_USER || 'contact@truenorthae.com').trim();
    const SMTP_PASS = String(process.env.EMAIL_PASS || '').trim();

    // Use a more standard configuration that often works better with Hostinger's newer security
    const transporter = nodemailer.createTransport({
        host: 'smtp.hostinger.com',
        port: 465,
        secure: true, // SSL
        auth: {
            user: SMTP_USER,
            pass: SMTP_PASS
        },
        tls: {
            // Important for Vercel/Hostinger handshake
            rejectUnauthorized: false,
            minVersion: 'TLSv1.2'
        },
        // Faster timeout to prevent Vercel from hanging
        connectionTimeout: 5000,
        greetingTimeout: 5000,
        socketTimeout: 5000
    });

    const mailOptions = {
        from: `"TrueNorth Website" <${SMTP_USER}>`,
        to: 'contact@truenorthae.com',
        replyTo: email,
        subject: `[${formType || 'Inquiry'}] ${firstName} ${lastName || ''}`,
        html: `
            <div style="font-family: sans-serif; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
                <h2 style="color: #f97316;">New Lead: ${firstName} ${lastName || ''}</h2>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
                <p><strong>Form:</strong> ${formType || 'General'}</p>
                <p><strong>Message:</strong> ${requirements || 'No message'}</p>
                ${Object.entries(rest).map(([k, v]) => `<p><strong>${k}:</strong> ${v}</p>`).join('')}
            </div>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        return res.status(200).json({ success: true, message: 'Sent' });
    } catch (error) {
        console.error('SMTP Error:', error.message);

        // Final fallback: If 465 fails, some environments handle 587 better
        return res.status(500).json({
            success: false,
            message: 'Authentication failed. verify SMTP is enabled in Hostinger hPanel.',
            error: error.message
        });
    }
}
