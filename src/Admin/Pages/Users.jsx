import React, { useState } from "react";

function Users() {
  const [users, setUsers] = useState([
    { id: 1, name: "Ritik Kumar", email: "ritik@example.com", role: "Admin" },
    { id: 2, name: "Amit Sharma", email: "amit@example.com", role: "GM" },
    { id: 3, name: "Rahul Verma", email: "rahul@example.com", role: "Employee" },
  ]);

  const [form, setForm] = useState({ name: "", email: "", role: "Employee" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;

    const newUser = {
      id: Date.now(),
      name: form.name,
      email: form.email,
      role: form.role,
    };

    setUsers([...users, newUser]);
    setForm({ name: "", email: "", role: "Employee" });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Manage Users</h1>

      {/* Add User Form */}
      <form
        onSubmit={handleAddUser}
        className="bg-white shadow-md rounded-lg p-4 mb-6 max-w-lg"
      >
        <h2 className="text-lg font-medium mb-3">Add New Member</h2>
        <div className="mb-3">
          <label className="block text-sm mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
            placeholder="Enter full name"
          />
        </div>
        <div className="mb-3">
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
            placeholder="Enter email address"
          />
        </div>
        <div className="mb-3">
          <label className="block text-sm mb-1">Role</label>
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
          >
            <option value="Admin">Admin</option>
            <option value="GM">GM</option>
            <option value="Employee">Employee</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Add User
        </button>
      </form>

      {/* Users List */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-lg font-medium mb-3">User List</h2>
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="p-2 border">{user.name}</td>
                <td className="p-2 border">{user.email}</td>
                <td className="p-2 border">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam aperiam beatae cumque ratione error fugiat dicta, facere quia iure, est voluptatum debitis tenetur. Quia similique porro consequuntur veniam voluptatem sequi eaque velit repellendus quasi nostrum consequatur repellat veritatis aliquid odio debitis sapiente vitae voluptates, atque ut, placeat corporis autem, dolores alias ratione? Explicabo recusandae quae nulla dolore consequuntur enim repellendus optio quia odio! Eos porro impedit itaque ratione optio modi, debitis maxime, repudiandae inventore magnam voluptate ut qui blanditiis. Minima officiis, fuga voluptatem ipsa quod rerum laborum itaque reprehenderit? Reiciendis enim, earum totam aliquid aperiam ratione officia fugiat nemo soluta voluptatibus quia, saepe, quis ab? Quae asperiores, optio odio, temporibus maxime, accusamus beatae incidunt dignissimos voluptate enim eveniet magni tenetur corrupti. Sint dolorem eius dolorum modi quaerat commodi, obcaecati placeat maiores fuga quas, nulla quae atque perferendis pariatur quod, qui non! Fuga, ullam. Sequi praesentium repellendus libero? Doloribus, eveniet itaque earum in sit maiores debitis voluptate harum error veniam asperiores dicta est nobis facere excepturi. Eligendi fuga placeat hic corporis adipisci facere esse dicta praesentium est sint, ipsum reprehenderit quidem amet impedit voluptatibus maiores, molestiae dolorem? Possimus illum id ratione doloribus voluptatibus vitae fugit similique vel provident quisquam quaerat eum ullam error corrupti nemo aperiam odit dolor culpa ducimus, suscipit nobis dicta. Itaque nisi repellendus, vel possimus omnis consequatur harum perspiciatis, fugit quis similique minima officia exercitationem recusandae assumenda cum suscipit fugiat ullam accusamus placeat quam aperiam voluptatibus. Id culpa, maxime deleniti possimus provident ratione, dicta odio distinctio exercitationem eius nulla est, dolorem voluptatem. Iste, laborum! Non quia inventore tempora ipsum dicta debitis. Nulla doloribus quas magnam eligendi dolore quia quae reiciendis! Corporis autem molestiae assumenda corrupti rem consectetur nobis, vel iure inventore repellendus ad sit obcaecati nesciunt velit labore fugiat reiciendis reprehenderit quos esse impedit quisquam, eius harum. Odit ipsam vel cumque esse quam numquam labore facilis iste at reiciendis necessitatibus quis quia, magnam dignissimos, doloribus officiis optio voluptatibus cum, magni doloremque accusantium fugit dolores. Corporis, ratione dolorum accusantium quam doloremque non, distinctio aperiam unde soluta maiores rem quae facere nulla dolore ullam atque? Quos perspiciatis voluptate officia dolore velit recusandae, incidunt sequi quae adipisci porro non assumenda ullam aut alias quod. Itaque, reiciendis voluptatem earum pariatur ab ad delectus quam quis quas distinctio nemo tenetur atque at rerum beatae enim obcaecati praesentium? Odit in molestias quaerat, commodi quas magni repellat id nemo pariatur quod et quidem ducimus sed?</p>
    </div>
  );
}

export default Users;
