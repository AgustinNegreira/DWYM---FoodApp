import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ViewDetails.css";

export function ViewDetails() {
    const params = useParams();
    const [food, setFood] = useState();
    const navigate = useNavigate();

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
        <div className="content">
            {food ? (
                <div>
                    <h1>{food.name}</h1>
                    <span className="food-emoji-detail">{food.img}</span>
                    <p>Precio: {food.price}</p>
                    <p>Cantidad: {food.stock}</p>
                    <p>{food.description}</p>
                    <button className="back-button" onClick={() => navigate("/")}>Volver</button>
                </div>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    )
}