import { Link } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineHome } from "react-icons/ai";
import logo from '../assets/logo.png';
import { useSelector } from "react-redux";
export default function NavBar(){
    const {cart} = useSelector((state)=>state);
    return (
        <div className="flex w-screen mx-auto w-screen px-10 justify-between bg-slate-900 py-2 leading-4 fixed top-0">
            <div className=""><Link to="/"><img src={logo} width={150}/></Link></div>
            <div className="flex text-white items-center text-4xl gap-8">
                <Link to="/">
                    <AiOutlineHome/>
                </Link>
                <Link to="/cart" className="relative">
                    <AiOutlineShoppingCart/>
                    {
                        cart.length > 0 && 
                        <span className="absolute text-sm top-0 right-0 w-5 h-5 rounded-full flex justify-center items-center bg-green-600 animate-bounce">{cart.length}</span>
                    }
                </Link>
            </div>
        </div>
    )
}