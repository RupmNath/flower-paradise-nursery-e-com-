import Welcome_Heading from "../components/welcome_heading";
import Welcome_Para_Intro from "../components/Welcome_Para_Intro";
import Welcome_Para from "../components/welcome_para";
import "../styles/landing.css"

const Landing = () => {

    const land_heading = {
        heading: "Welcome To Flower Paradise Nursery",
        sub_text: "Where Green Meets Serenity",
        btn_link: "/products",
        btn_text: "Get Started"
    };

    const para_into = {
        intro_line: "Welcome To Flower Paradise Nursery, Where Green Meets Serenity"
    };

    const paragraphs = [
        {paragraph: "Our nursery is a haven for plant lovers, offering a wide variety of flowers and plants that bring vibrance and freshness to any space. Whether you're looking for colorful blooms to brighten your garden, aromatic flowers to fill your home with delightful fragrances, or lush greenery that purifies the air, we have something for everyone. Each plant is carefully nurtured to ensure it thrives in your home, garden, or workspace."},
        {paragraph: "At Paradise Nursery, we believe in the power of plants to enhance well-being and create a peaceful environment. Our collection includes exotic flowers, medicinal plants, indoor air-purifying greens, and seasonal favorites that add charm to any setting. Whether you're a gardening enthusiast or a beginner, our team is here to guide you in choosing the perfect plants that suit your space and needs. With easy care tips and expert advice, we make gardening an enjoyable and rewarding experience."},
        {paragraph: "More than just a nursery, Paradise Nursery is a place where nature lovers come together. We are committed to promoting a green lifestyle by encouraging sustainable planting and eco-friendly gardening practices. Our plants not only beautify your surroundings but also contribute to a healthier planet by improving air quality and reducing stress. Visit us and discover how our plants can transform your space into a refreshing oasis of serenity and natural elegance."},
        {paragraph: "Our nursery offers a diverse selection of high-quality flowers and plants, carefully grown to thrive in different environments. Whether you need low-maintenance indoor plants, fragrant flowers, or air-purifying greens, we ensure that each plant is healthy, vibrant, and ready to enhance your space. With expert guidance, personalized recommendations, and eco-friendly practices, we make plant shopping easy and enjoyable. Plus, our commitment to customer satisfaction means you’ll always receive the best care tips and support to help your plants flourish."},
        {paragraph: "Our process is designed to provide you with the best plants while ensuring sustainability. We begin by carefully selecting premium seeds and saplings, nurturing them in a controlled environment to promote healthy growth. Our team of skilled horticulturists monitors every stage, from planting and watering to pest control and soil enrichment, using organic and eco-friendly methods. Once the plants reach their optimal health, we make them available for purchase online and at our nursery. Whether you shop with us in person or online, we guarantee fresh, well-cared-for plants delivered with love."}
    ];

    return (
        <div className="row landing-background">
            {/* Left Section */}
            <div className="col-lg-4 col-12">
                <div className="custom-vh d-flex justify-content-center align-items-center">
                    <div className="col-11 mx-auto">
                    <Welcome_Heading 
                        heading={land_heading.heading}
                        sub_text={land_heading.sub_text}
                        btn_link={land_heading.btn_link}
                        btn_text={land_heading.btn_text}
                    />
                    </div>
                </div>
            </div>
    
            {/* Right Section */}
            <div className="col-lg-8 col-12">
                <div className="custom-vh d-flex flex-column justify-content-center align-items-center">
                    <div className="col-10 mx-auto intro">
                        <Welcome_Para_Intro intro_line={para_into.intro_line} />
                    </div>
    
                    {paragraphs.map((paras, index) => (
                        <div key={index} className="col-11 mx-auto">
                            <Welcome_Para paragraph={paras.paragraph} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
    
    
}

export default Landing;