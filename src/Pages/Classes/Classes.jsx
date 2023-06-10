import { useEffect, useState } from "react";
import SingleClass from "./singleClass";

const Classes = () => {
  const [classes, setClasses] = useState([]);

  useEffect( () => {
    fetch('http://localhost:5000/classes')
    .then(res => res.json())
    .then(data => setClasses(data))
  },[])

  console.log(classes)

  return (
    <div className="grid md:grid-cols-3 gap-3">
       {
        classes.map(singleClass => <SingleClass
        key={singleClass._id}
        singleClass={singleClass}
        ></SingleClass>)
       }
    </div>
  );
};

export default Classes;