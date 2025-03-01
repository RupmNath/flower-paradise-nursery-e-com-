import Product_Card from "./Product_Card";
import Rosemary from "../assets/plant_pics/rosemary.jpg";
import Lavender from "../assets/plant_pics/lavender.jpg";
import Oregano from "../assets/plant_pics/oregano.jpg";
import Jasmine from "../assets/plant_pics/jasmine.jpg";

const Aromatic = () => {
    const pcards = [
        { card_title: "Rosemary", img_src: Rosemary, price: "535", flower_description: "Rosemary is used as a seasoning and garnish in cooking." },
        { card_title: "Lavender", img_src: Lavender, price: "485", flower_description: "Lavender can be used to create a soothing scent in your home." },
        { card_title: "Oregano", img_src: Oregano, price: "520", flower_description: "Oregano is used in Mediterranean cuisine." },
        { card_title: "Jasmine", img_src: Jasmine, price: "415", flower_description: "An evergreen shrub with fragrant flowers, jasmine has a strong aroma." }
    ];

    return (
        <div className="container">
            <div className="col-12 text-center p-3">
                <h1>Aromatic</h1>
            </div>
            <div className="row">
                {pcards.map((card, index) => (
                    <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                        <Product_Card
                            card_title={card.card_title}
                            img_src={card.img_src}
                            price={card.price}
                            flower_description={card.flower_description}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Aromatic;
