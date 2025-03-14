import experttyrefiting from "../images/ExpertTyreFittingServices.png";
import mobiletyres from "../images/ExtensiveTyreRange.png";
import faircompetive from "../images/FairCompetitivePricing.png";
import customersatisfaction from "../images/CustomerSatisfactionGuaranteed.png";

export default function WhyChooseUs() {
    const steps = [
        {
            image: experttyrefiting,
            title: "Convenient Mobile Tyre Fitting",
            description: "We come to you—whether you're at home, work, or stuck on the road. Our mobile tyre fitting service saves you time and hassle."
        },
        {
            image: mobiletyres,
            title: "Extensive Tyre Range",
            description: "We stock a wide selection of new tyres, including 4x4 tyres, van tyres, winter tyres, and more to suit every vehicle and budget."
        },
        {
            image: faircompetive,
            title: "Affordable Prices",
            description: "We offer competitive prices on both cheap and premium tyre brands without compromising on quality."
        },
        {
            image: customersatisfaction,
            title: "24/7 Emergency Service",
            description: "Flat tyre in the middle of the night? We offer 24-hour mobile tyre fitting in London and surrounding areas for your peace of mind."
        }
    ];

    return (
        <section className="commonhomepagespacetopandbottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="commonheading spacebtm">
                            <h3>Why Choose CLM Tyres?</h3>
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
