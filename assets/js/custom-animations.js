// Custom animations for the personal homepage

document.addEventListener('DOMContentLoaded', function() {
  // Add animation to section headings
  const headings = document.querySelectorAll('section h2');
  headings.forEach((heading, index) => {
    heading.style.opacity = '0';
    heading.style.transform = 'translateY(20px)';
    heading.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    
    setTimeout(() => {
      heading.style.opacity = '1';
      heading.style.transform = 'translateY(0)';
    }, 300 + (index * 150));
  });
  
  // Add hover effect to publication items
  const publications = document.querySelectorAll('.pub-row');
  publications.forEach(pub => {
    pub.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
      this.style.transition = 'transform 0.3s ease';
      
      // Add subtle shadow
      const teaser = this.querySelector('.teaser');
      if (teaser) {
        teaser.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
        teaser.style.transition = 'box-shadow 0.3s ease';
      }
    });
    
    pub.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      
      // Reset shadow
      const teaser = this.querySelector('.teaser');
      if (teaser) {
        teaser.style.boxShadow = '0 4px 10px rgba(0,0,0,0.15)';
      }
    });
  });
  
  // Add subtle parallax effect to avatar
  const avatar = document.querySelector('.avatar img');
  if (avatar) {
    window.addEventListener('mousemove', function(e) {
      const mouseX = e.clientX / window.innerWidth - 0.5;
      const mouseY = e.clientY / window.innerHeight - 0.5;
      
      avatar.style.transform = `translate(${mouseX * 10}px, ${mouseY * 10}px)`;
      avatar.style.transition = 'transform 0.2s ease-out';
    });
  }
  
  // Add subtle highlight to active section based on scroll position
  const sections = document.querySelectorAll('section h2');
  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionBottom = sectionTop + section.parentElement.offsetHeight;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        section.style.color = getComputedStyle(document.documentElement).getPropertyValue('--global-theme-color');
        section.style.transform = 'scale(1.03)';
        section.style.transition = 'transform 0.3s ease, color 0.3s ease';
      } else {
        section.style.color = '';
        section.style.transform = 'scale(1)';
      }
    });
  });
});
