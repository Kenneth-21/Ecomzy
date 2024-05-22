import { AiTwotoneDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart, dropFromCart } from "../redux/slices/cartSlice";
export default function Item({item}){
    const dispatch = useDispatch();
    return (
        <div className="flex items-center">
            <div className="w-[100%]">
                <img src={item.image}/>
            </div>
            <div className="flex flex-col gap-6">
                <div className="font-bold text-gray-700 text-lg">{item.title}</div>
                <div className="font-normal text-gray-400 text-[12px]">{item.description}</div>
                <div className="flex items-center justify-between">
                    <div className="text-green-600 font-bold">${item.price}</div>
                    <div onClick={()=>{dispatch(dropFromCart(item.id))}} className="text-red-700 bg-red-400 
                    text-2xl w-10 h-10 flex items-center 
                    justify-center cursor-pointer rounded-full"><AiTwotoneDelete/></div>
                </div>
            </div>
        </div>
    )
}