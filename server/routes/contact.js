import { Router } from 'express'
import nodemailer from 'nodemailer'
import Contact from '../models/Contact.js'

const router = Router()

/**
 * Helper function to send email notification via Gmail SMTP
 */
const sendEmailNotification = async (enquiry) => {
  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, SMTP_TO } = process.env

  // Skip mail notification if SMTP credentials are still default or empty
  if (!SMTP_USER || SMTP_USER === 'your-email@gmail.com' || !SMTP_PASS || SMTP_PASS === 'your-gmail-app-password') {
    console.warn('SMTP credentials are not configured in .env. Skipping email notification.')
    return false
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(SMTP_PORT || '465', 10),
    secure: SMTP_SECURE === 'true' || SMTP_PORT === '465',
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  })

  const mailOptions = {
    from: `"Masar NDT Website" <${SMTP_USER}>`,
    to: SMTP_TO || SMTP_USER,
    replyTo: enquiry.email,
    subject: `New Contact Enquiry from ${enquiry.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 5px;">
        <h2 style="color: #ea580c; border-bottom: 2px solid #ea580c; padding-bottom: 10px; margin-top: 0;">New Contact Enquiry Received</h2>
        <p>A new visitor has submitted an enquiry via the contact page form on the Masar NDT website.</p>
        
        <table style="border-collapse: collapse; width: 100%; margin: 20px 0;">
          <tr style="background-color: #f9fafb;">
            <td style="border: 1px solid #e5e7eb; padding: 10px; font-weight: bold; width: 150px;">Name</td>
            <td style="border: 1px solid #e5e7eb; padding: 10px;">${enquiry.name}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #e5e7eb; padding: 10px; font-weight: bold;">Email</td>
            <td style="border: 1px solid #e5e7eb; padding: 10px;"><a href="mailto:${enquiry.email}" style="color: #ea580c; text-decoration: none;">${enquiry.email}</a></td>
          </tr>
          <tr style="background-color: #f9fafb;">
            <td style="border: 1px solid #e5e7eb; padding: 10px; font-weight: bold;">Mobile</td>
            <td style="border: 1px solid #e5e7eb; padding: 10px;">${enquiry.mobile || 'N/A'}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #e5e7eb; padding: 10px; font-weight: bold;">Company</td>
            <td style="border: 1px solid #e5e7eb; padding: 10px;">${enquiry.companyName || 'N/A'}</td>
          </tr>
          <tr style="background-color: #f9fafb;">
            <td style="border: 1px solid #e5e7eb; padding: 10px; font-weight: bold;">Designation</td>
            <td style="border: 1px solid #e5e7eb; padding: 10px;">${enquiry.designation || 'N/A'}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #e5e7eb; padding: 10px; font-weight: bold;">Message</td>
            <td style="border: 1px solid #e5e7eb; padding: 10px; white-space: pre-wrap;">${enquiry.message}</td>
          </tr>
        </table>
        
        <p style="font-size: 11px; color: #9ca3af; margin-top: 30px; text-align: center; border-top: 1px solid #e5e7eb; padding-top: 10px;">
          This email was generated automatically by the Masar NDT backend API.
        </p>
      </div>
    `,
  }

  await transporter.sendMail(mailOptions)
  return true
}

// POST /api/contact — submit a new enquiry
router.post('/', async (req, res) => {
  try {
    const { name, email, mobile, companyName, designation, message } = req.body

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Name, email and message are required.' })
    }

    const contact = await Contact.create({
      name,
      email,
      mobile,
      companyName,
      designation,
      message,
    })

    // Trigger email notification in the background
    sendEmailNotification(contact)
      .then((sent) => {
        if (sent) {
          console.log(`[SMTP] Email notification sent successfully for enquiry ID: ${contact._id}`)
        }
      })
      .catch((mailErr) => {
        console.error(`[SMTP] Failed to send email notification for enquiry ID ${contact._id}:`, mailErr.message)
      })

    res.status(201).json({ message: 'Enquiry submitted successfully.', id: contact._id })
  } catch (err) {
    console.error('Contact submission error:', err)
    res.status(500).json({ message: 'Unable to submit enquiry right now. Please try again later.' })
  }
})

// GET /api/contact — list submissions (intended for internal/admin use)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 }).limit(200)
    res.json(contacts)
  } catch (err) {
    console.error('Contact fetch error:', err)
    res.status(500).json({ message: 'Unable to fetch enquiries right now.' })
  }
})

export default router
