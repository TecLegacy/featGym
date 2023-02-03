interface Props {
  children: React.ReactNode;
  word?: string;
}

const HeadText = ({ children, word }: Props) => {
  // Check for nullish & Tranform uppercase
  word = word ?? 'No heading Found';
  const transformedText = word.toUpperCase();

  return (
    <div className={` basis-3/5 font-montserrat text-3xl font-bold`}>
      {children ? children : transformedText}
    </div>
  );
};

export default HeadText;
