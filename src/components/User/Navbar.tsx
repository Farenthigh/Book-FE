import logo from "../../assets/Component 12.png";

const Navbar = () => {
  return (
    <div className="p-10 flex flex-row w-full justify-between">
      <img src={logo} alt="logo" />
      <input
        type="text"
        className="rounded-full bg-primarycontainer w-2/5 border-none"
      />
      <div className="flex justify-end gap-4">
        <button className="rounded-full  px-5 bg-primary text-white h-10 py w-15">
          Register
        </button>
        <button className="rounded-full  px-8 bg-primary text-white h-10">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
