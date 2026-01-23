export const scrollToSection = (id, setActiveTab, setMenuOpen) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 90;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
    if (setActiveTab) setActiveTab(id);
    if (setMenuOpen) setMenuOpen(false);
  }
};