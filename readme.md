https://iamnabeelbabar.github.io/Xeven-Final-First-Landing-Page/
AniQuest 🌟✨
AniQuest is a beautifully crafted, responsive web project that leverages AI to instantly generate Anime & Fantasy content like stories, posts, and more. This project also features an interactive carousel for displaying client reviews or features smoothly.

🚀 Features
🎨 Modern UI with Anime & Fantasy theme.

⚡ Instant AI-Powered Text Generation (Concept-based).

📝 Ideal for Fan Fiction, Blogging, Reddit Posts, and More.

💡 Carousel System for testimonials/reviews using vanilla JS.

🎯 Responsive Design ensuring compatibility across devices.

🔥 Buttons for Google & Email Sign Up.

💻 Built with HTML5, CSS3, and Vanilla JavaScript.

📂 Project Structure

/AniQuest
│
├── index.html        # Main HTML file (Website Structure)
├── styles.css        # Styling file (Not provided here)
├── script.js         # JavaScript for carousel functionality
└── assets/          # Image assets (like carousel girl image)

🎮 Usage Instructions
Clone the repository:

bash
Copy
Edit
git clone https://github.com/your-username/AniQuest.git
cd AniQuest
Open index.html directly in your browser:

bash
Copy
Edit
start index.html  # For Windows
open index.html   # For Mac
Explore features like:

Carousel sliding with Next/Prev buttons.

Dot navigation.

Beautiful AI Text Generation themed UI.

🧩 Core JavaScript Logic (script.js)
js
Copy
Edit
const wrapper = document.querySelector('.carousel-wrapper');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dots = document.querySelectorAll('.dot');

let currentPage = 0;
const totalPages = dots.length;

function updateCarousel() {
    const offset = currentPage * 100;
    wrapper.style.transform = `translateX(-${offset}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentPage].classList.add('active');
}

nextBtn.addEventListener('click', () => {
    currentPage = (currentPage + 1) % totalPages;
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    currentPage = (currentPage - 1 + totalPages) % totalPages;
    updateCarousel();
});

dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        currentPage = +e.target.getAttribute('data-page');
        updateCarousel();
    });
});

updateCarousel();
🔧 Tech Stack
HTML5 🏗️

CSS3 🎨 (external file styles.css)

JavaScript (Vanilla) ⚙️

🙌 Author
👤 Nabeel Bro
An aspiring AI Engineer & Web Developer passionate about Anime & Tech.

📜 License
This project is licensed under the MIT License - see the LICENSE file for details.

💡 Future Improvements
Backend AI Integration (using OpenAI API).

Dark/Light Mode toggle.

User Authentication system.

Stay creative & keep building! 🚀💙✨
