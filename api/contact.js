import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { firstName, lastName, email, phone, requirements, formType, ...rest } = req.body;

    if (!email || !firstName) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    // Using Primary Account for Authentication (Aliases don't work for SMTP login)
    const AUTH_USER = String(process.env.EMAIL_USER || 'surbhi@truenorthae.com').trim();
    const AUTH_PASS = String(process.env.EMAIL_PASS || '').trim();

    const transporter = nodemailer.createTransport({
        host: 'smtp.hostinger.com',
        port: 465,
        secure: true,
        auth: {
            user: AUTH_USER,
            pass: AUTH_PASS
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    const mailOptions = {
        from: `"TrueNorth Website" <${AUTH_USER}>`,
        to: 'surbhi@truenorthae.com', // Sending to primary inbox
        replyTo: email,
        subject: `[${formType || 'Inquiry'}] ${firstName} ${lastName || ''}`,
        html: `
            <div style="font-family: Arial, sans-serif; padding: 30px; border: 1px solid #e4e4e7; border-radius: 12px; max-width: 600px;">
                <h2 style="color: #f97316;">New Lead Received</h2>
                <div style="margin-top: 20px; line-height: 1.6;">
                    <p><strong>Name:</strong> ${firstName} ${lastName || ''}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
                    <p><strong>Service/Source:</strong> ${formType || 'General Form'}</p>
                    <p><strong>Message:</strong><br/>${requirements || 'N/A'}</p>
                </div>
                ${Object.entries(rest).length > 0 ? `
                    <div style="margin-top: 20px; padding: 15px; background: #f9fafb; border-radius: 8px;">
                        <h4 style="margin: 0 0 10px;">Additional Details:</h4>
                        ${Object.entries(rest).map(([k, v]) => `<p style="margin: 4px 0;"><strong>${k}:</strong> ${v}</p>`).join('')}
                    </div>
                ` : ''}
            </div>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        return res.status(200).json({ success: true, message: 'Form submitted successfully' });
    } catch (error) {
        console.error('SMTP Error (Auth User):', error.message);
        return res.status(500).json({
            success: false,
            message: 'Authentication failed. Please use primary account credentials (not alias).',
            error: error.message
        });
    }
}
