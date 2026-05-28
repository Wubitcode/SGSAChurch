import React, { useState, useEffect } from 'react';
import axiosClient from '../../api/axiosClient';
import { API_ENDPOINTS } from '../../api/endpoints';
import Spinner from '../../components/ui/Spinner';
import EmptyState from '../../components/ui/EmptyState';

const ManageMembers = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosClient.get(API_ENDPOINTS.MEMBERS.BASE)
      .then(res => setMembers(res.data?.data || []))
      .catch(() => setMembers([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-neutral-200">
        <div>
          <h3 className="text-sm font-bold text-neutral-800">Parish Membership Ledger</h3>
          <p className="text-xs text-neutral-400">Review official congregation enrollment state databases.</p>
        </div>
      </div>
      {loading ? <Spinner size="lg" /> : members.length === 0 ? (
        <EmptyState title="No Registered Parish Members" description="Congregation database profiles and tracking profiles will list within this workspace layer." icon="👥" />
      ) : (
        <div className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-neutral-50 border-b border-neutral-200 font-bold text-neutral-500 uppercase">
                <th className="px-6 py-4">Full Legal Name</th>
                <th className="px-6 py-4">Email Contact</th>
                <th className="px-6 py-4">Role Permissions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200">
              {members.map(m => (
                <tr key={m._id} className="hover:bg-neutral-50">
                  <td className="px-6 py-4 font-bold text-neutral-900">{m.name}</td>
                  <td className="px-6 py-4 font-mono">{m.email}</td>
                  <td className="px-6 py-4 uppercase font-semibold">{m.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ManageMembers;