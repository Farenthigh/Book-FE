// import Navbar from "./User/Navbar";
import Navbar from "./MainNavbar/Navbar";


type Props = {
  children: React.ReactNode;
};

const UserLayout: React.FC<Props> = (props) => {
  return (
    <>
      <main className="w-full">
        <Navbar/>
        <div>{props.children}</div>
      </main>
    </>
  );
};

export default UserLayout;
