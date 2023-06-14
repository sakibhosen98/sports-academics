import SingleClass from "./singleClass";
import useClass from "../../hooks/useClass";

const Classes = () => {
  const [classes, , ] = useClass();

  console.log(classes)

  return (
    <div className="grid md:grid-cols-3 gap-3">
       {
        classes.map(singleClass => <SingleClass
        key={singleClass._id}
        singleClass={singleClass}
        ></SingleClass>)
       }
       <button>select</button>
    </div>
  );
};

export default Classes;