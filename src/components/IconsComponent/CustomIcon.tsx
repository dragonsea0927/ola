const CustomIcon = ({ icon: IconComponent, className }: {
  icon: React.ElementType,
  className?: string
}) => {
  return <IconComponent className={className} />
};

export default CustomIcon;