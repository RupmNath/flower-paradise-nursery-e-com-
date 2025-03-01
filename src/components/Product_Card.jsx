const Product_Card = ({ card_title, img_src, price, flower_description }) => {
    console.log(card_title, img_src, price, flower_description); // Debugging

    return (
        <div className="p-2">
            <div className="card text-center text-dark p-1">
                <img src={img_src} className="card-img-top rounded" alt="Product" />
                <div className="card-body">
                    <h3 className="card-title">{card_title}</h3>
                    <h4 className="d-flex justify-content-center align-items-center">
                        Price: {price}
                        <img src="/public/src/rupeeIcon.png" alt="rupee icon" />
                    </h4>
                    <p className="card-text">{flower_description}</p>
                    <a href="#" className="btn btn-success">Add To Cart</a>
                </div>
            </div>
        </div>
    );
};

export default Product_Card;
