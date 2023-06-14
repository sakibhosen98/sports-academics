import useClass from "../../../hooks/useClass";
import MySingleClass from "./MySingleClasses";

const MyClasses = () => {
  const [classes, , ] = useClass();
  console.log(classes)
  return (
    <div className="grid md:grid-cols-3 gap-3">
       {
        classes.map(singleClass => <MySingleClass 
        key={singleClass._id}
        singleClass={singleClass}
        ></MySingleClass> )
       }
       <button>select</button>
    </div>
  );
};

export default MyClasses;