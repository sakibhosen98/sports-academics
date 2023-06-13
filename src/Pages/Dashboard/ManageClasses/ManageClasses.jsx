import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const ManageClasses = () => {

  const {data: classes = [], refetch} = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/classes')
      return res.json();
    }
  })

  console.log( 'manage classes', classes)

  const handleMakePending = singleClass => {
    fetch(`http://localhost:5000/classes/pending/${singleClass._id}`, {
      method: 'PATCH'
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.modifiedCount){
        refetch()
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `${singleClass.name} is an Pending Now!`,
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  }

  const handleMakeApproved = singleClass => {
    fetch(`http://localhost:5000/classes/approved/${singleClass._id}`, {
      method: 'PATCH'
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.modifiedCount){
       refetch()
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `${singleClass.name} is an approved Now!`,
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  }

  const handleDeny = singleClass => {
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
          refetch()
            fetch(`http://localhost:5000/classes/${singleClass._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                  console.log(data)
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'singleClass has been deny.',
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
        <title>Storts Academies | Manage classes</title>
      </Helmet>
      <h2 className="text-3xl font-semibold">Total classes: {classes.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-xl">
            <tr>
              <th>#</th>
              <th>Class image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Pending</th>
              <th>Approved</th>
              <th>Deny</th>
            </tr>
          </thead>
          <tbody>
            {
              classes.map((singleClass, index) => <tr key={singleClass._id}>
                <th>{index + 1}</th>
                <td><img src={singleClass.classImg} className="w-[60px] rounded-full"  alt="" /></td>
                <td>{singleClass.className}</td>
                <td>{singleClass.instructorName}</td>
                <td>{singleClass.instructorEmail}</td>
                <td>
                  {
                    singleClass.role == 'pending' ? 'pending'  : singleClass.role === 'approved' ? 'approved' : 'deny'
                  }
                </td>
                <td><button onClick={() => handleMakeApproved(singleClass)} className="btn btn-sm text-white bg-[#6a6af3]">Pending</button></td>
                <td><button onClick={() => handleMakePending(singleClass)} className="btn btn-sm text-white bg-[#6a6af3]">Approved</button></td>
                <td><button onClick={() => handleDeny(singleClass)} className="btn btn-ghost bg-red-600">Deny</button></td>
              </tr>)
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;
