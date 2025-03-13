import experttyrefiting from "../images/ExpertTyreFittingServices.png";
import mobiletyres from "../images/ExtensiveTyreRange.png";
import faircompetive from "../images/FairCompetitivePricing.png";
import customersatisfaction from "../images/CustomerSatisfactionGuaranteed.png";

export default function WhyChooseUs() {
    const steps = [
        {
            image: experttyrefiting,
            title: "Expert Tyre Fitting Services",
            description: "Find the right Tyres for vehicle using our easy online search tool"
        },
        {
            image: mobiletyres,
            title: "Extensive Tyre Range",
            description: "Choose a convenient time for Tyre Fitting"
        },
        {
            image: faircompetive,
            title: "Fair & Competitive Pricing",
            description: "Get the best deals for vehicle Tyres without compromising quality"
        },
        {
            image: customersatisfaction,
            title: "Customer Satisfaction Guaranteed",
            description: "We are committed to providing the best customer service"
        }
    ];

    return (
        <section className="commonhomepagespacetopandbottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="commonheading spacebtm">
                            <h3>Why Choose Us?</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {steps.map((step, index) => (
                        <div className="col-lg-3 col-md-6 col-sm-12 whychoosemain" key={index}>
                            <div className="text-center">
                                <img src={step.image} alt={step.title} className="img-fluid" />
                                <h5>{step.title}</h5>
                                <p>{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
