import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Home(){
    const [mainDish, setMainDish] = useState("");
    const [dessert, setDessert] = useState("");
    const [beverages, setBeverages] = useState("");
    const [price, setPrice] = useState("");
    const [menus, setMenus] = useState([
        {
            id:"1", mainDish:"Calamares", dessert:"Salad", beverages:"Tea", price:"399"
    
        },
        {
            id:"2", mainDish:"Buttered Shrimp", dessert:"Chocolate Cake", beverages:"Wine", price:"499"

        }]);
        const addMenu = () =>{
            const newMenu = {
                mainDish: mainDish, dessert: dessert, beverages:beverages, price:price,
            };
            setMenus((prev) => [...prev, newMenu]);
        }

    const handleDelete = (id ) => {
        setMenus(menus.filter(j => j.id !== id));
    };
    
    return(
        <div className="row m-5">
             <div className="card col-md-4 bg-dark p-3">
            <div className="card-header bg-warning">
            <h1>Add Menu</h1>
            </div>
            <div className="card-body">
            <form className=" form-group d-grid gap-2">
                    <input className="form-control mb-3" type="text" placeholder="Enter Main Dish" controlId="formMainDish" 
                    required onChange={(e) => setMainDish(e.target.value)}>
                    </input>
                    <input className="form-control mb-3" type="text" placeholder="Enter Dessert" controlId="formDessert" 
                    required onChange={(e) => setDessert(e.target.value)}>
                    </input>
                    <input className="form-control mb-3" type="text" placeholder="Enter Beverages" controlId="formBeverages" 
                    required onChange={(e) => setBeverages(e.target.value)}>
                    </input>
                    <input className="form-control mb-3" type="number" placeholder="Enter Price" controlId="formPrice" 
                    required onChange={(e) => setPrice(e.target.value)}>
                    </input>
                <button className="btn btn-primary" onClick={addMenu}>Add</button>
            </form>
            </div>
        </div>
        <div className="col-md-8">
            <table className="table table-bordered border-dark p-3">
                <thead className="bg-warning">
                    <tr>
                        <th>
                            Main Dish
                        </th>
                        <th>
                            Dessert
                        </th>
                        <th>
                            Beverages
                        </th>
                        <th>
                            Price
                        </th>
                        <th>
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                {
                    menus.map((menu, index)=>{
                        return(
                            <tr key={index}>
                                <td>
                                    {menu.mainDish}
                                </td>
                                <td>
                                    {menu.dessert}
                                </td>
                                <td>
                                    {menu.beverages}
                                </td>
                                <td>
                                    {menu.price}
                                </td>
                                <td><button className="btn btn-primary" onClick={() => handleDelete(menu.id)}>Delete</button></td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
            </div>
        </div>
    )
}
 export default Home;