import React, { useState } from 'react';
import './App.css';

const FullNameInput = ({ value, onChange }) => {
  return (
    <div>
      <label>ПІБ</label>
      <input 
        type="text" 
        value={value} 
        onChange={onChange} 
        required 
      />
    </div>
  );
};

const PhoneInput = ({ value, onChange }) => {
  return (
    <div>
      <label>Телефон</label>
      <input 
        type="tel" 
        value={value} 
        onChange={onChange} 
        required 
      />
    </div>
  );
};

const EmailInput = ({ value, onChange }) => {
  return (
    <div>
      <label>Електронна пошта</label>
      <input 
        type="email" 
        value={value} 
        onChange={onChange} 
        required 
      />
    </div>
  );
};

const PhotoInput = ({ onChange }) => {
  const [preview, setPreview] = useState(null);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    onChange(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <label>Фото</label>
      <input 
        type="file" 
        accept="image/*" 
        onChange={handlePhotoChange} 
        required 
      />
      {preview && <img src={preview} alt="Фото прев'ю" width="100" />}
    </div>
  );
};

const HobbiesInput = ({ value, onChange }) => {
  return (
    <div>
      <label>Хобі</label>
      <textarea 
        value={value} 
        onChange={onChange} 
        required 
      />
    </div>
  );
};

const RegistrationForm = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [photo, setPhoto] = useState(null);
  const [hobbies, setHobbies] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      fullName,
      phone,
      email,
      photo,
      hobbies,
    };
    console.log('Submitted Data:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FullNameInput value={fullName} onChange={(e) => setFullName(e.target.value)} />
      <PhoneInput value={phone} onChange={(e) => setPhone(e.target.value)} />
      <EmailInput value={email} onChange={(e) => setEmail(e.target.value)} />
      <PhotoInput onChange={setPhoto} />
      <HobbiesInput value={hobbies} onChange={(e) => setHobbies(e.target.value)} />
      <button type="submit">Зареєструватися</button>
    </form>
  );
};

function App() {
  return (
    <div className="App">
      <h1>Форма реєстрації</h1>
      <RegistrationForm />
    </div>
  );
}

export default App;
