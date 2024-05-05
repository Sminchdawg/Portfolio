interface SectionHeaderProps {
  text: string;
}

const SectionHeader = ({ text }: SectionHeaderProps) => {
  return (
    <div className="bg-accent text-text p-3 rounded-md w-min text-nowrap">
      {text}
    </div>
  );
};

export default SectionHeader;
