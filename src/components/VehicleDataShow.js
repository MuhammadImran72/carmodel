import React, { useEffect, useState } from "react";

const VehicleDataShow = () => {
  const [vehicleData, setVehicleData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVehicleData = async () => {
      try {
        const response = await fetch(
          "https://uk1.ukvehicledata.co.uk/api/datapackage/VehicleData?v=2&api_nullitems=1&auth_apikey=998e3f75-5dc6-4aa8-8dbb-e26cf3c30327&user_tag=&key_VRM=DN07%20AMV"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch vehicle data");
        }

        const data = await response.json();
        setVehicleData(data.Response.DataItems);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchVehicleData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Vehicle Data</h1>
      {vehicleData ? (
        <div>
          <h2>Identification</h2>
          <p>
            Is Electric Vehicle:{" "}
            {vehicleData.UkvdEnhancedData.Identification.IsElectricVehicle
              ? "Yes"
              : "No"}
          </p>

          <div className="container">
            <div className="row">
              
              <div className="col-lg-4">
              <h2>Technical Details</h2>
                <p>Make: {vehicleData.ClassificationDetails.Smmt.Make}</p>
                <p>Model: {vehicleData.ClassificationDetails.Dvla.Model}</p>
                <p>
                  Year Of Manufacture:{" "}
                  {vehicleData.VehicleRegistration.YearOfManufacture}
                </p>
                <p>
                  Engine number: {vehicleData.VehicleRegistration.EngineNumber}
                </p>
                <p>Colour: {vehicleData.VehicleRegistration.Colour}</p>{" "}
              </div>
              <div className="col-lg-4">
                <h2>SMMT details</h2>
                <p>Series: {vehicleData.SmmtDetails.Series}</p>
                <p>
                 Fuel Type : 
                  {vehicleData.SmmtDetails.FuelType}
                </p>
                <p>
                  Number of Doors:{" "}
                  {vehicleData.TechnicalDetails.Dimensions.NumberOfDoors}
                </p>

                <p>
                  Number of Seats:{" "}
                  {vehicleData.TechnicalDetails.Dimensions.NumberOfSeats}
                </p>

            
              </div>
              <div className="col-lg-4">
                <h2>Performance</h2>
                <p>
                  Power: {vehicleData.TechnicalDetails.Performance.Power.Bhp}{" "}
                  BHP
                </p>
                <p>
                  Torque: {vehicleData.TechnicalDetails.Performance.Torque.Nm}{" "}
                  Nm
                </p>
                <p>
                  Max Speed:{" "}
                  {vehicleData.TechnicalDetails.Performance.MaxSpeed.Mph} mph
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default VehicleDataShow;
