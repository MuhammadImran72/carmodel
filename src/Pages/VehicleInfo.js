import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const VehicleInfo = ({ regNumber, cart, setCart }) => {

  const navigate = useNavigate();
  const [vehicleData, setVehicleData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchVehicleData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://uk1.ukvehicledata.co.uk/api/datapackage/TyreData`,
        {
          params: {
            v: 2,
            api_nullitems: 1,
            auth_apikey: "998e3f75-5dc6-4aa8-8dbb-e26cf3c30327",
            user_tag: "",
            key_VRM: regNumber,
          },
        }
      );
      setVehicleData(response.data.Response.DataItems);
    } catch (err) {
      setError("Failed to fetch data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVehicleData();
  }, [regNumber]);

  const handleAddToCart = () => {
    if (vehicleData) {
      setCart([...cart, vehicleData]);
      alert("Vehicle added to cart! 🛒");
      navigate("/cart");
      
    }
  };

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-3 vehicleouterbox">
            <h2>Vehicle Details:</h2>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {vehicleData && (
              <>
                <p><strong>Make:</strong> {vehicleData.VehicleDetails.Make}</p>
                <p><strong>Model:</strong> {vehicleData.VehicleDetails.Model}</p>
                <p><strong>Year:</strong> {vehicleData.VehicleDetails.BuildYear}</p>
                <button className="btn btn-primary mt-3" onClick={handleAddToCart}  >
                  Add to Cart 🛒
                </button>
              </>
            )}
          </div>

          {vehicleData && vehicleData.TyreDetails?.RecordList?.length > 0 && (() => {
            const record = vehicleData.TyreDetails.RecordList[0]; // Get only the first record
            return (
              <>
                <div className="col-md-3 vehicleouterbox">
                  <h2>Tyre Details:</h2>
                  <h4>Front Tyre:</h4>
                  <p><strong>Size:</strong> {record.Front.Tyre.Size}</p>
                  <p><strong>Pressure:</strong> {record.Front.Tyre.Pressure.Psi} PSI</p>
                  <h4>Rear Tyre:</h4>
                  <p><strong>Size:</strong> {record.Rear.Tyre.Size}</p>
                  <p><strong>Pressure:</strong> {record.Rear.Tyre.Pressure.Psi} PSI</p>
                </div>

                <div className="col-md-3 vehicleouterbox">
                  <h2>Wheel Information:</h2>
                  <p><strong>Front Rim Size:</strong> {record.Front.Rim.Size}</p>
                  <p><strong>Rear Rim Size:</strong> {record.Rear.Rim.Size}</p>
                  <p><strong>Center Bore:</strong> {record.Hub.CenterBore}</p>
                  <p><strong>PCD:</strong> {record.Hub.PCD}</p>
                </div>

                <div className="col-md-3 vehicleouterbox">
                  <h2>Fitting Information:</h2>
                  <p><strong>Thread Type:</strong> {record.Fixing.ThreadType}</p>
                  <p><strong>Head Size:</strong> {record.Fixing.HeadSize}</p>
                  <p><strong>Bolt Length:</strong> {record.Fixing.BoltLength}</p>
                  <p><strong>Torque:</strong> {record.Fixing.Torque}</p>
                </div>
              </>
            );
          })()}
        </div>
      </div>
    </section>
  );
};

export default VehicleInfo;