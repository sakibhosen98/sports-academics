import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const MyClasses = () => {

  const {data: classes = [], refetch} = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/classes')
      return res.json();
    }
  })

  console.log( 'manage classes', classes)

  // const handleMakeApproved = singleClass => {
  //   fetch(`http://localhost:5000/classes/approved/${singleClass._id}`, {
  //     method: 'PATCH'
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data)
  //     if(data.modifiedCount){
  //       refetch()
  //       Swal.fire({
  //         position: 'top-end',
  //         icon: 'success',
  //         title: `${singleClass.name} is an admin Now!`,
  //         showConfirmButton: false,
  //         timer: 1500
  //       })
  //     }
  //   })
  // }

  const handleMakeApproved = singleClass => {
    console.log('singleclass',singleClass)
    fetch(`http://localhost:5000/classes/approved/${singleClass._id}`, {
      method: 'PATCH'
    })
    .then(res => res.json())
    .then(data => {
      console.log('instructor', data)
      if(data.modifiedCount){
       refetch()
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `${singleClass.name} is an instructor Now!`,
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  }

  const handleMakeDeny = singleClass => {
    fetch(`http://localhost:5000/classes/deny/${singleClass._id}`, {
      method: 'PATCH'
    })
    .then(res => res.json())
    .then(data => {
      console.log('pending', data)
      if(data.modifiedCount){
        refetch()
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `${singleClass.name} is an deny Now!`,
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  }


  return (
    <div className="w-full">
      <Helmet>
        <title>Storts Academies | Manage classes</title>
      </Helmet>
      <h2 className="text-3xl font-semibold my-4">Total classes: {classes.length}</h2>
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
              <th>Role</th>
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
                    singleClass.roles === 'approved' ? 'approved'  : singleClass.roles === 'deny' ? 'deny' : 'pending'
                  }
                </td>
                <td><button onClick={() => handleMakeApproved(singleClass)} className="btn btn-sm text-white bg-[#6a6af3]">Approved</button></td>
                <td><button onClick={() => handleMakeDeny(singleClass)} className="btn btn-sm text-white bg-[#6a6af3]">Deny</button></td>
              </tr>)
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClasses;

// import useClass from "../../../hooks/useClass";
// import MySingleClass from "./MySingleClasses";

// const MyClasses = () => {
//   const [classes, , ] = useClass();
//   console.log(classes)
//   return (
//     <div className="grid md:grid-cols-3 gap-3">
//        {
//         classes.map(singleClass => <MySingleClass 
//         key={singleClass._id}
//         singleClass={singleClass}
//         ></MySingleClass> )
//        }
//        <button>select</button>
//     </div>
//   );
// };

// export default MyClasses;

