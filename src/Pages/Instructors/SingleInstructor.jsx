
const SingleInstructor = ({instructor}) => {
  // console.log(updateUserProfile)

  const {name, email, photoURL} = instructor;
  // console.log(instructor)
  return (
    <div className="mt-12">
      <div className="card w-full mx-auto bg-base-200 shadow-xl">
        <figure>
          <img
            src={photoURL}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Instructor Name: {name}</h2>
          <p>Email: {email}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleInstructor;
