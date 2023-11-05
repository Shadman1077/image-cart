import { useTitle } from "../hooks/useTitle";
import { ProductCard } from "../components";

export const Home = () => {
  useTitle("Home");

  const products = [
    {"id": 1, "name": "Headphone Bluetooth Wireless", "price": 149, "image": "/assets/images/1001.png"},
    {"id": 2, "name": "boAt  450", "price": 49, "image": "/assets/images/1002.png"},
    {"id": 3, "name": "JBL ", "price": 179, "image": "/assets/images/1003.png"},
    {"id": 4, "name": "Logitech H111 Wired", "price": 39, "image": "/assets/images/1004.png"},
    {"id": 5, "name": "APPLE Airpods Max Bluetooth Headset", "price": 199, "image": "/assets/images/1005.png"},
    {"id": 6, "name": "ZEBRONICS Zeb-Thunder Wired", "price": 29, "image": "/assets/images/1006.png"},
    {"id": 7, "name": "APPLE WATCH", "price": 29, "image": "/assets/images/1007.png"},
    {"id": 8, "name": "APPLE Watch2", "price": 29, "image": "/assets/images/1008.png"},
    {"id": 9, "name": "APPLE watch s", "price": 29, "image": "/assets/images/1009.png"},
    {"id": 10, "name": "BI cycle", "price": 29, "image": "/assets/images/1010.png"},
    {"id": 11, "name": "TELEPONE Wired", "price": 29, "image": "/assets/images/1011.png"},
  ]

  return (
    <main>
      <section className="products">
        { products.map((product) => (
          <ProductCard key={product.id} product={product} />
        )) }        
      </section>
    </main>
  )
}
