import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { processPayment } from "./RazorpayButton";
import { BiLoaderCircle } from "react-icons/bi";

interface StepAdditionalInfoProps {
  onNext: () => void;
  onPrev: () => void;
}

const StepLast: React.FC<StepAdditionalInfoProps> = ({ onNext, onPrev }) => {
  const [formData, setFormData] = useState<any>({});
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    window.scroll(0, 0);
    const storedData = localStorage.getItem("formdata");
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  // // Validate the required fields
  const handlePAy = async () => {
    const requiredFields = [
      "preferred_date",
      "preferred_time",
      "appointment_till_date",
      "appointment_till_time",
      "full_name",
      "age",
      "contact_number",
      "alternate_mobile_number",
      "email_address",
      "country",
      "user_state",
      "city",
    ];

    for (let field of requiredFields) {
      if (!formData[field]) {
        console.error(`Field ${field} is required and cannot be empty or null`);
        // You can display an error message to the user here
        alert(`Please fill in the ${field} field.`);
        return; // Stop further execution
      }
    }

    setLoader(true);
    // Save the updated data back to localStorage
    localStorage.setItem("formdata", JSON.stringify(formData));

    // Call processPayment if validation passes
    await processPayment(
      formData.full_name,
      formData.email_address,
      process.env.PAYMENT_AMOUNT,
      "This is a consultation fee"
    );
  };

  return (
    <div className=" bg-gray-50 min-h-screen">
      {loader && (
        <div className="fixed bg-black/80 w-screen h-screen top-0 left-0 z-[999] text-white flex justify-center items-center">
          <BiLoaderCircle className="w-12 h-12 animate-spin" />
        </div>
      )}
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Form Summary
      </h2>
      <div className="max-w-6xl mx-auto lg:p-8 bg-white lg:shadow-lg rounded-lg space-y-8">
        <div className="space-y-6">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-2xl font-extrabold mb-4 text-gray-700">
              Appointment Date
            </h3>
            <div className="space-y-2">
              <p className="text-lg font-medium text-gray-600">
                <strong className="text-gray-700">Preferred Date:</strong>{" "}
                {formData.preferred_date}
              </p>
              <p className="text-lg font-medium text-gray-600">
                <strong className="text-gray-700">Preferred Time:</strong>{" "}
                {formData.preferred_time}
              </p>
            </div>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-2xl font-extrabold mb-4 text-gray-700">
              Personal Info
            </h3>
            <div className="space-y-2">
              <p className="text-lg font-medium text-gray-600">
                <strong className="text-gray-700">Full Name:</strong>{" "}
                {formData.full_name}
              </p>
              <p className="text-lg font-medium text-gray-600">
                <strong className="text-gray-700">Age:</strong> {formData.age}
              </p>
              <p className="text-lg font-medium text-gray-600">
                <strong className="text-gray-700">Contact Number:</strong>{" "}
                {formData.contact_number}
              </p>
              <p className="text-lg font-medium text-gray-600">
                <strong className="text-gray-700">
                  Alternate Mobile Number:
                </strong>{" "}
                {formData.alternate_mobile_number}
              </p>
              <p className="text-lg font-medium text-gray-600">
                <strong className="text-gray-700">Email Address:</strong>{" "}
                {formData.email_address}
              </p>
              <p className="text-lg font-medium text-gray-600">
                <strong className="text-gray-700">Country:</strong>{" "}
                {formData.country}
              </p>
              <p className="text-lg font-medium text-gray-600">
                <strong className="text-gray-700">State:</strong>{" "}
                {formData.user_state}
              </p>
              <p className="text-lg font-medium text-gray-600">
                <strong className="text-gray-700">City:</strong> {formData.city}
              </p>
            </div>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-2xl font-extrabold mb-4 text-gray-700">
              Additional Info
            </h3>
            <div className="space-y-2">
              <p className="text-lg font-medium text-gray-600">
                <strong className="text-gray-700">Diet Preference:</strong>{" "}
                {formData.diet_preference}
              </p>
              <p className="text-lg font-medium text-gray-600">
                <strong className="text-gray-700">Zodiac Sign:</strong>{" "}
                {formData.zodiac_sign}
              </p>
              <p className="text-lg font-medium text-gray-600">
                <strong className="text-gray-700">Relationship Status:</strong>{" "}
                {formData.relationship_status}
              </p>
              <p className="text-lg font-medium text-gray-600">
                <strong className="text-gray-700">Medicine Consumption:</strong>{" "}
                {formData.medicine_consumption}
              </p>
              <p className="text-lg font-medium text-gray-600">
                <strong className="text-gray-700">Disorders or Disease:</strong>{" "}
                {formData.disorders_or_disease}
              </p>
              <p className="text-lg font-medium text-gray-600">
                <strong className="text-gray-700">Purpose of Yoga:</strong>{" "}
                {formData.purpose_of_yoga}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-between mt-8"> */}
      <Button
        style={{ margin: "0 8px" }}
        onClick={onPrev}
        className="md:px-10 h-[45px] py-0 rounded-lg bg-white text-black hover:text-red-500 font-bold"
      >
        <b className="p-0">Previous</b>
      </Button>
      <Button
        className="md:px-10 h-[45px] py-0 rounded-lg bg-[#f1efea] text-black hover:text-red-500 font-bold"
        onClick={handlePAy}
      >
        <b className="font-bold">Pay Now</b>
      </Button>
      {/* </div> */}
    </div>
  );
};

export default StepLast;
