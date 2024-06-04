import Image from "next/image";
import { Inter } from "next/font/google";
import PrototypeImage from "../assets/prototype.jpeg";
// import FoodCover from "../assets/cover-makanan.jpg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <main>
            <section
                id="home"
                className="cover-makanan h-screen w-full bg-cover bg-no-repeat bg-center bg-blend-multiply text-center py-20"
                // style={{ backgroundImage: `url(${FoodCover})` }}
            >
                <h2 className="lg:text-4xl text-2xl font-bold mb-4 mt-32 text-white font-serif lg:px-72">
                    Jaga Lingkungan Mulai Dari Menghabiskan Makanan
                </h2>
                <hr className="mb-8 text-white w-72 mx-auto"></hr>
                <a
                    href="#about"
                    className="text-lg hover:text-xl bg-white bg-opacity-0 hover:bg-opacity-100 border-2 border-white hover:text-black text-white py-2 px-4"
                >
                    Explore More
                </a>
            </section>
            <section id="about" className="bg-green-100 h-full w-full p-20">
                <div className="lg:inline-flex">
                    <Image
                        alt="prototype"
                        src={PrototypeImage}
                        className="lg:h-[400px] lg:w-[400px] w-60 h-60"
                    />
                    <h2 className="lg:inline-block lg:ml-20 lg:text-justify lg:text-xl my-20">
                        Rasa Tak Terbuang bukan sekadar aplikasi jual beli
                        makanan biasa. Aplikasi ini memberikan platform bagi
                        para penjual makanan untuk menawarkan sisa makanan
                        mereka dengan harga yang lebih murah kepada konsumen.
                        Dengan demikian, Rasa Tak Terbuang membantu para penjual
                        makanan untuk meminimalkan kerugian akibat sisa makanan
                        yang tidak terjual, sekaligus memberikan kesempatan bagi
                        konsumen untuk mendapatkan makanan berkualitas dengan
                        harga yang lebih terjangkau.
                    </h2>
                </div>
            </section>
        </main>
    );
}
