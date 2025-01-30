import Bridgestone from "../images/bridgestone-logo.png";
import Apollo from "../images/apollo-logo.png";
import Bfgoodrih from "../images/bfgoodrich-logo.png";
import Tyrecompany from "../images/tyrescompany.png";

const tyreCompanyData = [
  {
    id: 1,
    logo: Bridgestone,
    name: "Bridgestone Potenza S001",
    car: "BMW",
    description: "The Aspire XP has been designed to provide a safe and comfortable drive on both wet and dry roads.",
    features: [
      "Better handling and braking on wet.",
      "High steering response accuracy.",
      "Improved safety and comfort.",
    ],
  },
  {
    id: 2,
    logo: Apollo,
    name: "Efficient Grip Performance 2",
    car: "Audi",
    description: "The Aspire XP has been designed to provide a safe and comfortable drive on both wet and dry roads.",
    features: [
      "Better handling and braking on wet.",
      "High steering response accuracy.",
      "Improved safety and comfort.",
    ],
  },
  {
    id: 3,
    logo: Bfgoodrih,
    name: "Ecowing ES31",
    car: "Nissan",
    description: "The Aspire XP has been designed to provide a safe and comfortable drive on both wet and dry roads.",
    features: [
      "Better handling and braking on wet.",
      "High steering response accuracy.",
      "Improved safety and comfort.",
    ],
  },
];

export default function TyresCompany() {
  return (
    <section className="commonhomepagespacetopandbottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="commonheading spacebtm">
              <h3> Tyres Companies</h3>
            </div>
          </div>
        </div>
        <div className="row">
          {tyreCompanyData.map((tyre) => (
            <div key={tyre.id} className="col-lg-4 maintyrcompanybox">
              <div className="imagesamebox">
                <img src={tyre.logo} className="companylogo" alt={tyre.name} />
                <img
                  src={Tyrecompany}
                  className="tyrecompanylogo"
                  alt="Tyrecompany"
                />
              </div>
              <h3>{tyre.name}</h3>
              <h5>{tyre.car}</h5>
              <p>{tyre.description}</p>
              <ul>
                {tyre.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
