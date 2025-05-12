import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ViewDetails.css";

export function ViewDetails() {
    const params = useParams();
    const [food, setFood] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = `http://localhost:3001/foods/${params.id}`;
                const response = await fetch(url);
                const data = await response.json();
                setFood(data);
            } catch (error) {
                console.error("Error al obtener datos:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {food ? (
                <div>
                    <h1>{food.name}</h1>
                    <span className="food-emoji-detail">{food.img}</span>
                    <p>{food.description}</p>
                    <p>Precio: {food.price}</p>
                    <p>cantidad: {food.stock}</p>

                </div>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    )
}