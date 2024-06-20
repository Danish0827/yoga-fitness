"use client";
import React, { useState } from "react";
import { Button, message, Steps, theme } from "antd";
import DonationForm from "./StepDonation";
import StepPersonalInfo from "./StepPersonalInfo";
import StepAdditionalInfo from "./StepAdditionalInfo";
import StepLast from "./StetLast";

const ConsultationForm: React.FC = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const steps = [
    {
      title: "Appointment",
      content: <DonationForm onNext={() => setCurrent(current + 1)} />,
    },
    {
      title: "Personal Info",
      content: (
        <StepPersonalInfo
          onNext={() => setCurrent(current + 1)}
          onPrev={() => setCurrent(current - 1)}
        />
      ),
    },
    {
      title: "Additional Info",
      content: (
        <StepAdditionalInfo
          onNext={() => setCurrent(current + 1)}
          onPrev={() => setCurrent(current - 1)}
        />
      ),
    },
    {
      title: "Payment",
      content: (
        <StepLast
          onNext={() => setCurrent(current + 1)}
          onPrev={() => setCurrent(current - 1)}
        />
      ),
    },
  ];

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  const contentStyle: React.CSSProperties = {
    lineHeight: "260px",
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: "white",
    borderRadius: token.borderRadiusLG,
    // border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };

  return (
    <>
      <div className="md:pt-12 ">
        <div className="steps-container  shadow-2xl lg:m-[80px] md:m-5 lg:bottom-[250px] bottom-5">
          <Steps className="custom-step" current={current} items={items} />
          <div style={contentStyle}>{steps[current].content}</div>
          {/* <div style={{ marginTop: 24, display: "flex", justifyContent: "space-between" }}>
        {current > 0 && (
          <Button onClick={() => setCurrent(current - 1)} style={{ marginRight: 8 }}>
            Previous
          </Button>
        )}
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => setCurrent(current + 1)}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success("Processing complete!")}>
            Done
          </Button>
        )}
      </div> */}
        </div>
      </div>
    </>
  );
};

export default ConsultationForm;
