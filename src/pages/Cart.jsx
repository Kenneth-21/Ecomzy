import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Item from "../components/Item";
function Cart(){
    const {cart} = useSelector((state)=>state)
    return (
        <div>
            {
                cart.length === 0 ? 
                (   
                    <div>
                        <div>NO ITEMS FOUND</div>
                        <Link><button>SHOP NOW</button></Link>
                    </div>
                ) : 
                (
                    <div className="w-[1200px] mx-auto pt-24">
                        <div className="w-[60%] flex flex-col items-center gap-5">
                            {
                                cart.map((item)=>{
                                    return <Item item={item}/>
                                })
                            }
                        </div>
                        <div>
                            <h1>YOUR SUMMARY</h1>

                        </div>
                    </div>
                )
            }
        </div>
    )
}
export default Cart;