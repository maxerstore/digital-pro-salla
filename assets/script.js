// Simple script: toggle dir attribute on <html> for demo purposes
function setDir(lang){ 
  var d = (lang && lang.toLowerCase() === 'ar') ? 'rtl' : 'ltr';
  document.documentElement.setAttribute('dir', d);
}
// Expose for manual testing:
window.setDir = setDir;
