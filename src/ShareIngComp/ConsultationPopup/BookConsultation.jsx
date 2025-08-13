import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

const ConsultationPopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Contact number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit number";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);

      // Clear form
      setFormData({ firstName: "", phone: "" });

      // Show success message
      setSuccess(true);

      // Hide popup after 2 seconds
      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-xl w-full max-w-sm shadow-lg relative">
        {/* Header */}
        <div className="bg-green-700 text-white text-center py-3 rounded-t-xl relative">
          <h2 className="text-lg font-semibold">
            {success ? "Success" : "Book Your Free Consultation Now"}
          </h2>
          <button
            onClick={onClose}
            className="absolute right-3 top-3 text-white text-2xl"
          >
            <IoMdClose />
          </button>
        </div>

        {/* Success Message */}
        {success ? (
          <div className="flex flex-col  items-center justify-center p-6">
            <FaCheckCircle className="text-green-600 text-4xl mb-2" />
            <p className="text-green-700 font-semibold">
              Your consultation is booked!
            </p>
          </div>
        ) : (
          /* Form */
          <form className="p-5 space-y-3" onSubmit={handleSubmit}>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name*"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-1 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mb-3">{errors.firstName}</p>
            )}

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Contact Number*"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-1 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mb-3">{errors.phone}</p>
            )}

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary/80 text-white font-semibold py-2 rounded-lg shadow-md"
            >
              Book Free Consultation
            </button>

            <div className="flex items-center justify-center my-4">
              <span className="text-gray-500 font-semibold">OR</span>
            </div>

            <div className="relative">
              <select
                onChange={(e) => {
                  if (e.target.value) {
                    window.location.href = `tel:${e.target.value}`;
                  }
                }}
                className="w-full bg-secondary flex items-center justify-center text-center text-white font-semibold py-2 rounded-lg shadow-md px-3 appearance-none cursor-pointer"
              >
                <option
                  className="bg-white text-black flex items-center"
                  value=""
                >
                    <FaPhoneAlt className="mr-2 text-white" />
                  Call Us
                </option>
                <option className="bg-white text-black" value="+919601663669">
                  Dr. Yogesh H. Desai
                </option>
                <option className="bg-white text-black" value="+9107947112761">
                  Dr. Priyanka V. Dodia
                </option>
              </select>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ConsultationPopup;
