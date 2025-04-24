import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const TireSizeForm = () => {
  const [formData, setFormData] = useState({
    width: '205',
    profile: '55',
    rim: '16',
    speed: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const queryParams = new URLSearchParams(formData).toString();
    navigate(`/vehicle-info2?${queryParams}`);
  };

  const widthOptionsPopular = ['175', '185', '195', '205', '215', '225', '235', '245', '255'];
  const widthOptionsAll = ['30', '31', '33', '35', '115', '125', '135', '145', '155', '165', '265', '275', '285', '295', '305', '315', '325', '335', '345', '350', '355', '500', '600', '650', '750'];
  const profileOptions = ['35', '40', '45', '50', '55', '60', '65', '70', '75', '80'];
  const rimOptions = ['15', '16', '17', '19'];
  const speedOptions = ['', 'H', 'Q', 'T', 'V', 'W', 'Y', 'Z'];

  return (
    <div className="tyresizebox">
      <form className="sameline" onSubmit={handleSubmit}>
        <div className="rear-option">
        <h3>Width</h3>
          <select name="width" value={formData.width} onChange={handleChange}>
            <optgroup label="Popular">
              {widthOptionsPopular.map((w) => (
                <option key={w} value={w}>{w}</option>
              ))}
            </optgroup>
            <optgroup label="All">
              {widthOptionsAll.map((w) => (
                <option key={w} value={w}>{w}</option>
              ))}
            </optgroup>
          </select>
        </div>

        <div className="rear-option">
        <h3>Profile</h3>
          <select name="profile" value={formData.profile} onChange={handleChange}>
            {profileOptions.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>

        <div className="rear-option">
        <h3>Rim Size</h3>
          <select name="rim" value={formData.rim} onChange={handleChange}>
            {rimOptions.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
        </div>

        <div className="rear-option">
          <h3>Speed</h3>
          <h3>Speed</h3>
          <select name="speed" value={formData.speed} onChange={handleChange}>
            {speedOptions.map((s) => (
              <option key={s} value={s}>{s || 'Any'}</option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn searchbtnss">Search</button>
      </form>
    </div>
  );
};

export default TireSizeForm;