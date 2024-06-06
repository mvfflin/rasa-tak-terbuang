import Image from "next/image";
import { Inter } from "next/font/google";
import PrototypeImage from "../assets/prototypecuk.png";
import Proto1 from "../assets/prototype.jpeg";
import logoRTT from "../../public/logo-big-nobg.png";
import { useEffect, useState } from "react";
import PersonNull from "../assets/person-placeholder.jpg";
import Person from "@/types/person";
import foto from "@/types/fotos";
// import FoodCover from "../assets/cover-makanan.jpg";

const inter = Inter({ subsets: ["latin"] });

const HomeTexts = [
    "Jaga Lingkungan Mulai Dari Menghabiskan Makanan",
    "Kurangi Limbah Sisa Makanan",
    "Ayo Habiskan Makananmu!",
];

const teams: Array<Person> = [
    {
        nama: "Hana Triyanti S.",
        role: "CEO",
        image: foto.HanaJPG,
    },
    {
        nama: "Danendra Rayya N.",
        role: "Manager",
        image: foto.DanenJPG,
    },
    {
        nama: "Fatihul Ihsan R.",
        role: "App Production",
        image: foto.FatihJPG,
    },
    {
        nama: "Athar Faiz S.",
        role: "Raja Iblis",
        image: foto.AtharJPG,
    },
    {
        nama: "Yusuf Ihsan M.",
        role: "Marketing Team",
        image: foto.YusufJPG,
    },
    {
        nama: "Callista Ciencia G.",
        role: "Marketing Team",
        image: foto.CienJPG,
    },
    {
        nama: "Fatimah Zahra",
        role: "Marketing Team",
        image: foto.FatimJPG,
    },
];

export default function Home() {
    const [textindex, setTextIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(
            () => setTextIndex((index) => index + 1),
            5000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <main>
            <section
                id="home"
                className="cover-makanan h-screen w-full bg-cover bg-no-repeat bg-center bg-blend-multiply text-center py-52"
                // style={{ backgroundImage: `url(${FoodCover})` }}
            >
                <Image
                    alt="logo-rtt"
                    src={logoRTT}
                    className="h-auto w-20 absolute top-0 mt-4 md:ml-20 ml-7"
                />
                <h2 className="md:text-5xl text-2xl mb-20 text-white lg:px-60 leading-5 px-14 md:mt-24 lg:mt-0 font-lustria">
                    {HomeTexts[0]}
                </h2>
                {/* <hr className="mb-8 text-white lg:w-96 w-auto mx-auto"></hr> */}
                <a
                    href="#about"
                    className="lg:text-lg lg:hover:text-xl bg-white bg-opacity-0 hover:bg-opacity-100 border-2 border-white hover:text-black text-white py-2 mt-20 px-14"
                >
                    SEE MORE
                </a>
            </section>
            <section id="about" className="bg-orange-50 h-full w-full">
                <div className="lg:inline-flex">
                    <div className="lg:inline-block lg:mr-20 text-justify lg:text-xl p-20">
                        <h1 className="text-4xl my-5 font-garet">
                            What is Rasa Tak Terbuang?
                        </h1>
                        <h2 className="font-garet">
                            Rasa Tak Terbuang bukan sekadar aplikasi jual beli
                            makanan biasa. Aplikasi ini memberikan platform bagi
                            para penjual makanan untuk menawarkan sisa makanan
                            mereka dengan harga yang lebih murah kepada
                            konsumen. Dengan demikian, Rasa Tak Terbuang
                            membantu para penjual makanan untuk meminimalkan
                            kerugian akibat sisa makanan yang tidak terjual,
                            sekaligus memberikan kesempatan bagi konsumen untuk
                            mendapatkan makanan berkualitas dengan harga yang
                            lebih terjangkau.
                        </h2>
                    </div>
                    <Image
                        alt="prototype"
                        src={Proto1}
                        className="lg:h-full w-full h-full"
                    />
                </div>
            </section>
            <section
                id="team"
                className="bg-orange-100 h-full w-full py-20 px-20"
            >
                <h1 className="lg:text-5xl text-3xl text-green-950 font-bold text-center font-garet">
                    Meet our team.
                </h1>
                <div className="lg:flex-row flex-col h-full flex flex-wrap gap-20 mt-20 mx-auto justify-center">
                    {teams.map((person, index) => {
                        return (
                            <div
                                className="flex flex-col items-center font-garet"
                                key={index}
                            >
                                <Image
                                    src={person.image}
                                    className="h-40 w-40 rounded-full object-cover border-4 border-orange-300"
                                    alt="foto1"
                                />
                                <h1 className="text-xl font-bold text-center">
                                    {person.nama}
                                </h1>
                                <h1 className="text-md font-semibold text-center">
                                    {person.role}
                                </h1>
                            </div>
                        );
                    })}
                </div>
            </section>
            <section
                id="demo"
                className="cover-makanan-demo h-full w-full py-20 bg-cover bg-no-repeat bg-center bg-blend-multiply"
            >
                <h1 className="lg:text-5xl text-3xl text-white font-lustria font-bold text-center">
                    Our Promotional Video
                </h1>
                <iframe
                    className="items-center mx-auto mt-10 lg:w-1/2 lg:h-[500px]"
                    src="https://www.youtube.com/embed/QZgptNVIrRY?si=79rTC6ZoLFk1NXBF"
                    title="YouTube Video"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </section>
            <section id="about" className="bg-orange-50 h-auto w-full">
                <div className="lg:flex relative">
                    <Image
                        alt="prototype2"
                        src={PrototypeImage}
                        className="lg:h-[500px] lg:w-[600px] h-full object-cover"
                    />
                    <div className="lg:ml-5 lg:text-xl lg:p-12 p-10">
                        <h1 className="text-4xl my-5 font-garet">
                            Application
                            <br /> Prototype
                        </h1>
                        <ul className="font-garet space-y-5">
                            <li>
                                <h1 className="text-emerald-400 font-extrabold">
                                    Instagram
                                </h1>
                                <h2 className="text-black font-semibold">
                                    @rasatakterbuang
                                </h2>
                            </li>
                            <li>
                                <h1 className="text-emerald-400 font-extrabold">
                                    Website
                                </h1>
                                <h2 className="text-black font-semibold">
                                    rasatakterbuang.mvffin.my.id
                                </h2>
                            </li>
                            <li>
                                <h1 className="text-emerald-400 font-extrabold">
                                    YouTube
                                </h1>
                                <h2 className="text-black font-semibold">
                                    Rasa Tak Terbuang
                                </h2>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
}
