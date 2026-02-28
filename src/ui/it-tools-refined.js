/* IT-Tools Refined - Interactions */

document.addEventListener('DOMContentLoaded', () => {
  // Menu item active state
  const menuItems = document.querySelectorAll('.menu-item');
  menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      menuItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });

  // Set first menu item as active
  if (menuItems.length > 0) {
    menuItems[0].classList.add('active');
  }

  // Panel interactions
  const panels = document.querySelectorAll('.panel');
  panels.forEach(panel => {
    panel.addEventListener('mouseenter', () => {
      // Could add additional effects here
    });
  });

  // Map link click
  const mapLink = document.querySelector('.map-link');
  if (mapLink) {
    mapLink.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('Opening map...');
    });
  }

  // Tool links
  const toolLinks = document.querySelectorAll('.tool-details a');
  toolLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('Opening tool:', link.textContent);
    });
  });

  // Action buttons
  const actionBtns = document.querySelectorAll('.action-btn');
  actionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      console.log('Action triggered');
    });
  });
});


