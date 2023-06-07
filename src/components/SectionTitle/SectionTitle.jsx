
const SectionTitle = ({heading, subHeading}) => {
  return (
    <div className="md: w-3/12 text-center mx-auto my-8">
        <p className="text-orange-500 mb-2">{subHeading}</p>
        <h3 className="text-4xl font-bold">{heading}</h3>
    </div>
  );
};

export default SectionTitle;