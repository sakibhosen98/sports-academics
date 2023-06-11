import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt } from "react-icons/fa";
// import { useQuery } from "react-query";

const ManageUser = () => {
  const [users, setUsers] = useState([]);

  // const {data: allUsers = [], refetch} = useQuery({
  //   queryKey: ["users"],
  //   queryFn: async () => {
  //     const res = await fetch('http://localhost:5000/users')
  //     return res.json();
  //   }
  // })

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  console.log(users)

  const handleDelete = (user) => {

  }

  const handleMakeAdmin = id => {
    fetch(`http://localhost:5000/users/admin/${id}`, {
      method: 'PATCH'
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      // if()
    })
  }

  return (
    <div className="w-full">
      <Helmet>
        <title>Storts Academies | Manage users</title>
      </Helmet>
      <h2 className="text-3xl font-semibold">Total Users: {users.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Instructor</th>
              <th>Admin Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, index) => <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {
                    user.role == 'admin' ? 'admin'  : 'student'
                  }
                </td>
                <td><button className="btn btn-sm text-white bg-[#6a6af3]">Made Instructor</button></td>
                <td><button onClick={() => handleMakeAdmin(user._id)} className="btn btn-sm text-white bg-[#6a6af3]">Made Admin</button></td>
                <td><button onClick={() => handleDelete(user)} className="btn btn-ghost bg-red-600"><FaTrashAlt></FaTrashAlt></button></td>
              </tr>)
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
