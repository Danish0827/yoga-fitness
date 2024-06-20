import React, { useEffect, useState } from "react";
import { Form, DatePicker, TimePicker, Button, Modal } from "antd";
import moment from "moment";
import dayjs from "dayjs";

interface DonationFormProps {
  onNext: () => void;
}

export const formatTime = (timeStr: string) => {
  const [hours, minutes] = timeStr.split(":");
  let formattedHours = parseInt(hours, 10) % 12; // Convert to 12-hour format
  formattedHours = formattedHours === 0 ? 12 : formattedHours; // Handle midnight
  const period = parseInt(hours, 10) < 12 ? "AM" : "PM"; // Determine AM or PM
  return `${formattedHours}:${minutes} ${period}`;
};

const DonationForm: React.FC<DonationFormProps> = ({ onNext }) => {
  const [form] = Form.useForm();
  const [modalVisible, setModal] = useState<boolean>(false);
  const [errorDataModal, setErrorData] = useState<any>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [loader, setLoader] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Retrieve and set form data from localStorage
    const storedData = localStorage.getItem("formdata");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      // Convert string dates back to dayjs objects
      if (parsedData.preferred_date) {
        parsedData.preferred_date = dayjs(parsedData.preferred_date);
      }
      if (parsedData.preferred_time) {
        parsedData.preferred_time = dayjs(parsedData.preferred_time, "HH:mm");
      }
      form.setFieldsValue(parsedData);
    }
  }, [form]);

  const onFinish = async (values: any) => {
    // Save form data to localStorage
    const formData = {
      ...values,
      preferred_date: values.preferred_date
        ? dayjs(values.preferred_date).format("YYYY-MM-DD")
        : null,
      preferred_time: values.preferred_time
        ? values.preferred_time.format("HH:mm")
        : null,
    };

    await checkAvailability(formData);
  };

  const checkAvailability = async (formData: any, checkFormData = true) => {
    setLoader(true);
    let updatedFormData = {};
    let data: any = localStorage.getItem("formdata");
    data = JSON.parse(data);

    try {
      if (checkFormData) {
        // Parse the preferred_date string into a Date object
        const preferredDate = new Date(formData.preferred_date);
        const year = preferredDate.getFullYear();
        const month = preferredDate.getMonth();
        const date = preferredDate.getDate();
        const utcPreferredDate = new Date(Date.UTC(year, month, date));
        const formattedPreferredDate = utcPreferredDate
          .toISOString()
          .split("T")[0];

        const preferredTime = formData.preferred_time + ":00";

        updatedFormData = {
          ...data,
          preferred_date: formattedPreferredDate,
          preferred_time: preferredTime,
          appointment_till_date: formattedPreferredDate,
          appointment_till_time:
            formData.preferred_time.slice(0, -3) + ":59:00",
          insert: false,
        };
      } else {
        updatedFormData = { ...data, ...formData };
      }

      const res = await fetch(
        `${process.env.ADMINURL}/api/addNewConsultRecord`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedFormData),
        }
      );

      if (res.status === 400) {
        const errorData = await res.json();
        // console.log("Error Data:", errorData);
        setModal(true);
        setErrorData(errorData);
      }

      if (res.status === 200) {
        localStorage.setItem("formdata", JSON.stringify(updatedFormData));
        onNext();
      }
    } catch (error) {
      console.error("Error occurred:", error);
    } finally {
      setLoader(false);
    }
  };

  const disabledDate = (current: any) => {
    return current && current < moment().startOf("day");
  };

  const disabledHours = () => {
    const currentHour = moment().hour();
    const hours = [];
    for (let i = 0; i <= currentHour; i++) {
      hours.push(i);
    }
    return hours;
  };

  // Determine the first enabled hour
  const getFirstEnabledHour = () => {
    const currentHour = moment().hour();
    return currentHour + 1; // The first hour after the current hour
  };

  // State to manage the selected time
  const [selectedTime, setSelectedTime] = useState(null);
  const [defaultOpenValue, setDefaultOpenValue] = useState(null);

  // Effect to set the initial selected time and default open value
  useEffect(() => {
    const firstEnabledHour = getFirstEnabledHour();
    const firstEnabledMoment = moment().hour(firstEnabledHour).minute(0);
    setSelectedTime(firstEnabledMoment);
    setDefaultOpenValue(firstEnabledMoment);
  }, []);

  const handleSlot = (slot: any) => {
    setSelectedSlot(slot);
  };

  const confirmTime = async () => {
    const data = errorDataModal.request;
    const formdata = {
      ...data,
      preferred_time: selectedSlot,
      appointment_till_time: selectedSlot?.slice(0, -6) + ":59:00",
      insert: false,
    };

    localStorage.setItem("formdata", JSON.stringify(formdata));

    await checkAvailability(formdata, false);
  };

  return (
    <div className="lg:px-32 px-4 py-12">
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        className="space-y-6"
      >
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-4">
          <Form.Item
            name="preferred_date"
            label="Preferred Date"
            labelCol={{ className: "custom-label" }}
            rules={[
              { required: true, message: "Please select a preferred date!" },
            ]}
            className="flex-1"
          >
            <DatePicker
              disabledDate={disabledDate}
              format="ddd, DD MMMM, YYYY"
              className="w-full h-12 font-thin border border-gray-40 rounded-full py-3 px-5"
              popupClassName="custom-dropdown"
            />
          </Form.Item>
          <Form.Item
            name="preferred_time"
            label="Preferred Time"
            className="flex-1"
            labelCol={{ className: "custom-label" }}
            rules={[
              { required: true, message: "Please select a preferred time!" },
            ]}
          >
            <TimePicker
              className="w-full h-12 border border-gray-400 py-3 px-5 rounded-full"
              format="h A"
              popupClassName="custom-timepicker-dropdown"
              disabledHours={disabledHours}
              use12Hours
              needConfirm
              value={selectedTime}
              defaultOpenValue={defaultOpenValue}
              onChange={(time) => setSelectedTime(time)}
            />
          </Form.Item>
        </div>
        <Form.Item className="flex justify-center">
          <Button
            loading={loader}
            className="px-10 h-[45px] py-0 rounded-lg bg-[#f1efea] text-black hover:text-red-500 font-bold"
            htmlType="submit"
          >
            <b className="font-bold">Next</b>
          </Button>
        </Form.Item>
      </Form>

      <Modal
        open={modalVisible}
        title={"Choose Available Slots"}
        onCancel={() => {
          setModal(false);
          setErrorData(null);
        }}
        onOk={confirmTime}
        okText="Proceed"
        confirmLoading={loader}
      >
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col items-center">
            <h2
              className="text-lg p-2 w-full text-red-600 tracking-wide animate-pulse flex flex-wrap"
              style={{ display: errorDataModal?.error ? "block" : "none" }}
            >
              {errorDataModal?.error}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-5">
          {errorDataModal &&
            errorDataModal?.availableTimeSlots?.map(
              (item: string, index: number) => {
                return (
                  <div
                    key={index}
                    onClick={() => handleSlot(item)}
                    className={`border rounded-lg tracking-wider text-base shadow-sm px-2 py-4 cursor-pointer flex justify-center ${
                      item === selectedSlot
                        ? "bg-blue-500 text-white font-semibold"
                        : "border-gray-300"
                    }`}
                  >
                    {formatTime(item)}
                  </div>
                );
              }
            )}
        </div>
      </Modal>
    </div>
  );
};

export default DonationForm;
