import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";


const AddClass = () => {
  const {user} = useContext(AuthContext);
  console.log(user)
  
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const className = form.className.value;
    const classImg = form.url.value;
    const availableSeat = form.seat.value;
    const price = form.price.value;

    console.log(className, classImg, availableSeat, price)

    const classes = {
      className,
      classImg,
      availableSeat,
      price,
      instructorName: user?.displayName,
      instructorEmail: user?.email
    }

    console.log(classes)

    fetch('http://localhost:5000/instructors', {
      method: 'POST',
      headers: {
       
     'content-type': 'application/json'
      },
      body: JSON.stringify(classes)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.insertedId){
        Swal.fire({
          title: 'success!',
          text: 'Class Added Successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
       }
  
    })



    // fetch('http://localhost:5000/instructors', {
    //   method: 'POST',
    //   headers: {
    //     'content-type': 'application/json'
    //   },
    //   body: JSON.stringify(classes)
    // })
    // .then(res => res.json())
    // .then(data => {
    //   console.log(data)
    // })

    // Swal.fire({
    //   title: 'User create successful',
    //   showClass: {
    //     popup: 'animate__animated animate__fadeInDown'
    //   },
    //   hideClass: {
    //     popup: 'animate__animated animate__fadeOutUp'
    //   }
    // });

  }

    
  
  return (
    <div className="bg-[#e4cda3]">
      <h2 className="text-3xl font-bold py-5 text-center">Instructor Input Here</h2>
      <form onSubmit={handleSubmit} className="p-8">
        <div className="flex gap-3">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">Name</span>
            </label>
            <input
              type="text"
              name="className"
              placeholder="Class Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">Image</span>
            </label>
            <input
              type="url"
              name="url"
              placeholder="url"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="flex gap-3">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">Available Seats</span>
            </label>
            <input
              type="number"
              name="seat"
              placeholder="Seat"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">Price</span>
            </label>
            <input
              type="number"
              name="price"
              placeholder="price"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control">
            <input
              type="submit"
              value="Add Class"
              className="btn bg-[#e0970f] mt-4"
            />
          </div>
      </form>
    </div>
  );
};

export default AddClass;

{
  /* <Helmet>
        <title>Starts Academies | AddClass</title>
      </Helmet> */
}
