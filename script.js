function navigate(sectionId) {
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => section.classList.remove('active'));
  const target = document.getElementById(sectionId);
  if (target) target.classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
  navigate('main');
});
