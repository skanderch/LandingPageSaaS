import { useState } from 'react';
import axios from 'axios';

const DemoForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    time: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await axios.post('https://your-backend-api.com/submit-demo', formData);

      if (response.status === 200) {
        setSuccess('Demo request submitted successfully!');
        setFormData({ name: '', email: '', company: '', time: '' });
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('There was an error submitting your request. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="book-demo" className="bg-blue-50 p-6 rounded-md shadow-lg max-w-lg mx-auto mt-10">
      <h2 className="text-2xl font-bold text-blue-600 text-center mb-4">Book a Demo</h2>
      <p className="text-gray-600 text-center mb-6">
        Fill out the form below to schedule a demo with us and learn how we can help your business.
      </p>
      {success && <div className="text-green-600 mb-4 font-medium">{success}</div>}
      {error && <div className="text-red-600 mb-4 font-medium">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-blue-800">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border border-blue-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-blue-800">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-blue-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-blue-800">
            Company Name:
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            className="border border-blue-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="time" className="block text-sm font-medium text-blue-800">
            Preferred Demo Time:
          </label>
          <input
            type="datetime-local"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="border border-blue-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-black bg-white"
          />

        </div>

        <button
          type="submit"
          className={`bg-blue-600 text-black font-medium py-2 px-4 rounded-md hover:bg-blue-700 transition ${loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </section>
  );
};

export default DemoForm;
