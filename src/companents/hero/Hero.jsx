import React from "react";
import "./hero.scss"
import hero1 from "../../assets/hero1.jpg"
import hero2 from "../../assets/ayb.webp"
import hero3 from "../../assets/tel.webp"
import hero4 from "../../assets/telv.jpg"
import hero5 from "../../assets/hh.jpg"
const somebox = [
    {
        id: 1,
        url: hero1,
        title: "  Galaxy Z Fold6, 512GB (Unlocked)",
        price: 1200.,
        info: "From $1899,99 before eligible trade-in."
    },
    {
        id: 2,
        url: hero2,
        title: "Galaxy Buds3 Pro",
        price: 100.,
        info: "From $1899,99 before eligible trade-in."
    },
    {
        id: 3,
        url: hero3,
        title: "“Looks very natural, the smell is awesome”",
        price: 105.,
        info: "From $1899,99 before eligible trade-in."
    },
    {
        id: 4,
        url: hero4,
        title: "“Looks very natural, the smell is awesome”",
        price: 105.,
        info: "From $1899,99 before eligible trade-in."
    },
    {
        id: 5,
        url: hero5,
        title: "“Looks very natural, the smell is awesome”",
        price: 105.,
        info: "From $1899,99 before eligible trade-in."
    },
    {
        id: 6,
        url: hero1,
        title: "“Looks very natural, the smell is awesome”",
        price: 105.,
        info: "From $1899,99 before eligible trade-in."
    },
]
const Hero = () => {
    const hero = ["For You", "Top Deals", "Mobile", "TV & Audio", "Home Appliances", "Computing"]
    return (
        <div className="container">
            <div className="hero__theme">
                <p className="hero__p">Shop all latest offers and innovations</p>
                <p className="hero__desc">View all offers</p>

            </div>
            <div className="hero__text">
                {
                    hero?.map((el, endex) => (<p className="hero__key" key={endex}>{el}</p>))
                }
            </div>
            <div className="hero__wrapper">
                {
                    somebox.map((el) => (
                        <div key={el.id} className="hero__box">
                            <div className="hero__img">
                                <img src={el.url} alt="" />
                            </div>
                            <div className="hero__content">
                                <p className="hero__info">
                                    {el.title}
                                </p>
                                <p className="hero__save">
                                    Save Up to ${el.price}
                                </p>
                                <p className="hero__from">
                                    {el.info}
                                </p>
                                <button className="hero__btr">Buy now</button>
                                <button className="btr">New</button>
                            </div>


                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Hero