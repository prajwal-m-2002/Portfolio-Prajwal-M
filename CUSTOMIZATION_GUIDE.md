# 📝 Customization Guide - Make It Yours!

This guide shows you exactly where to update your personal information.

## 1️⃣ Hero Section - Your Name & Roles

**File**: `src/components/Hero.jsx`

### Update Your Name (Line ~50)
```jsx
<motion.h1 className="text-6xl md:text-8xl font-display font-bold neon-glow mb-4">
  Prajwal  {/* ← Change this to your name */}
</motion.h1>
```

### Update Your Roles (Line ~11)
```jsx
const roles = ['MCA Student', 'Full-Stack Developer', 'Java Developer'];
// ↑ Change these to your roles/titles
// Example: ['Software Engineer', 'React Developer', 'Tech Enthusiast']
```

### Update Tagline (Line ~69)
```jsx
<motion.h3>
  I build clean, scalable web experiences.  {/* ← Your tagline */}
</motion.h3>
```

---

## 2️⃣ Projects - Add Your Work

**File**: `src/components/Projects.jsx`

### Update the Projects Array (Starting Line ~8)

```jsx
const projects = [
  {
    id: 1,
    title: 'AutoTrust - Car Selling Platform',  // Your project name
    tagline: 'Streamlined car marketplace...',   // Short description
    tech: ['Spring Boot', 'React', 'MySQL'],    // Technologies used
    problem: 'Traditional car selling...',       // Problem statement
    solution: 'Built a three-tier system...',   // Your solution
    outcome: 'Implemented complete CRUD...',    // Results/impact
    github: 'https://github.com/prajwal/autotrust',  // ← YOUR GitHub link!
    live: null,  // or 'https://yourdemo.com' if deployed
    color: 'from-blue-500/20 to-cyan-500/20',  // Gradient color
  },
  // Add more projects following the same structure
];
```

### Color Options for Projects:
- Blue: `'from-blue-500/20 to-cyan-500/20'`
- Green: `'from-green-500/20 to-emerald-500/20'`
- Yellow: `'from-yellow-500/20 to-orange-500/20'`
- Purple: `'from-purple-500/20 to-pink-500/20'`
- Red: `'from-red-500/20 to-rose-500/20'`

---

## 3️⃣ Skills - Your Tech Stack

**File**: `src/components/Skills.jsx`

### Update Skills Data (Starting Line ~7)

```jsx
const skillsData = [
  {
    category: 'Frontend',
    skills: ['React', 'JavaScript', 'HTML/CSS'],  // ← Your frontend skills
    projects: ['Portfolio', 'E-commerce'],         // Where you used them
    usage: 'Building modern, responsive UIs...',  // How you use them
  },
  {
    category: 'Backend',
    skills: ['Java', 'Spring Boot', 'Node.js'],   // ← Your backend skills
    projects: ['Car Selling App', 'API Server'],  // Your projects
    usage: 'Developing server-side apps...',      // Your approach
  },
  // Update Database and Tools sections too
];
```

---

## 4️⃣ Education - Your Degrees

**File**: `src/components/Education.jsx`

### Update Education Array (Starting Line ~7)

```jsx
const education = [
  {
    degree: 'Master of Computer Applications (MCA)',  // ← Your degree
    institution: 'Your University Name',              // ← Your university
    year: '2024 - 2026',                              // ← Your years
    description: 'Specializing in Software Development...',  // Focus area
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Your College Name',  // ← Update this
    year: '2021 - 2024',
    description: 'Focus on Programming Fundamentals...',
  },
];
```

---

## 5️⃣ Contact Information

**File**: `src/components/Contact.jsx`

### Update Social Links (Starting Line ~24)

```jsx
const socials = [
  {
    icon: <Mail size={24} />,
    name: 'Email',
    link: 'mailto:prajwal@example.com',  // ← YOUR email
  },
  {
    icon: <Linkedin size={24} />,
    name: 'LinkedIn',
    link: 'https://linkedin.com/in/prajwal',  // ← YOUR LinkedIn
  },
  {
    icon: <Github size={24} />,
    name: 'GitHub',
    link: 'https://github.com/prajwal',  // ← YOUR GitHub
  },
];
```

### Update Availability Message (Line ~147)
```jsx
<p>
  📍 Currently looking for <span>internship opportunities</span> and 
  <span> full-time roles</span> where I can contribute and grow.
  {/* ↑ Update based on your job search status */}
</p>
```

---

## 6️⃣ Experiments - Your Learning Journey

**File**: `src/components/Experiments.jsx`

### Update Experiments Array (Starting Line ~6)

```jsx
const experiments = [
  {
    icon: <Rocket size={28} />,
    title: 'JavaFX Desktop Apps',           // What you're exploring
    description: 'Explored desktop...',     // What you learned
    tags: ['JavaFX', 'SQLite', 'Desktop'],  // Related tech
  },
  // Add your own learning projects/experiments
];
```

---

## 7️⃣ Resume Download

### Add Your Resume PDF

1. Save your resume as `resume.pdf`
2. Place it in the `public/` folder
3. The download button will work automatically!

---

## 8️⃣ Meta Tags (SEO)

**File**: `index.html`

### Update Meta Tags (Starting Line ~8)

```html
<title>Prajwal - MCA Student & Full-Stack Developer</title>
<!-- ↑ Your name and title -->

<meta name="description" content="Portfolio of Prajwal, an MCA student...">
<!-- ↑ Your description -->

<meta property="og:title" content="Prajwal - MCA Student...">
<!-- ↑ Your name for social sharing -->

<meta property="og:url" content="https://yourwebsite.com">
<!-- ↑ Your deployed URL -->
```

---

## 9️⃣ Footer

**File**: `src/components/Footer.jsx`

The footer automatically shows the current year and tech stack. No changes needed unless you want to modify the message!

---

## 🎨 Optional: Change Color Scheme

**File**: `tailwind.config.js`

### Change Neon Blue to Another Color (Line ~11)

```javascript
colors: {
  'neon-blue': '#0ff',  // ← Change this hex code
  // Examples:
  // Neon Green: '#0f0'
  // Neon Purple: '#b0f'
  // Neon Pink: '#f0b'
  // Neon Orange: '#ff6600'
}
```

---

## 🔄 After Making Changes

1. **Save all files**
2. **Refresh browser** (Ctrl+R or Cmd+R)
3. **Check changes** - Vite hot-reloads automatically!

---

## ⚡ Quick Customization Checklist

Before deploying, make sure you've updated:

- [ ] Your name in Hero section
- [ ] Your roles/titles in Hero
- [ ] All project details and GitHub links
- [ ] Tech skills and where you used them
- [ ] Education degrees and institutions
- [ ] Email, LinkedIn, and GitHub links
- [ ] Resume PDF in public folder
- [ ] Meta tags in index.html
- [ ] (Optional) Color scheme

---

## 💡 Pro Tips

1. **Keep it honest** - Only include projects you can discuss in interviews
2. **Update regularly** - Add new projects as you build them
3. **Test links** - Make sure all GitHub and social links work
4. **Mobile test** - Check on your phone before deploying
5. **Get feedback** - Show friends/colleagues before sending to recruiters

---

## 🚀 Ready to Deploy?

Once customized, see `README.md` for deployment instructions!

---

**Good luck with your job search! 🎯**
