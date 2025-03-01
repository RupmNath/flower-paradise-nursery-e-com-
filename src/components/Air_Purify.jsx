import PeaceLily from "../assets/plant_pics/peace_lily.jpg";
import TransvaalDaisy from "../assets/plant_pics/transvaal_daisy.jpg";
import SpiderPlant from "../assets/plant_pics/spider_plant.jpg";
import ChineseEvergreen from "../assets/plant_pics/chinese_evergreen.jpg";
import PinkPeachLily from "../assets/plant_pics/pink_peach_lily.jpg";

const Air_Purify = () => {
    const pcards = [
        { card_title: "Peach Lilly", img_src: PeaceLily, price: "835", flower_description: "Helps purify the air in homes, especially in urban areas." },
        { card_title: "Transvaal Daisy", img_src: TransvaalDaisy, price: "785", flower_description: "Can help cleanse the air of benzene and trichloroethylene." },
        { card_title: "Spider Plant", img_src: SpiderPlant, price: "620", flower_description: "Can remove up to 90% of formaldehyde from the air." },
        { card_title: "Chinese Evergreen", img_src: ChineseEvergreen, price: "725", flower_description: "Known for removing Benzene and Formaldehyde toxins" },
        { card_title: "Pink Peach Lily", img_src: PinkPeachLily, price: "915", flower_description: "Helps purify the air in homes, especially in urban areas." }
    ];

    return (
        <div className="container">
            <div className="col-12 text-center p-3">
                <h1>Purify</h1>
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

export default Air_Purify;
