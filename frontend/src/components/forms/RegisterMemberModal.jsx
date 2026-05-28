import React, { useState } from 'react';
import axiosClient from '../../api/axiosClient';

const RegisterMemberModal = ({ isOpen, onClose, onRefresh }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    christianName: '',
    email: '',
    phoneNumber: '',
  });
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setIsSubmitting(true);

    // Validate absolute essentials on frontend layer
    if (!formData.firstName || !formData.lastName || !formData.phoneNumber) {
      setErrorMsg('First Name, Last Name, and Phone Number fields are required.');
      setIsSubmitting(false);
      return;
    }

    try {
      // Send secure payload to POST /api/members
      await axiosClient.post('/members', formData);
      
      // Clear data state on success, notify table layout to fetch updates, and slide out
      setFormData({ firstName: '', lastName: '', christianName: '', email: '', phoneNumber: '' });
      onRefresh();
      onClose();
    } catch (err) {
      setErrorMsg(err.message || 'An error occurred during profile registration.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-neutral-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full border-t-8 border-churchGold overflow-hidden animate-fade-in">
        
        {/* Modal Decorative Branding Title Header */}
        <div className="bg-neutral-50 px-6 py-4 border-b border-neutral-200 flex justify-between items-center">
          <div>
            <h3 className="text-lg font-bold text-neutral-900">አዲስ ምዕመን መመዝገቢያ</h3>
            <p className="text-xs font-semibold text-churchCrimson uppercase tracking-wider">New Congregant Registration</p>
          </div>
          <button onClick={onClose} className="text-neutral-400 hover:text-neutral-600 text-xl font-bold transition p-1">✕</button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {errorMsg && (
            <div className="bg-red-50 border-l-4 border-churchCrimson p-3 rounded text-xs font-medium text-red-800">
              {errorMsg}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">Legal First Name *</label>
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-churchGold focus:border-transparent transition" placeholder="John" />
            </div>
            <div>
              <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">Legal Last Name *</label>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-churchGold focus:border-transparent transition" placeholder="Doe" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">Baptismal / Christian Name (የክርስትنا ስም)</label>
            <input type="text" name="christianName" value={formData.christianName} onChange={handleChange} className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-churchGold focus:border-transparent transition text-churchCrimson font-medium font-sans" placeholder="ወልደ ገብርኤል" />
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">Primary Phone Number *</label>
            <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-churchGold focus:border-transparent transition font-mono" placeholder="416-555-0199" />
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">Email Address (Optional)</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-churchGold focus:border-transparent transition" placeholder="johndoe@gmail.com" />
          </div>

          {/* Action Trigger Buttons */}
          <div className="pt-4 border-t border-neutral-100 flex justify-end space-x-3">
            <button type="button" onClick={onClose} className="px-4 py-2 border border-neutral-300 text-neutral-700 rounded-lg text-sm font-medium hover:bg-neutral-50 transition">
              Cancel
            </button>
            <button type="submit" disabled={isSubmitting} className="px-5 py-2 bg-churchDark text-white font-bold rounded-lg text-sm hover:bg-neutral-800 transition disabled:opacity-50">
              {isSubmitting ? 'Saving Base Records...' : '💾 Commit Profile'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterMemberModal;