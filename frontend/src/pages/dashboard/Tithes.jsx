import React, { useState, useEffect } from 'react';
import axiosClient from '../../api/axiosClient';
import RecordContributionModal from '../../components/forms/RecordContributionModal';

const Tithes = () => {
  const [contributions, setContributions] = useState([]);
  const [filterType, setFilterType] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  // Toggle hook to display the financial input dialog popup layout
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchContributions = async () => {
    try {
      setLoading(true);
      setError('');
      const url = filterType === 'all' ? '/contributions' : `/contributions?type=${filterType}`;
      const response = await axiosClient.get(url);
      
      // Access response parameters cleanly
      setContributions(response.data?.data || []);
    } catch (err) {
      setError('Could not connect to financial server ledger arrays.');
      setContributions([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContributions();
  }, [filterType]);

  // Aggregate totals dynamically from data stream array indicators
  const totalAmount = contributions.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Overview Stat Cards Header Deck */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="bg-white p-5 rounded-xl shadow-sm border border-neutral-200">
          <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-1">Current Ledger Session Volume</p>
          <p className="text-2xl font-extrabold text-neutral-900">{contributions.length} Records</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-sm border border-neutral-200">
          <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-1">Session Pool Allocation Sum Value</p>
          <p className="text-2xl font-extrabold text-emerald-600">${totalAmount.toFixed(2)}</p>
        </div>
      </div>

      {/* Workspace Controls Navigation Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-neutral-200">
        <div className="flex flex-wrap gap-2">
          {['all', 'tithe', 'donation', 'pledge_building'].map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition border ${
                filterType === type
                  ? 'bg-churchDark text-white border-churchDark shadow-sm'
                  : 'bg-neutral-50 text-neutral-600 border-neutral-200 hover:bg-neutral-100'
              }`}
            >
              {type === 'all' ? '📜 All Records' : type === 'tithe' ? 'አሥራት (Tithe)' : type.replace('_', ' ')}
            </button>
          ))}
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="w-full sm:w-auto bg-emerald-600 text-white hover:bg-emerald-700 text-sm font-bold px-5 py-2 rounded-lg transition shadow-sm"
        >
          🪙 Record Contribution
        </button>
      </div>

      {error && (
        <div className="bg-amber-50 border-l-4 border-churchGold p-4 rounded-md text-xs font-medium text-amber-900">
          ⚠️ {error}
        </div>
      )}

      {/* Ledger Table Data Stream Panel */}
      <div className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden">
        {loading ? (
          <div className="p-20 text-center flex flex-col justify-center items-center space-y-3">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-churchGold"></div>
            <p className="text-xs text-neutral-500 font-medium">Reconciling Ledgers...</p>
          </div>
        ) : contributions.length === 0 ? (
          <div className="p-16 text-center">
            <p className="text-lg font-semibold text-neutral-400">No Transaction Records Found</p>
            <p className="text-xs text-neutral-400 mt-1">Select another sorting tier or post a new transaction profile.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-neutral-50 border-b border-neutral-200 text-xs font-bold text-neutral-500 uppercase tracking-wider">
                  <th className="px-6 py-4">Member Account</th>
                  <th className="px-6 py-4">Allocation Type</th>
                  <th className="px-6 py-4">Method</th>
                  <th className="px-6 py-4">Processing Ref</th>
                  <th className="px-6 py-4 text-right">Amount Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 text-sm text-neutral-700">
                {contributions.map((item) => (
                  <tr key={item._id} className="hover:bg-neutral-50/50 transition">
                    <td className="px-6 py-4 font-semibold text-neutral-900">
                      {item.memberId?.lastName}, {item.memberId?.firstName} 
                      {item.memberId?.christianName && (
                        <span className="block text-xs font-medium text-churchCrimson mt-0.5">{item.memberId.christianName}</span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <span className="capitalize text-xs font-bold px-2.5 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-700">
                        {item.type === 'tithe' ? 'አሥራት' : item.type.replace('_', ' ')}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-medium uppercase text-xs tracking-wider text-neutral-500">
                      {item.paymentMethod}
                    </td>
                    <td className="px-6 py-4 font-mono text-xs text-neutral-400">
                      {item.referenceNumber || '—'}
                    </td>
                    <td className="px-6 py-4 text-right font-extrabold text-emerald-600">
                      ${item.amount.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Hidden Embedded Interaction Dialog Form Layer */}
      <RecordContributionModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onRefresh={() => fetchContributions()} 
      />
    </div>
  );
};

export default Tithes;