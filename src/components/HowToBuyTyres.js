import bookyourappointment from "../images/bookyourappointment.png";
import tyreonlinee from "../images/tyreonlinee.png";
import mobiletyres from "../images/VisitUsorUseMobileTyreFitting.png";
import secureOnline from "../images/SecureOnline.png";

export default function HowToBuyTyres() {
    // Data array for dynamic rendering
    const steps = [
        {
            image: tyreonlinee,
            title: "Select Your Tyres Online",
            description: "Find the right Tyres for vehicle using our easy online search tool"
        },
        {
            image: bookyourappointment,
            title: "Book Your Appointment",
            description: "Choose convenient time for Tyre Fitting"
        },
        {
            image: mobiletyres,
            title: "Mobile Tyre Fitting",
            description: "Get expert Tyre fitting at home or at our workshop"
        },
        {
            image: secureOnline,
            title: "Secure Online Payment",
            description: "Pay safely online with our secure payment gateway."
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
