document.addEventListener('DOMContentLoaded', function() {
    // Load the external HTML file containing all widgets
    fetch('widgets.html')
      .then(response => response.text())
      .then(data => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, 'text/html');
  
        // Load the specific sections from the fetched HTML
        const navbar = doc.querySelector('.navbar-container').innerHTML;
        const header = doc.querySelector('.header-container').innerHTML;
        const socialMedia = doc.querySelector('.social-media-container').innerHTML;
        const footer = doc.querySelector('.footer-container').innerHTML;
  
        // Insert the sections into the corresponding divs in the main page
        document.querySelector('.navbar-container').innerHTML = navbar;
        document.querySelector('.header-container').innerHTML = header;
        document.querySelector('.social-media-container').innerHTML = socialMedia;
        document.querySelector('.footer-container').innerHTML = footer;
  
        // Modify the CV link to trigger PDF download
        const cvLink = document.querySelector('a[href="assets\\CV_Ramadhan Oktovivian Muhammad_DS.pdf"]');
        if (cvLink) {
          cvLink.setAttribute('download', 'CV_Ramadhan_Oktovivian_Muhammad.pdf');
        }
      })
      .catch(error => console.error('Error loading widget:', error));
  });
  