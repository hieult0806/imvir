# Artist Portfolio Website

A modern, responsive portfolio website for artists to showcase their creative works. Features a clean design with smooth animations, filterable gallery, and mobile-friendly interface.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Interactive Gallery**: Filterable portfolio with categories (Paintings, Digital Art, Sketches)
- **Lightbox View**: Click on artworks to view them in full-screen mode
- **Smooth Animations**: Elegant scroll animations and transitions
- **Contact Form**: Built-in contact form for inquiries
- **Mobile Menu**: Hamburger menu for mobile navigation
- **Modern UI**: Clean, professional design with gradient backgrounds

## Demo Sections

1. **Hero Section**: Eye-catching introduction with call-to-action
2. **Gallery**: Filterable grid layout showcasing artworks
3. **About**: Artist bio and skills showcase
4. **Contact**: Contact form and social media links
5. **Footer**: Copyright information

## Customization Guide

### 1. Personal Information

Edit [index.html](index.html) to update:

- **Line 15**: Change page title
- **Line 17**: Update artist name in navigation
- **Line 30-32**: Modify hero section text
- **Line 85-90**: Update about section bio
- **Line 132-133**: Add your email address
- **Line 137-139**: Update social media links

### 2. Artworks

Replace placeholder images in the gallery section ([index.html](index.html), lines 42-74):

```html
<!-- Replace the src with your own image paths -->
<img src="path/to/your/image.jpg" alt="Your artwork title">
```

Add more gallery items by copying this template:

```html
<div class="gallery-item" data-category="paintings">
    <img src="your-image.jpg" alt="Description">
    <div class="overlay">
        <h3>Artwork Title</h3>
        <p>Medium, Year</p>
    </div>
</div>
```

### 3. Colors

Edit [styles.css](styles.css) (lines 10-16) to change the color scheme:

```css
:root {
    --primary-color: #6c5ce7;      /* Main theme color */
    --secondary-color: #fd79a8;    /* Accent color */
    --dark-color: #2d3436;         /* Dark backgrounds */
    --light-color: #f5f6fa;        /* Light backgrounds */
    --text-color: #333;            /* Text color */
}
```

### 4. Contact Form

The contact form currently shows an alert. To connect it to a real backend:

1. Use a service like [Formspree](https://formspree.io/) or [Netlify Forms](https://www.netlify.com/products/forms/)
2. Or modify [script.js](script.js) (lines 108-122) to send data to your backend

## Deploying to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `portfolio` or `your-username.github.io` for a personal site
3. Make it public

### Step 2: Upload Your Files

**Option A: Using Git Command Line**

```bash
# Initialize git in your project folder
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial portfolio website"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Option B: Using GitHub Desktop**

1. Open GitHub Desktop
2. Click "Add Existing Repository"
3. Select your project folder
4. Commit and push to GitHub

**Option C: Upload Files Directly**

1. Go to your repository on GitHub
2. Click "Add file" → "Upload files"
3. Drag and drop all your files
4. Commit the changes

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" → "Pages" (in the left sidebar)
3. Under "Source", select "main" branch
4. Click "Save"
5. Wait a few minutes for deployment

Your site will be available at: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

### Step 4: Custom Domain (Optional)

1. Purchase a domain from a registrar
2. In your repository, go to Settings → Pages
3. Enter your custom domain
4. Add a CNAME record in your domain registrar pointing to `YOUR-USERNAME.github.io`

## Local Development

To run the website locally:

1. Simply open [index.html](index.html) in your web browser
2. Or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server
```

Then visit `http://localhost:8000` in your browser.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## File Structure

```
portfolio/
│
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # Interactive functionality
└── README.md           # Documentation
```

## Technologies Used

- HTML5
- CSS3 (Grid, Flexbox, Animations)
- Vanilla JavaScript (ES6+)
- No external dependencies or frameworks

## Tips for Best Results

1. **Images**: Use optimized images (compress with tools like TinyPNG)
2. **Dimensions**: Keep artwork images around 800-1200px wide
3. **Format**: Use JPG for photos, PNG for graphics with transparency
4. **Organization**: Create an `images` folder for your artwork files
5. **SEO**: Update meta tags in the `<head>` section for better search visibility

## License

This template is free to use for personal and commercial projects. No attribution required.

## Support

For issues or questions:
- Check the code comments in each file
- Review the customization guide above
- Search for similar issues in web development forums

## Credits

Created as a modern, customizable portfolio template for artists.

---

**Ready to showcase your art to the world!**
