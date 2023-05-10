import React, { useState } from "react";


const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    pronouns: "",
    birthday: "",
    topSize: "",
    bottomSize: "",
    favActivity: "",
  });

  const pronounOptions = ["She/Her", "He/Him", "They/Them", "Other"];
  const topSizeOptions = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];
  const bottomSizeOptions = ["XS", "S", "M", "L", "XXL", "XXL"];
  const favActivityOptions = [
    "Dodgeball",
    "Ultimate Frisbee",
    "Steal the Bacon",
    "Kickball",
    "Flag Football",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    // handle form submission here
    e.preventDefault();
    alert("Form Submitted");
    setFormData({
      name: "",
      pronouns: "",
      birthday: "",
      topSize: "",
      bottomSize: "",
      favActivity: "",
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="form__label-name" htmlFor="name">
        name
      </label>
      <input
        className="form__input-name"
        type="text"
        name="name"
        placeholder="name"
        value={formData.name}
        onChange={handleChange}
        required
        autoFocus
      />

      <label className="form__label-pronouns" htmlFor="pronouns">
        pronouns
      </label>
      <div className="dropdown">
        <select
          className="form__drop-pronouns"
          name="pronouns"
          value={formData.pronouns}
          onChange={handleChange}
          required
        >
          <option value="" disabled selected>
            pronouns
          </option>
          {pronounOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <span className="form__dropdown-icon"></span>
      </div>

      <label className="form__label-top" htmlFor="topSize">
        top size
      </label>
      <div className="dropdown">
        <select
          className="form__drop-tops"
          name="topSize"
          value={formData.topSize}
          onChange={handleChange}
          required
        >
          <option value="" disabled selected>
            top size
          </option>
          {topSizeOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <span className="dropdown-icon"></span>
      </div>

      <label className="form__label-bottom" htmlFor="form__label-bottom">
        bottom size
      </label>
      <div className="dropdown">
        <select
          className="form__drop-bottom"
          name="bottomSize"
          value={formData.bottomSize}
          onChange={handleChange}
          required
        >
          <option value="" disabled selected>
            bottom size
          </option>
          {bottomSizeOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <span className="dropdown-icon"></span>
      </div>

      <label className="form__label-fav" htmlFor="favActivity">
        favorite activity
      </label>
      <div className="dropdown">
        <select
          className="form__drop-fav"
          name="favActivity"
          value={formData.favActivity}
          onChange={handleChange}
        >
          <option value="" disabled selected>
            favorite activity
          </option>
          {favActivityOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <span className="dropdown-icon"></span>
      </div>

      <Button type="submit">
    </form>
  );
};

export default Form;
