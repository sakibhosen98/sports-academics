


import SingleClass from "./singleClass";
import useClass from "../../hooks/useClass";
import { Helmet } from "react-helmet-async";

const Classes = () => {
  const [classes, , ] = useClass();
  // console.log('test classes', classes)
  const allClasses = classes.filter(singleClasses => singleClasses.roles === 'approved')


  // console.log(classes)

  return (
    <>
    <Helmet>
      <title>Sports Academies | Classes</title>
    </Helmet>
    <div className="grid md:grid-cols-3 gap-3">
       {
        allClasses.map(singleClass => <SingleClass
        key={singleClass._id}
        singleClass={singleClass}
        ></SingleClass>)
       }
    </div>
    </>
  );
};

export default Classes;