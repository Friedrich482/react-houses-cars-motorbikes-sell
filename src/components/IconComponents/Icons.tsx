import Icon from "./Icon";
import IconsData from "./IconsData";
const Icons = () => {
  return (
    <>
      {IconsData.map(({ link, altText, id, logo }) => (
        <Icon link={link} id={id} altText={altText} logo={logo} />
      ))}
    </>
  );
};

export default Icons;
