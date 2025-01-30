// VehicleInfo Component
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const VehicleInformationFetchShow = () => {
  const [vehicleData, setVehicleData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();

  const fetchVehicleData = async () => {
    setLoading(true);
    setError(null);

    try {
      const queryParams = new URLSearchParams(location.search);
      const response = await axios.get(
        `https://uk1.ukvehicledata.co.uk/api/datapackage/TyreData`,
        {
          params: {
            v: 2,
            api_nullitems: 1,
            auth_apikey: '998e3f75-5dc6-4aa8-8dbb-e26cf3c30327',
            user_tag: '',
            key_VRM: 'MA59 FJK',
            width: queryParams.get('width'),
            profile: queryParams.get('profile'),
            rim: queryParams.get('rim'),
            speed: queryParams.get('speed')
          },
        }
      );
      setVehicleData(response.data.Response.DataItems);
    } catch (err) {
      setError('Failed to fetch data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVehicleData();
  }, [location.search]);

  return (
    <section>
      <div className="container ">
      
        <h1>Vehicle Information</h1>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {vehicleData && (
          <div className="row">
            <div className="col-lg-4">
              <h2>Vehicle Details:</h2>
              <p><strong>Make:</strong> {vehicleData.VehicleDetails.Make}</p>
              <p><strong>Model:</strong> {vehicleData.VehicleDetails.Model}</p>
              <p><strong>Year:</strong> {vehicleData.VehicleDetails.BuildYear}</p>
            </div>

            <div className="col-lg-4">
              <h3>Tyre Details:</h3>
              {vehicleData.TyreDetails.RecordList.map((record, index) => (
                <div key={index}>
                  <h4>Front Tyre:</h4>
                  <p><strong>Size:</strong> {record.Front.Tyre.Size}</p>
                  <p><strong>Pressure:</strong> {record.Front.Tyre.Pressure.Psi} PSI</p>
                  <h4>Rear Tyre:</h4>
                  <p><strong>Size:</strong> {record.Rear.Tyre.Size}</p>
                  <p><strong>Pressure:</strong> {record.Rear.Tyre.Pressure.Psi} PSI</p>
                </div>
              ))}
            </div>

            <div className="col-lg-4">
              <h3>Fitting Information:</h3>
              <p>Additional fitting details coming soon...</p>
            </div>
          </div>
        )}
      
      </div>
    </section>
  );
};

export default VehicleInformationFetchShow;