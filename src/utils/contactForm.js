// Contact form handler utility
export const handleContactForm = (formData) => {
  // Basic form validation
  const { name, email, message } = formData;
  
  if (!name || !email || !message) {
    throw new Error('Please fill in all required fields');
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new Error('Please enter a valid email address');
  }
  
  // Simulate form submission (replace with actual API call)
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Form submitted:', formData);
      resolve({
        success: true,
        message: 'Thank you for your message! We will get back to you within 24 hours.'
      });
    }, 1000);
  });
};

// Format form data for submission
export const formatFormData = (formElement) => {
  const formData = new FormData(formElement);
  return {
    name: formData.get('name'),
    email: formData.get('email'),
    company: formData.get('company'),
    phone: formData.get('phone'),
    subject: formData.get('subject'),
    message: formData.get('message'),
    timestamp: new Date().toISOString()
  };
};