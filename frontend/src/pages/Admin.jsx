import { useEffect, useState } from "react";

function Admin() {
  const [members, setMembers] = useState([]);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  const fetchMembers = () => {
    fetch("http://localhost:5000/members")
      .then(res => res.json())
      .then(data => setMembers(data));
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  const deleteMember = async (id) => {
    await fetch(`http://localhost:5000/member/${id}`, {
      method: "DELETE",
    });
    fetchMembers();
  };

  const startEdit = (member) => {
    setEditId(member._id);
    setForm({
      name: member.name,
      email: member.email,
      phone: member.phone,
    });
  };

  const handleUpdate = async () => {
    await fetch(`http://localhost:5000/member/${editId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    setEditId(null);
    fetchMembers();
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Members List</h1>

      {members.map((m) => (
        <div key={m._id} className="p-3 border rounded mb-3">

          {editId === m._id ? (
            <>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="border p-1 mr-2"
              />
              <input
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="border p-1 mr-2"
              />
              <input
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="border p-1 mr-2"
              />

              <button onClick={handleUpdate} className="bg-green-500 text-white px-2 py-1 mr-2">
                Save
              </button>
            </>
          ) : (
            <>
              <p><strong>Name:</strong> {m.name}</p>
              <p><strong>Email:</strong> {m.email}</p>
              <p><strong>Phone:</strong> {m.phone}</p>

              <button
                onClick={() => startEdit(m)}
                className="bg-blue-500 text-white px-2 py-1 mr-2"
              >
                Edit
              </button>
            </>
          )}

          <button
            onClick={() => deleteMember(m._id)}
            className="bg-red-500 text-white px-2 py-1"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Admin;