import React, { useEffect, useState } from "react";
import { Form, Input, Button } from "antd";
import Script from "next/script";
import { processPayment } from "./RazorpayButton";
import { BiLoaderCircle } from "react-icons/bi";

interface StepAdditionalInfoProps {
  onNext: () => void;
  onPrev: () => void;
}

const StepAdditionalInfo: React.FC<StepAdditionalInfoProps> = ({
  onNext,
  onPrev,
}) => {
  const [form] = Form.useForm();
  const [loader, setLoader] = useState(false);

  const onFinish = async (values: any) => {
    // console.log("Form values:", values);

    // Retrieve and parse data from localStorage
    const data = localStorage.getItem("formdata");
    if (data) {
      const parsedData = JSON.parse(data);

      // Merge the new form values with the existing data
      const formData = { ...parsedData, ...values };
      // console.log(formData, "formData");
      localStorage.setItem("formdata", JSON.stringify(formData));

      // Navigate to the next step
      onNext();
    } else {
      console.error('No data found in localStorage with key "formdata"');
    }
  };

  useEffect(() => {
    window.scroll(0, 0);

    const storedData = localStorage.getItem("formdata");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      form.setFieldsValue(parsedData);
    }
  }, [form]);

  return (
    <div className="md:px-28 px-4 py-12">
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        className="grid grid-cols-1 md:grid-cols-3 gap-5"
      >
        <Form.Item
          name="diet_preference"
          label="Diet Preference"
          labelCol={{ className: "custom-label" }}
        >
          <Input
            placeholder="Ex: "
            className="h-12 text-[16px] rounded-full font-thin text-gray-600 py-3 px-5"
          />
        </Form.Item>
        <Form.Item
          name="zodiac_sign"
          label="Zodiac Sign"
          labelCol={{ className: "custom-label" }}
        >
          <Input
            placeholder="Ex: "
            className="h-12 text-[16px] rounded-full font-thin text-gray-600 py-3 px-5"
          />
        </Form.Item>
        <Form.Item
          name="relationship_status"
          label="Relationship Status"
          labelCol={{ className: "custom-label" }}
        >
          <Input
            placeholder="Ex: "
            className="h-12 text-[16px] rounded-full font-thin text-gray-600 py-3 px-5"
          />
        </Form.Item>
        <Form.Item
          name="medicine_consumption"
          label="Medicine Consumption"
          labelCol={{ className: "custom-label" }}
        >
          <Input
            placeholder="Ex: "
            className="h-12 text-[16px] rounded-full font-thin text-gray-600 py-3 px-5"
          />
        </Form.Item>
        <Form.Item
          name="disorders_or_disease"
          label="Disorders or Disease"
          labelCol={{ className: "custom-label" }}
        >
          <Input
            placeholder="Ex: "
            className="h-12 text-[16px] rounded-full font-thin text-gray-600 py-3 px-5"
          />
        </Form.Item>
        <Form.Item
          name="purpose_of_yoga"
          label="Purpose of Yoga"
          labelCol={{ className: "custom-label" }}
        >
          <Input
            placeholder="Ex: "
            className="h-12 text-[16px] rounded-full font-thin text-gray-600 py-3 px-5"
          />
        </Form.Item>
        <Form.Item className="md:col-span-3 md:flex justify-center">
          <Button
            style={{ margin: "0 8px" }}
            onClick={onPrev}
            className="md:px-10 h-[45px] py-0 rounded-lg bg-[#ffffff] text-black hover:text-red-500 font-bold"
          >
            <b className="p-0">Previous</b>
          </Button>
          <Button
            className="md:px-10 h-[45px] py-0 rounded-lg bg-[#f1efea] text-black hover:text-red-500 font-bold"
            htmlType="submit"
          >
            <b className="font-bold">Next</b>
          </Button>
        </Form.Item>
      </Form>

      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />
    </div>
  );
};

export default StepAdditionalInfo;
