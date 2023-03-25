const CustomIcon = ({ icon: IconComponent }: { icon: React.ElementType }) => {
  return <IconComponent sx={{ fontSize: '1.1rem', color: 'white' }} style={{ color: 'white', fontSize: '1.1rem', }} />;
};

export default CustomIcon;