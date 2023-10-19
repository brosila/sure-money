document.addEventListener('DOMContentLoaded', function () {
    const categories = ['youtube', 'affiliate', 'crypto', 'photo-marketing', 'facebook', 'network'];

    // Function to render courses
    function renderCourses(category, courses) {
        const courseContainer = document.querySelector(`#${category} .course`);

        courses.forEach(course => {
            const courseElement = document.createElement('div');
            courseElement.innerHTML = `
                <img src="${course.image}" alt="${course.title}">
                <h3>${course.title}</h3>
                <p>${course.description}</p>
                <p><a href="${course.affiliateLink}" target="_blank">Enroll Now</a></p>
            `;
            courseContainer.appendChild(courseElement);
        });
    }

    // Define courses for each category
    const youtubeCourses = [
        { title: 'Learn The Top Secrets Used To Make Millions From Youtube', description: 'Learn the basics of YouTube marketing.', affiliateLink: 'https://www.digistore24.com/redir/408365/Digizcom/', image: 'https://i.ibb.co/hm0Y9gt/page-9-1.jpg' },

    ];

    const affiliateCourses = [
        { title: 'Affiliate Marketing Mastery', description: 'Master the art of affiliate marketing.', affiliateLink: 'your-affiliate-link', image: 'path/to/affiliate-course-1.jpg' },
        // Add more affiliate courses
  
    ];

    const cryptoCourses = [
        { title: 'Crypto Investment Strategies', description: 'Explore different strategies for crypto investments.', affiliateLink: 'your-affiliate-link', image: 'path/to/crypto-course-1.jpg' },
        // const youtubeCourses = [
        { title: 'Crypto and Blockchain MasterClass', description: 'Learn the basics of YouTube marketing.', affiliateLink: 'your-affiliate-link', image: 'https://i.ibb.co/sFF48LP/page-1-1.jpg' },
      // Add more YouTube courses Add more crypto courses
    ];

    const photoMarketingCourses = [
        { title: 'Photo Marketing Essentials', description: 'Essential techniques for marketing using photos.', affiliateLink: 'your-affiliate-link', image: 'path/to/photo-marketing-course-1.jpg' },
        // Add more photo marketing courses
    ];

    const facebookCourses = [
        { title: 'Facebook Ads Fundamentals', description: 'Understand the fundamentals of Facebook Ads.', affiliateLink: 'your-affiliate-link', image: 'path/to/facebook-course-1.jpg' },
        // Add more Facebook courses
    ];

    const networkCourses = [
        { title: 'Network Security Basics', description: 'Learn the basics of network security.', affiliateLink: 'your-affiliate-link', image: 'path/to/network-course-1.jpg' },
        // Add more network courses
    ];

    // Render courses for each category
    renderCourses('youtube', youtubeCourses);
    renderCourses('affiliate', affiliateCourses);
    renderCourses('crypto', cryptoCourses);
    renderCourses('photo-marketing', photoMarketingCourses);
    renderCourses('facebook', facebookCourses);
    renderCourses('network', networkCourses);

    // Add AdMob link
    const adLinkContainer = document.querySelector('footer p:last-child');
    adLinkContainer.innerHTML = `Advertisement: <a href="your-admob-ad-link" target="_blank">Check out our Ad!</a>`;
});


       