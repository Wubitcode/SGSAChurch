import React, { useState, useEffect } from 'react';
import axiosClient from '../../api/axiosClient';
import RegisterMemberModal from '../../components/forms/RegisterMemberModal';

const Members = () => {
  const [members, setMembers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  // Controls modal visualization toggle switch state
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchMembers = async (search = '') => {
    try {
      setLoading(true);
      setError('');
      const url = search ? `/members?search=${encodeURIComponent(search)}` : '/members';
      const response = await axiosClient.get(url);
      setMembers(response.data || []);
    } catch (err) {
      setError(err.message || 'Failed to retrieve member registries.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchMembers(searchQuery);
    }, 400);
    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Search & Utility Workspace Header Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-neutral-200">
        <div className="relative w-full sm:w-80">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-neutral-400">🔍</span>
          <input
            type="text"
            placeholder="Search by name, የክርስትና ስም..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-churchGold focus:border-transparent transition"
          />
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="w-full sm:w-auto bg-churchDark text-white hover:bg-neutral-800 text-sm font-bold px-5 py-2 rounded-lg transition shadow-sm"
        >
          ➕ Register New Member
        </button>
      </div>

      {error && (
        <div className="bg-red-50 border-l-4 border-churchCrimson p-4 rounded-md text-sm text-red-800">
          {error}
        </div>
      )}

      {/* Primary Data Stream Grid Table */}
      <div className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden">
        {loading ? (
          <div className="p-20 flex flex-col justify-center items-center space-y-4">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-churchGold"></div>
            <p className="text-sm text-neutral-500 font-medium">Scanning Database Registries...</p>
          </div>
        ) : members.length === 0 ? (
          <div className="p-20 text-center">
            <p className="text-xl font-semibold text-neutral-400">No Congregant Records Located</p>
            <p className="text-sm text-neutral-400 mt-1">Try refining your search parameters or register a new family folder.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-neutral-50 border-b border-neutral-200 text-xs font-bold text-neutral-500 uppercase tracking-wider">
                  <th className="px-6 py-4">Legal Name</th>
                  <th className="px-6 py-4">Baptismal Name (የክርስትና ስም)</th>
                  <th className="px-6 py-4">Contact Phone</th>
                  <th className="px-6 py-4">Email Address</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 text-sm text-neutral-700">
                {members.map((member) => (
                  <tr key={member._id} className="hover:bg-neutral-50/70 transition">
                    <td className="px-6 py-4 font-semibold text-neutral-900">
                      {member.lastName}, {member.firstName}
                    </td>
                    <td className="px-6 py-4 text-churchCrimson font-medium">
                      {member.christianName || '—'}
                    </td>
                    <td className="px-6 py-4 font-mono text-neutral-600">
                      {member.phoneNumber}
                    </td>
                    <td className="px-6 py-4 text-neutral-500">
                      {member.email || '—'}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-xs font-bold text-churchGold hover:text-yellow-600 transition px-3 py-1 bg-yellow-50 rounded-full border border-yellow-200">
                        View Dossier
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Embedded Hidden Floating Portal Layer Modal */}
      <RegisterMemberModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onRefresh={() => fetchMembers(searchQuery)} 
      />
    </div>
  );
};

export default Members;