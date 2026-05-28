import React, { useState, useEffect } from 'react';
import axiosClient from '../../api/axiosClient';

const RecordContributionModal = ({ isOpen, onClose, onRefresh }) => {
  const [members, setMembers] = useState([]);
  const [formData, setFormData] = useState({
    memberId: '',
    type: 'tithe',
    amount: '',
    paymentMethod: 'cash',
    referenceNumber: '',
    notes: ''
  });
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch the active member listings so the admin can tie this donation to a real profile
  useEffect(() => {
    if (isOpen) {
      const loadMembers = async () => {
        try {
          const response = await axiosClient.get('/members');
          setMembers(response.data || []);
        } catch (err) {
          setErrorMsg('Failed to sync congregation member list indices.');
        }
      };
      loadMembers();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setIsSubmitting(false);

    // Baseline validation check layers
    if (!formData.memberId || !formData.amount || !formData.type) {
      setErrorMsg('Please select a congregant account, contribution type, and amount.');
      return;
    }

    try {
      setIsSubmitting(true);
      // Fire payload straight to our newly mounted POST /api/contributions channel
      await axiosClient.post('/contributions', {
        ...formData,
        amount: Number(formData.amount)
      });

      // Clear operational state hooks on success, request tables update, and slide down
      setFormData({ memberId: '', type: 'tithe', amount: '', paymentMethod: 'cash', referenceNumber: '', notes: '' });
      onRefresh();
      onClose();
    } catch (err) {
      setErrorMsg(err.message || 'Failed to post transaction ledger entry.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-neutral-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full border-t-8 border-emerald-600 overflow-hidden animate-fade-in">
        
        {/* Header Ribbon Identity */}
        <div className="bg-neutral-50 px-6 py-4 border-b border-neutral-200 flex justify-between items-center">
          <div>
            <h3 className="text-lg font-bold text-neutral-900">የገቢ መሰብሰቢያ ሰነድ</h3>
            <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">Record Contribution Entry</p>
          </div>
          <button onClick={onClose} className="text-neutral-400 hover:text-neutral-600 text-xl font-bold transition p-1">✕</button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {errorMsg && (
            <div className="bg-red-50 border-l-4 border-churchCrimson p-3 rounded text-xs font-medium text-red-800">
              {errorMsg}
            </div>
          )}

          {/* Member Profile Searchable Select Input Dropdown */}
          <div>
            <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">Select Congregant Profile *</label>
            <select
              name="memberId"
              value={formData.memberId}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition font-medium"
            >
              <option value="">-- Choose Account Folder --</option>
              {members.map((m) => (
                <option key={m._id} value={m._id}>
                  {m.lastName}, {m.firstName} {m.christianName ? `(${m.christianName})` : ''}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Fund Allocation Selection Matrix */}
            <div>
              <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">Allocation Track *</label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
              >
                <option value="tithe">አሥራት (Tithe)</option>
                <option value="donation">Donation (የፈቃድ ስጦታ)</option>
                <option value="pledge_building">Building Pledge</option>
                <option value="other">Other Fund Type</option>
              </select>
            </div>

            {/* Exact Fiat Amount Capital Fields */}
            <div>
              <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">Amount ($ USD) *</label>
              <input
                type="number"
                name="amount"
                min="1"
                step="0.01"
                placeholder="250.00"
                value={formData.amount}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition font-semibold"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Payment Method Selector Dropdowns */}
            <div>
              <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">Payment Channel *</label>
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
              >
                <option value="cash">Cash (ጥሬ ገንዘብ)</option>
                <option value="check">Check (ቼክ)</option>
                <option value="e-transfer">E-Transfer</option>
                <option value="card">Card Terminal</option>
              </select>
            </div>

            {/* Conditional Audit Reference Fields */}
            <div>
              <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">Reference / Check #</label>
              <input
                type="text"
                name="referenceNumber"
                placeholder="REF-1092"
                value={formData.referenceNumber}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition font-mono"
              />
            </div>
          </div>

          {/* Optional Administrative Audit Comments */}
          <div>
            <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">Internal Note Descriptions</label>
            <textarea
              name="notes"
              rows="2"
              placeholder="e.g., General annual pledge installment tracking..."
              value={formData.notes}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition resize-none"
            ></textarea>
          </div>

          {/* Action Footer Toggles */}
          <div className="pt-4 border-t border-neutral-100 flex justify-end space-x-3">
            <button type="button" onClick={onClose} className="px-4 py-2 border border-neutral-300 text-neutral-700 rounded-lg text-sm font-medium hover:bg-neutral-50 transition">
              Cancel
            </button>
            <button type="submit" disabled={isSubmitting} className="px-5 py-2 bg-emerald-600 text-white font-bold rounded-lg text-sm hover:bg-emerald-700 transition shadow disabled:opacity-50">
              {isSubmitting ? 'Logging Receipt...' : '🪙 Post Receipt'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RecordContributionModal;