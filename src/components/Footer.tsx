import Icons from "./IconComponents/Icons";
const Footer = () => {
  const date = new Date();
  return (
    <footer className="flex flex-col items-center justify-center border-t-4 border-t-black bg-stone-300 text-center text-2xl text-black">
      <p>&copy; {date.getFullYear()}, Friedrich482, All rights reserved</p>
      <div className="mb-3 flex flex-row gap-2">
        <Icons />
      </div>
    </footer>
  );
};

export default Footer;
