
const SingleClass = ({singleClass}) => {
  console.log(singleClass)
  const {classImg,className,instructorName,availableSeat,price, _id} = singleClass;

  const handleMyClass = (id) => {
    fetch(`http://localhost:5000/myClass/${id}`, {
      method: 'PATCH'
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      // if(data.modifiedCount){
      //   refetch()
      //   Swal.fire({
      //     position: 'top-end',
      //     icon: 'success',
      //     title: `${user.name} is an admin Now!`,
      //     showConfirmButton: false,
      //     timer: 1500
      //   })
      // }
    })
  }

  return (
    <div className="card w-full mx-auto bg-base-200 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={classImg}
          alt=""
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-3xl"> {className}</h2>
        <p className="font-semibold">Instructor Name: {instructorName}</p>
        <p className="font-semibold">Available Seats: {availableSeat}</p>
        <p className="font-semibold"> Price: {price}</p>
        <div className="card-actions">
          <button onClick={() => handleMyClass(_id)} className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4">Selected</button>
        </div>
      </div>
    </div>
  );
};

export default SingleClass;
