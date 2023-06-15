import { useEffect, useState } from "react";
import SingleInstructor from "./SingleInstructor";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("https://sports-academies-server-eta.vercel.app/users")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);
  const allInstructors = instructors.filter(instructor => instructor.role === 'instructor')
  return (
    <div className="">
      <h2 className="text-center">{instructors.length}</h2>
      <div className="grid md:grid-cols-3 gap-3">
        {allInstructors.map((instructor) => (
          <SingleInstructor
            key={instructor._id}
            instructor={instructor}
          ></SingleInstructor>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
