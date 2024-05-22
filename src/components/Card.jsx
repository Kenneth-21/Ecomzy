import { useDispatch, useSelector } from "react-redux";
import { dropFromCart, addToCart } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export default function Spinner({ itemDetails }) {
    console.log(itemDetails);
  const { cart } = useSelector((state) => state);
  console.log(cart);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col items-center justify-between shadow-md hover:scale-110 hover:shadow-lg transition duration-500 ease-in p-6 rounded-lg gap-4 w-[275px]">
      <div className="text-gray-700 text-lg font-bold">{itemDetails.title.substr(0, 15)}...</div>
      <div className="font-normal text-gray-400 text-[12px]">{itemDetails.description.split(" ").slice(0, 10).join(" ")}...</div>
      <img loading="lazy" src={itemDetails.image} width={120}/>
      <div className="flex items center justify-between w-full ">
        <div className="text-green-600 font-bold">${itemDetails.price}</div>
        {cart.some((p) => p.id == itemDetails.id) ? (
          <button className="text-gray-700 border-2 border-gray-700 rounded-full text-[12px] font-bold px-2 hover:bg-gray-700 hover:text-white transition duration-500 ease-in"
            onClick={() => {
              dispatch(dropFromCart(itemDetails.id));
              toast.error("Item Removed!", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            }}
          >
            REMOVE ITEM
          </button>
        ) : (
          <button className="text-gray-700 border-2 border-gray-700 rounded-full text-[12px] font-bold px-2 hover:bg-gray-700 hover:text-white transition duration-500"
            onClick={() => {
              dispatch(addToCart(itemDetails));
              toast.success("ITEM ADDED!", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            }}
          >
            ADD TO CART
          </button>
        )}
      </div>
    </div>
  );
}
