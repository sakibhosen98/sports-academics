const SingleClass = ({singleClass}) => {
  console.log(singleClass)
  const {classImg,className,instructorName,availableSeat,price} = singleClass;
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
          <button className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4">Selected</button>
        </div>
      </div>
    </div>
  );
};

export default SingleClass;
