import tyresData from "../components/TyreData";
import Tyres from "../components/Tyres";

export default function TyresBrand() {
  // Categorizing tyres based on price range
  const budgetTyres = tyresData.filter((tyre) => tyre.tyrePrice < 60);
  const midRangeTyres = tyresData.filter(
    (tyre) => tyre.tyrePrice >= 60 && tyre.tyrePrice < 100
  );
  const premiumTyres = tyresData.filter((tyre) => tyre.tyrePrice >= 100);

  return (
    <section className='commonhomepagespacetopandbottom'> 
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2>Budget Tyres</h2>
            <Tyres tyres={budgetTyres} />

            <h2>Mid-Range Tyres</h2>
            <Tyres tyres={midRangeTyres} />

            <h2>Premium Tyres</h2>
            <Tyres tyres={premiumTyres} />
          </div>
        </div>
      </div>
    </section>
  );
}
