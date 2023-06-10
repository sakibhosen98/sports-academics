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
        <p className="text-xl">Instructor Name: {instructorName}</p>
        <p className="text-xl">Available Seats: {availableSeat}</p>
        <p className="text-xl"> Price: {price}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default SingleClass;
