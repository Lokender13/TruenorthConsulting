import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { firstName, lastName, email, phone, requirements, formType, ...rest } = req.body;

    // Clean data
    const SMTP_USER = String(process.env.EMAIL_USER || 'surabhi@truenorthae.com').trim();
    const SMTP_PASS = String(process.env.EMAIL_PASS || '').trim();

    // Debugging transporter
    const transporter = nodemailer.createTransport({
        host: 'smtp.hostinger.com',
        port: 465, // Try 465 first
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
            to: 'surabhi@truenorthae.com',
            replyTo: email,
            subject: `Website Inquiry: ${firstName}`,
            text: `Name: ${firstName}\nEmail: ${email}\nPhone: ${phone}\n\nMessage: ${requirements}`,
            html: `<h3>New Lead</h3><p><strong>Name:</strong> ${firstName}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${requirements}</p>`
        });

        return res.status(200).json({ success: true });
    } catch (error) {
        // Log EXACT error to Vercel console
        console.error('CRITICAL SMTP ERROR:', error);

        return res.status(500).json({
            success: false,
            message: 'Delivery Failed',
            details: error.message,
            code: error.code // This will tell if it's AUTH, CONN, etc.
        });
    }
}
