import { useEffect, useState } from "react";
import api from "../../../services/api";
import { Trash2, UserPlus, Shield, KeyRound } from "lucide-react";

export default function ManageUsers() {
  const [users, setUsers] = useState([]);
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "USER",
  });

  // LOAD USERS
  const loadUsers = async () => {
    try {
      const res = await api.get("/auth/users");
      setUsers(res.data);
    } catch (e) {
      setMsg("❌ Failed to load users");
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  // CREATE USER
  const createUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    try {
      const res = await api.post("/auth/signup", form);

      if (res.status === 200) {
        setMsg("✅ User created successfully!");
      } 
      

      // Refresh list
      loadUsers();

      // Reset form
      setForm({ name: "", email: "", password: "", role: "USER" });
    } catch (error) {
      console.error("Signup error:", error);
      setMsg("❌ Failed to create user.");
    } finally {
      setLoading(false);
    }
  };

  // DELETE USER
  const deleteUser = async (id) => {
    if (!confirm("Delete this user?")) return;

    try {
      await api.delete(`/auth/users/${id}`);
      loadUsers();
    } catch (e) {
      setMsg("❌ Delete failed.");
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 bg-gradient-to-br from-purple-200 via-blue-100 to-cyan-100 flex justify-center">
      <div className="w-full max-w-5xl">
        <h1 className="text-4xl font-extrabold text-blue-900 mb-6 text-center drop-shadow-sm">
          User Management
        </h1>

        {msg && (
          <div className="mb-6 p-4 bg-white/80 backdrop-blur border-l-4 border-blue-600 text-blue-700 rounded-xl shadow-md">
            {msg}
          </div>
        )}

        {/* CREATE USER CARD */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-10 border border-blue-300/30 bg-gradient-to-br from-white via-blue-50 to-purple-50">
          <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">
            <UserPlus /> Add New User
          </h2>

          <form
            onSubmit={createUser}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            <input
              type="text"
              placeholder="Full Name"
              className="border border-blue-300 p-3 rounded-xl shadow bg-white/80"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <input
              type="email"
              placeholder="Email Address"
              className="border border-blue-300 p-3 rounded-xl shadow bg-white/80"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            <input
              type="password"
              placeholder="Password"
              className="border border-blue-300 p-3 rounded-xl shadow bg-white/80"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />

            <select
              className="border border-blue-300 p-3 rounded-xl shadow bg-white/80"
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
            >
              <option value="USER">USER</option>
              <option value="ADMIN">ADMIN</option>
              <option value="SUBADMIN">SUBADMIN</option>
            </select>

            <button
              className="md:col-span-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 rounded-xl shadow-lg"
              disabled={loading}
            >
              {loading ? "Creating..." : "Create User"}
            </button>
          </form>
        </div>

        {/* USERS TABLE */}
        <div className="bg-white rounded-2xl shadow-xl p-6 border border-blue-300/30 bg-gradient-to-br from-white via-blue-50 to-cyan-50">
          <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">
            <Shield /> Registered Users
          </h2>

          <div className="overflow-hidden rounded-xl border border-blue-200">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="p-3 border">Name</th>
                  <th className="p-3 border">Email</th>
                  <th className="p-3 border">Role</th>
                  <th className="p-3 border">Password</th>
                  <th className="p-3 border">Access</th>
                  <th className="p-3 border">Actions</th>
                </tr>
              </thead>

              <tbody>
                {users.map((user) => (
                  <tr
                    key={user.id}
                    className="border-b text-center bg-white/70 hover:bg-blue-50"
                  >
                    <td className="p-3 border">{user.name}</td>
                    <td className="p-3 border">{user.email}</td>
                    <td className="p-3 border">{user.role}</td>

                    <td className="p-3 border text-gray-500">
                      ******** <KeyRound size={16} className="inline ml-1" />
                    </td>

                    <td className="p-3 border font-semibold text-blue-700">
                      {user.role === "ADMIN"
                        ? "Full Access"
                        : user.role === "SUBADMIN"
                        ? "Partial Access"
                        : "Limited"}
                    </td>

                    <td className="p-3 border">
                      <button
                        onClick={() => deleteUser(user.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 size={20} />
                      </button>
                    </td>
                  </tr>
                ))}

                {users.length === 0 && (
                  <tr>
                    <td colSpan="6" className="p-4 text-center text-gray-500">
                      No users found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
