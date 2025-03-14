import bookyourappointment from "../images/bookyourappointment.png";
import tyreonlinee from "../images/tyreonlinee.png";
import mobiletyres from "../images/VisitUsorUseMobileTyreFitting.png";
import secureOnline from "../images/SecureOnline.png";

export default function HowToBuyTyres() {
    // Data array for dynamic rendering
    const steps = [
        {
            image: tyreonlinee,
            title: "Find the Right Tyres",
            description: "Use our easy online tool or contact us directly to find the perfect tyres for your vehicle, whether it’s for a car, van, or 4x4."
        },
        {
            image: bookyourappointment,
            title: "Book Your Fitting Appointment",
            description: "Choose a time and place that suits you. Our mobile tyre fitters will come to your preferred location."
        },
        {
            image: mobiletyres,
            title: "Get Your Tyres Fitted",
            description: "Our team will arrive on time to fit your new tyres quickly and professionally, ensuring everything is road-safe."
        },
        {
            image: secureOnline,
            title: "Enjoy Hassle-Free Service",
            description: "Pay securely online or on-site, and hit the road with confidence, knowing your tyres are fitted by professionals."
        }
    ];

    return (
<>


        <section className="commonhomepagespacetopandbottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                    <div className="commonheading ">
              <h3> How to Buy Tyres From Us?</h3>
            </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="buytypresss">
            <div className="container-fluid">
                <div className="row">
                    {steps.map((step, index) => (
                        <div className="col-lg-3" key={index}>
                            <div className="buymainbox">
                                <img src={step.image} alt={step.title} className="img-fluid" />
                                <h5>{step.title}</h5>
                                <p>{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </>
    );
}
