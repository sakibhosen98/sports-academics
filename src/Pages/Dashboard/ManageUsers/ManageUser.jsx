import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
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

  const handleMakeAdmin = user => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: 'PATCH'
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.matchedCount){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `${user.name} is an admin Now!`,
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  }

  const handleMakeInstructor = user => {
    fetch(`http://localhost:5000/users/instructor/${user._id}`, {
      method: 'PATCH'
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.matchedCount){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `${user.name} is an instructor Now!`,
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  }

  const handleDelete = user => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            fetch(`http://localhost:5000/users/${user._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                  console.log(data)
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'User has been deleted.',
                            'success'
                        )
                    }
                })
        }
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
          <thead className="text-xl">
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
                    user.role == 'admin' ? 'admin'  : user.role === 'instructor' ? 'instructor' : 'student'
                  }
                </td>
                <td><button onClick={() => handleMakeInstructor(user)} className="btn btn-sm text-white bg-[#6a6af3]">Make Instructor</button></td>
                <td><button onClick={() => handleMakeAdmin(user)} className="btn btn-sm text-white bg-[#6a6af3]">Make Admin</button></td>
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
