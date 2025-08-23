# Portfolio Website

A highly animated portfolio website built with React, GSAP, and JSON Server backend. Features smooth animations, localStorage functionality, and a modern glassmorphism design.

## Features

- 🎨 **Highly Animated**: GSAP animations throughout the entire website
- 📱 **Responsive Design**: Works perfectly on all devices
- 💾 **localStorage Integration**: Form data persistence
- 🗄️ **JSON Server Backend**: RESTful API for data management
- 🎯 **Modern UI**: Glassmorphism design with gradient effects
- ⚡ **Fast Performance**: Optimized animations and loading

## Pages

- **Home**: Hero section with animated introduction
- **Projects**: Major and minor projects with hover effects
- **Skills**: Animated skill bars and proficiency indicators
- **Contact**: Contact form with localStorage persistence

## Technologies Used

- React 18
- React Router DOM
- GSAP (GreenSock Animation Platform)
- JSON Server
- CSS3 with Glassmorphism effects
- localStorage API

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the JSON Server (backend):
```bash
npm run server
```

4. In a new terminal, start the React development server:
```bash
npm start
```

5. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Header.css
│   │   ├── Footer.js
│   │   └── Footer.css
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Home.css
│   │   ├── Projects.js
│   │   ├── Projects.css
│   │   ├── Skills.js
│   │   ├── Skills.css
│   │   ├── Contact.js
│   │   └── Contact.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── db.json
├── package.json
└── README.md
```

## Features Explained

### GSAP Animations
- Page entrance animations
- Scroll-triggered animations
- Hover effects on cards and buttons
- Stagger animations for lists
- Progress bar animations

### localStorage Integration
- Contact form data persistence
- Form state management
- Auto-save functionality
- Data recovery on page refresh

### JSON Server Backend
- RESTful API endpoints
- Projects data management
- Skills data management
- Contact information storage

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Adaptive typography
- Touch-friendly interactions

## Customization

### Updating Content
1. **Projects**: Edit `db.json` to add/modify projects
2. **Skills**: Update skills array in `db.json`
3. **Contact Info**: Modify contact object in `db.json`
4. **Personal Info**: Update name, title, and description

### Styling
- Colors: Modify CSS variables in component files
- Animations: Adjust GSAP parameters in component files
- Layout: Update CSS grid and flexbox properties

### Adding New Pages
1. Create new component in `src/pages/`
2. Add route in `App.js`
3. Add navigation link in `Header.js`
4. Style with corresponding CSS file

## Available Scripts

- `npm start`: Runs the React development server
- `npm run build`: Builds the app for production
- `npm run server`: Starts the JSON Server backend
- `npm test`: Runs the test suite
- `npm run eject`: Ejects from Create React App

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Performance Tips

- GSAP animations are optimized for 60fps
- Images are lazy-loaded
- CSS animations use hardware acceleration
- localStorage operations are debounced

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For questions or issues, please open an issue on GitHub or contact the developer.

---

Built with ❤️ using React & GSAP 