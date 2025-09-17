import { Produtos } from "../components/Produtos";

const products = Array.from({ length: 8}).map((_, i) => ({
    id: i,
    title: `Produto número ${i + 1}`,
    price: (Math.random() * 100).toFixed(2),
    rating: (Math.random() * 5).toFixed(1),
    tag: i % 2 === 0 ? 'Novo' : 'Promo',
}))



export function Home() {
    return(
        <main className="home">
            <div className="grid">
                {products.map((p) => (
                    <Produtos key={p.id} produto={p}/>
                ))}
            </div>
        </main>
    )
}