import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { axiosInstance } from "../../helper/axiosInstance";

function Heart({ bookid }) {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = async () => {
    console.log(bookid);
    setIsLiked(!isLiked);

    if (!isLiked) {
      try {
        const response = await axiosInstance.post("/book/addfavorite", {
          bookid: bookid,
        });
        console.log(response.data);
        if (response.status === 200) {
          console.log("add favorite");
        }
      } catch (error) {
        console.log(error);
      }
    } else if (isLiked) {
      try {
        const response = await axiosInstance.delete(
          `/book/deletefavorite/${bookid}`,
          {
            data: { bookid: bookid },
          }
        );
        console.log(response.data);
        if (response.status === 200) {
          console.log("remove favorite");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    console.log(
      `The heart is now ${isLiked ? "liked (red)" : "not liked (gray)"}`
    );
  }, [isLiked]);

  return (
    <button
      onClick={handleClick}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        outline: "none",
        color: isLiked ? "red" : "gray",
      }}
      aria-label="Like or Unlike"
    >
      <FaHeart size={20} />
    </button>
  );
}

export default Heart;
