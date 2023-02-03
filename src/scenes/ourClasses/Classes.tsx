interface Props {
  name: string;
  description?: string;
  image: string;
}

const Classes = ({ name, description, image }: Props) => {
  const overLay = `p-5 absolute z-30 flex gap-2
    h-[380px] w-[450px] flex-col items-center justify-center
    whitespace-normal bg-primary-500 text-center text-white
    opacity-0 transition duration-500 hover:opacity-90`;
  return (
    <li className={` relative  mx-5 inline-block h-[380px] w-[450px]`}>
      <div className={overLay}>
        <p className=" text-2xl font-bold  ">{name}</p>
        <p className={` text-sm`}>{description}</p>
      </div>
      <img src={image} alt="image" />
    </li>
  );
};

export default Classes;
