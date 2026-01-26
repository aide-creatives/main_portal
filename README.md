# A.I.D.E Creative Solutions

A professional website for A.I.D.E Creative Solutions - providing homework assistance and design services for students.

## 🚀 Features

- **Multiple Service Pages**: Graphic Design, Lesson Plans, Presentations, Homework Help, Proofreading, and Video Editing
- **Responsive Design**: Mobile-first approach with smooth scrolling and interactive UI
- **Quote Request System**: Integrated email functionality for quote requests using EmailJS
- **Contact Information**: Multiple contact methods (Email, WhatsApp, Instagram)
- **Service Pricing**: Tiered pricing plans with different service packages
- **About Section**: Information about the company and its mission
- **Partner Showcase**: Display of partners and collaborators

## 📁 Project Structure

```
AIDE/
├── index.html           # Home page
├── services.html        # Services overview
├── pricing.html         # Pricing plans
├── about.html          # About company
├── contact.html        # Contact page
├── partners.html       # Partners page
├── logic.js            # JavaScript functionality
├── styles.css          # Styling
├── public/
│   └── images/         # Image assets (logos, favicons, etc.)
└── README.md           # This file
```

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Responsive styling with modern layout techniques
- **JavaScript** - Interactive features and form handling
- **EmailJS** - Email service for quote requests
- **Font Awesome** - Icon library
- **Google Fonts** - Typography (Poppins, Montserrat)

## ⚙️ Setup Instructions

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for CDN resources)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd AIDE
   ```

2. **Configure EmailJS**
   - Go to [emailjs.com](https://www.emailjs.com)
   - Create a free account
   - Set up your email service and create a template
   - Update the EmailJS credentials in `logic.js`:
     ```javascript
     emailjs.init('YOUR_PUBLIC_KEY');
     emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
     ```

3. **Serve locally**
   - Use a local server (Python, Node.js, or VS Code Live Server)
   - Example: `python -m http.server 8000`
   - Open `http://localhost:8000` in your browser

## 📧 Email Configuration

The quote request form uses EmailJS to send emails. The form submission:
1. Collects user information (name, email, service, project details)
2. Sends the data to `aidecreatives@gmail.com`
3. Automatically replies to the user with a custom auto-reply template
4. Shows confirmation to the user

**Current EmailJS Setup:**
- Service ID: `service_d1i3u3y`
- Template ID: `template_x7ix7dw` (includes auto-reply)
- Public Key: `29OJKZ7cOWv0qwRlo`

## 🎨 Customization

### Colors
Edit `styles.css` to customize:
- Primary color: `#9D4EDD` (purple)
- Secondary colors and gradients
- Font families and sizes

### Content
Update service descriptions, pricing, and contact information directly in the HTML files.

### Images
Replace placeholder images in `public/images/` with your own:
- `logo_sml.png` - Header logo
- `logo_lrg.png` - About section logo
- `favicon.ico` - Browser tab icon

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🚀 Deployment

To deploy this website:

1. **GitHub Pages** (Free)
   - Push to GitHub
   - Enable GitHub Pages in repository settings
   - Site will be live at `https://yourusername.github.io/AIDE`

2. **Netlify** (Free)
   - Connect GitHub repository
   - Auto-deploys on push

3. **Traditional Hosting**
   - Upload files via FTP to your web host
   - Ensure HTTPS is enabled for EmailJS

## 📞 Contact

- **Email**: aidecreatives@gmail.com
- **WhatsApp/Phone**: +1 (876) 296-1276
- **Working Hours**: 
  - Monday - Friday: 9am - 7pm EST
  - Saturday: 10am - 4pm EST

## 📄 License

This project is the property of A.I.D.E Creative Solutions. All rights reserved.

## 👨‍💻 Contributing

For internal team members, please follow these guidelines:
- Test all changes locally before pushing
- Update README if adding new features
- Maintain code organization and comments
- Test email functionality after any form changes

---

**Last Updated**: January 26, 2026
