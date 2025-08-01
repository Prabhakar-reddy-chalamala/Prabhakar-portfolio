// // Smooth scrolling and active link highlight
// document.addEventListener('DOMContentLoaded', () => {
//   const navLinks = document.querySelectorAll('#navbar a');
//   const sections = Array.from(navLinks).map(link => document.querySelector(link.getAttribute('href')));
  
//   function onScroll() {
//     const scrollPos = window.scrollY + 80; // offset for sticky nav + some padding
//     sections.forEach((section, i) => {
//       if (
//         section.offsetTop <= scrollPos &&
//         section.offsetTop + section.offsetHeight > scrollPos
//       ) {
//         navLinks.forEach(link => link.classList.remove('active'));
//         navLinks[i].classList.add('active');
//       }
//     });
//   }
//   window.addEventListener('scroll', onScroll);

//   // Smooth scroll on click
//   navLinks.forEach(link => {
//     link.addEventListener('click', e => {
//       e.preventDefault();
//       const target = document.querySelector(link.getAttribute('href'));
//       target.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     });
//   });

//   // Download Resume as PDF
//   const downloadBtn = document.getElementById('downloadBtn');
//   downloadBtn.addEventListener('click', () => {
//     const { jsPDF } = window.jspdf;
//     const resume = document.getElementById('resume-content');

//     html2canvas(resume, { scale: 2 }).then(canvas => {
//       const imgData = canvas.toDataURL('image/png');
//       const pdf = new jsPDF('p', 'pt', 'a4');
//       const pdfWidth = pdf.internal.pageSize.getWidth();
//       const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
//       pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
//       pdf.save('Prabhakar_Reddy_Chalamala_Resume.pdf');
//     });
//   });
// });
