import React, { useContext, useState } from 'react';
import './popup.css'; // Create this CSS file for styling
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { missonContext } from '../../context/missonContext';

const PopupForm = (props) => {
  const msi = useContext(missonContext)
  
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    comp: false,
    description: ''
  });
  const [isEditing, setIsEditing] = useState(true);

  // Open/close popup
  const togglePopup = () => {
    setFormData({
      name:"",comp:false,description:''
    })
    setIsPopupOpen(!isPopupOpen);
  };

  // Handle input changes
  const handleInputChange = (e) => {
    if(e.target.name!='comp'){
    const { name, value } = e.target;
    setFormData(prev => ({

      ...prev,
      [name]: value
      
      
    }));}
    else{
      const { name, checked } = e.target;
          setFormData(prev => ({

      ...prev,
      [name]: checked
      
      
    }));
    }
  };



  // Handle form submission
  const handleSubmit = (e) => {
    console.log(formData)
    e.preventDefault();
           const  ms=JSON.parse(window.localStorage.getItem("key"))
           const res= ms.find((index)=>index['id']==props.index)

           const listUnCompleted = ms.filter((ele)=>ele.id!=props.index)
           msi.setMission([...listUnCompleted,{
            "id":res.id,
            "mission":formData.name,
            "complete":formData.comp,
            "desc":formData.description
        }].sort((a, b) => a.id - b.id))
        window.localStorage.setItem('key',JSON.stringify(
            [...listUnCompleted,{
            "id":res.id,
            "mission":formData.name,
            "complete":formData.comp,
            "desc":formData.description

        }].sort((a, b) => a.id - b.id)
        ))
    // Here you would typically send data to an API
    alert('Form submitted successfully!');

    togglePopup();

  };

 
  return (
    <div className="popup-container">
      {/* Main Button */}
      <button 
        className="open-popup-btn"
        onClick={togglePopup}
      >
        <ModeEditIcon/>
      </button>

      {/* Popup Overlay */}
      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            {/* Popup Header */}
            <div className="popup-header">
              <h2>Edit Information</h2>
              <button 
                className="close-btn"
                onClick={togglePopup}
              >
                &times;
              </button>
            </div>

            {/* Popup Form */}
            <form onSubmit={handleSubmit} className="popup-form">
              <div className="form-group">
                <label htmlFor="name">mission</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  required
                />
              </div>

              <div className="form-group" style={{display:'flex',justifyContent:'start',flexDirection:'row'}}>
                <label htmlFor="email">complete:</label>
                <input
                  type="checkbox"
                  id="comp"
                  name="comp"
                  checked={formData.comp}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">discription:</label>
                <input
                  type="text"
                  id="phone"
                  name="description"
                  value={formData.phone}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  required
                />
              </div>

              {/* Action Buttons */}
              <div className="form-actions">

                
                {isEditing ? (
                  <button
                    type="submit"
                    className="submit-btn"
                  >
                    Submit
                  </button>
                ) : (
                  <button
                    type="button"
                    className="cancel-btn"
                    onClick={togglePopup}
                  >
                    Close
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupForm;