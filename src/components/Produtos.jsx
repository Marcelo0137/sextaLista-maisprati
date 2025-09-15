import { useEffect, useState } from "react";
import { IoIosHeartEmpty } from "react-icons/io";


export function Produtos({ produto }) {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const t = setTimeout(() => setLoading(false), 1200)
        return () => clearTimeout(t)
    }, [])

    if(loading) {
        return(
            <div className="card">
                <div className="card-img"></div>
                <div className="card-line"></div>
                <div className="card-line-short"></div>
                
            </div>
        )
    }

    return (
        <div className="card" tabIndex="0">
            <div className="card-igm">
                <img 
                src="" 
                alt="" 
                />
                <span className="tag">{produto.tag}</span>
            </div>
            <h2 className="title">{produto.title}</h2>
            <p className="price">R$ {produto.price}</p>
            <p aria-label={`Avaliação ${produto.rating} de 5`}>
                {"★".repeat(Math.floor(produto.rating))}
            </p>
            <div className="btn-group">
                <button className="btn-solid">Adicionar</button>
                <button className="btn-outline"><IoIosHeartEmpty /></button>
            </div>
        </div>
    )
}

