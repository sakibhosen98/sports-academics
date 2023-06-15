import { useQuery } from "@tanstack/react-query";

const MySelectedClass = () => {
  const {data: myClasses = [], } = useQuery({
    queryKey: ["myClasses"],
    queryFn: async () => {
      const res = await fetch('https://sports-academies-server-eta.vercel.app/myClasses')
      return res.json();
    }
  })
  // console.log(myClasses)
  return (
    <div>
        <h2>My Selected Class: {myClasses.length}</h2>
        <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-xl">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Class Name</th>
              <th>Price</th>
              <th>Payment</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              myClasses.map((singleClass, index) => <tr key={singleClass._id}>
                <th>{index + 1}</th>
                <td><img src={singleClass.classImg} className="w-[60px] rounded-full"  alt="" /></td>
                <td>{singleClass.className}</td>
                <td>{singleClass.price}</td>
                <td><button  className="btn btn-sm text-white bg-[#6a6af3]">Pay Now</button></td>
                <td><button  className="btn btn-ghost bg-red-600">Delete</button></td>
              </tr>)
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MySelectedClass;