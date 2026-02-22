# Prajwal's Portfolio Website

https://prajwal-kumble-portfolio.netlify.app/

A next-generation personal portfolio website designed to showcase technical skills, design sense, and product thinking. Built with React, Vite, Tailwind CSS, and Framer Motion.

## 🎯 Design Philosophy

This portfolio is built as a **product demo**, not just a resume page. It demonstrates:
- ✅ Technical skill through clean, scalable architecture
- ✅ Design sense with modern UI/UX and micro-interactions
- ✅ Product thinking via case-study style project presentations

## ✨ Features

- **Hero Section**: Name reveal animation with typing effect for roles
- **How I Think**: Core principles showcasing problem-solving approach
- **Skills**: Interactive, expandable cards showing tech stack and usage
- **Projects**: Case studies with Problem → Solution → Outcome format
- **Education**: Clean timeline design
- **Experiments**: Side projects and learning initiatives
- **Contact**: Working contact form with social links
- **Responsive Design**: Mobile-first approach with smooth hamburger menu
- **Animations**: Subtle micro-interactions using Framer Motion
- **Glassmorphism**: Modern UI with backdrop blur effects
- **Dark Theme**: Neon blue accent with gradient animations

## 🛠️ Tech Stack

- **React** - Component-based UI library
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **Lucide React** - Beautiful icon library

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and visit: `http://localhost:5173`

## 📦 Building for Production

To create a production build:

```bash
npm run build
```

The optimized files will be in the `dist` folder.

## 🌐 Deployment

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify
3. Or connect your GitHub repo for automatic deployments

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel` in the project directory
3. Follow the prompts

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

## 📝 Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.jsx`):
   - Update name and roles array
   - Modify tagline

2. **Projects** (`src/components/Projects.jsx`):
   - Add/edit projects with your own
   - Update GitHub and live demo links

3. **Skills** (`src/components/Skills.jsx`):
   - Customize tech stack categories
   - Update skills, projects, and usage descriptions

4. **Education** (`src/components/Education.jsx`):
   - Update degree, institution, and year information

5. **Contact** (`src/components/Contact.jsx`):
   - Update email and social media links
   - Connect to email service (EmailJS, Formspree, or backend API)

6. **Colors** (`tailwind.config.js`):
   - Modify neon-blue color or add new accent colors
   - Adjust dark mode colors

### Add Your Resume

Place your resume PDF in the `public` folder as `resume.pdf` for the download button to work.

## 🎨 Color Scheme

- **Primary Accent**: Neon Blue (`#0ff`)
- **Background**: Dark (`#0a0a0f`)
- **Cards**: Dark Card (`#12121a`)
- **Text**: White with gray variants

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Project Structure

```
portfolio/
├── public/
│   └── resume.pdf (add your resume here)
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── HowIThink.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Experiments.jsx
│   │   ├── Contact.jsx
│   │   ├── Navigation.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## 🤝 Contributing

This is a personal portfolio, but feel free to fork and customize it for your own use!

## 📄 License

MIT License - feel free to use this template for your own portfolio.

## 💬 Contact

- **Email**: prajwal@example.com
- **LinkedIn**: [linkedin.com/in/prajwal](https://linkedin.com/in/prajwal)
- **GitHub**: [github.com/prajwal](https://github.com/prajwal)

---

**Built with ❤️ using React, Vite, Tailwind CSS & Framer Motion**
"# Portfolio" 
