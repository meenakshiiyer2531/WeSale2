import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SellProductPage({ updateProductData }) {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    brand: '',
    condition: '',
    specifications: '',
    quantity: '',
    images: [], // Array to handle multiple images
    category: '',
    dimensions: '',
    weight: '',
    color: '',
    warranty: '',
    contact: '',
    paymentMethods: '',
  });

  const [success, setSuccess] = useState(false); // Track form submission
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files); // Get selected files
    setProduct({ ...product, images: files });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProductData(product);
    setSuccess(true);
    setTimeout(() => {
      navigate('/profile'); // Redirect to ProfilePage after showing success message
    }, 2000); // Adjust timeout to match animation duration
  };

  const capitalizeFirstLetter = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1).replace(/([A-Z])/g, ' $1');
  };

  const formStyle = {
    maxWidth: '800px',
    margin: 'auto',
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
  };

  const fieldStyle = {
    marginBottom: '16px',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    fontWeight: 'bold',
    fontSize: '16px',
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '14px',
  };

  const submitButtonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#91a5b7',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s, transform 0.3s',
  };

  const submitButtonHoverStyle = {
    backgroundColor: '#7e8d99',
    transform: 'scale(1.02)',
  };

  const successMessageStyle = {
    position: 'fixed',
    inset: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    zIndex: '1000',
  };

  const successTextStyle = {
    padding: '20px',
    backgroundColor: '#d4edda',
    color: '#155724',
    borderRadius: '8px',
    textAlign: 'center',
  };

  const imagePreviewContainerStyle = {
    marginTop: '20px',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
  };

  const imagePreviewStyle = {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    border: '1px solid #ddd',
    borderRadius: '4px',
  };

  return (
    <div style={formStyle}>
      <h2 style={{ textAlign: 'center' }}>Sell Your Product</h2>
      <form onSubmit={handleSubmit}>
        {/* Form Fields */}
        {Object.entries(product).map(([key, value]) => (
          key !== 'images' ? (
            <div key={key} style={fieldStyle}>
              <label style={labelStyle}>{capitalizeFirstLetter(key)}</label>
              {key === 'condition' ? (
                <select
                  name={key}
                  value={value}
                  onChange={handleChange}
                  style={inputStyle}
                  required
                >
                  <option value="">Select Condition</option>
                  <option value="New">New</option>
                  <option value="Used">Used</option>
                </select>
              ) : (
                <input
                  type={key === 'price' || key === 'quantity' ? 'number' : 'text'}
                  name={key}
                  value={value}
                  onChange={handleChange}
                  style={inputStyle}
                  required
                />
              )}
            </div>
          ) : null
        ))}
        <div style={fieldStyle}>
          <label style={labelStyle}>Images</label>
          <input
            type="file"
            name="images"
            multiple
            onChange={handleImageChange}
            style={inputStyle}
          />
        </div>
        <button
          type="submit"
          style={submitButtonStyle}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, submitButtonHoverStyle)}
          onMouseLeave={(e) => Object.assign(e.currentTarget.style, submitButtonStyle)}
        >
          Submit
        </button>
      </form>
      {success && (
        <div style={successMessageStyle}>
          <div style={successTextStyle}>
            Selling product data saved successfully!
          </div>
        </div>
      )}
      {product.images.length > 0 && (
        <div style={imagePreviewContainerStyle}>
          {product.images.map((image, index) => (
            <img
              key={index}
              src={URL.createObjectURL(image)}
              alt={`Product Image ${index + 1}`}
              style={imagePreviewStyle}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default SellProductPage;
