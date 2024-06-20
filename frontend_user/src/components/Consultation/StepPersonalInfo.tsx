import React, { useEffect, useState } from "react";
import { Form, Input, InputNumber, Button, Select } from "antd";
import { State, City } from "country-state-city";
import { IState, ICity } from "country-state-city";

interface StepPersonalInfoProps {
  onNext: () => void;
  onPrev: () => void;
}

const StepPersonalInfo: React.FC<StepPersonalInfoProps> = ({
  onNext,
  onPrev,
}) => {
  const [form] = Form.useForm();
  const [states, setStates] = useState<IState[]>([]);
  const [cities, setCities] = useState<ICity[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const storedData = localStorage.getItem("formdata");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      form.setFieldsValue(parsedData);
    }

    const states = State.getStatesOfCountry("IN");
    setStates(states);
  }, [form]);

  const onFinish = (values: any) => {
    try {
      let data = localStorage.getItem("formdata");
      if (data) {
        const parsedData = JSON.parse(data) as Record<string, any>; // Explicitly cast to object type
        const formdata = { ...parsedData, ...values };
        localStorage.setItem("formdata", JSON.stringify(formdata));
        onNext();
      }
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  const handleChangeState = (value: string, option: any) => {
    const selectedState = option?.data as IState;
    const cities = City.getCitiesOfState(
      selectedState?.countryCode,
      selectedState?.isoCode
    );
    setCities(cities);
    form.setFieldsValue({ city: undefined });
  };

  return (
    <div className="md:py-10 flex items-center justify-center">
      <div className="w-full lg:w-5/6 rounded-lg ">
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          className="md:grid grid-cols-2 gap-6"
        >
          <Form.Item
            name="full_name"
            label="Full Name"
            labelCol={{ className: "custom-label" }}
            rules={[
              {
                required: true,
                message: "Enter Full Name",
              },
            ]}
          >
            <Input
              placeholder="Ex: John Oliver"
              className="w-full rounded-full px-4 h-12 placeholder:text-[16px] text-[16px] font-thin text-gray-700"
            />
          </Form.Item>
          <Form.Item
            name="age"
            label="Age"
            labelCol={{ className: "custom-label" }}
            rules={[
              {
                required: true,
                message: "Enter your age",
              },
            ]}
          >
            <InputNumber
              min={0}
              placeholder="Ex: 25"
              className="w-full rounded-full px-4 h-12 pt-2 placeholder:text-[16px] text-[16px] font-thin text-gray-700"
            />
          </Form.Item>
          <Form.Item
            name="contact_number"
            label="Contact Number"
            labelCol={{ className: "custom-label" }}
            rules={[
              {
                required: true,
                message: "A value must be entered",
              },
              {
                pattern: new RegExp(/^\d{10}$/),
                message: "Enter a valid 10-digit phone number",
              },
            ]}
          >
            <Input
              placeholder="Ex: 9876543210"
              className="w-full rounded-full px-4 h-12 placeholder:text-[16px] text-[16px] font-thin text-gray-700"
            />
          </Form.Item>
          <Form.Item
            name="alternate_mobile_number"
            label="Alternate Mobile Number"
            labelCol={{ className: "custom-label" }}
            rules={[
              {
                pattern: new RegExp(/^\d{10}$/),
                message: "Enter a valid 10-digit phone number",
              },
            ]}
          >
            <Input
              placeholder="Ex: 9876543210"
              className="w-full rounded-full px-4 h-12 placeholder:text-[16px] text-[16px] font-thin text-gray-700"
            />
          </Form.Item>

          <Form.Item
            name="email_address"
            label="Email Address"
            labelCol={{ className: "custom-label" }}
            className="col-span-2"
            rules={[
              {
                type: "email",
                message: "The input is not a valid email address!",
              },
              {
                required: true,
                message: "Please enter your email address",
              },
            ]}
          >
            <Input
              placeholder="Ex: example@gmail.com"
              className="w-full h-12 rounded-full px-4 placeholder:text-[16px] text-[16px] font-thin text-gray-700"
            />
          </Form.Item>

          <div className="col-span-2 md:grid grid-cols-3 gap-5 w-full">
            <Form.Item
              name="country"
              label="Country"
              initialValue="India"
              labelCol={{ className: "custom-label" }}
            >
              <Input
                defaultValue="India"
                disabled
                className="w-full h-12 rounded-full px-4 placeholder:text-[16px] text-[16px] font-thin text-black"
              />
            </Form.Item>
            <Form.Item
              name="user_state"
              label="State"
              labelCol={{ className: "custom-label" }}
            >
              <Select
                showSearch
                allowClear
                className="h-12 placeholder:font-bold text-black placeholder:rounded-full text-left"
                style={{ width: "100%", color: "black" }}
                onChange={handleChangeState}
                placeholder="Select State"
              >
                {states.map((state) => (
                  <Select.Option
                    key={state.isoCode}
                    value={state.name}
                    data={state}
                  >
                    {state.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              name="city"
              label="City"
              labelCol={{ className: "custom-label" }}
            >
              <Select
                showSearch
                allowClear
                className="h-12 text-left placeholder:text-black"
                style={{ width: "100%" }}
                placeholder="Select City"
              >
                {cities.map((city) => (
                  <Select.Option key={city.name} value={city.name} data={city}>
                    {city.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </div>
          <Form.Item className="col-span-2 md:flex justify-center">
            <Button
              style={{ margin: "0 8px" }}
              onClick={onPrev}
              className="md:px-10 h-[45px] py-0 rounded-lg bg-[#ffffff] text-black hover:text-red-500 font-bold"
            >
              <b className="custom-label">Previous</b>
            </Button>
            <Button
              className="md:px-10 h-[45px] py-0 rounded-lg bg-[#f1efea] text-black hover:text-red-500 font-bold"
              htmlType="submit"
            >
              <b className="font-bold">Next</b>
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default StepPersonalInfo;
