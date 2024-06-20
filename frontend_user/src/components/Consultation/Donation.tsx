import React from "react";
import { Button, Modal, Input } from "antd";
import { processPayments } from "./RazorpayDonate";

const Donation: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(true);

  const showLoading = () => {
    setOpen(true);
    setLoading(true);

    // Simple loading mock. You should add cleanup logic in real world.
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  const handleDonate = async () => {
    await processPayments(500, "This is a consultation fee");
  };

  return (
    <>
      <Button type="primary" onClick={showLoading}>
        Open Modal
      </Button>
      <Modal
        title={<p>Loading Modal</p>}
        footer={
          <Button type="primary" onClick={handleDonate}>
            Donate
          </Button>
        }
        // loading={loading}
        open={open}
        onCancel={() => setOpen(false)}
      >
        <Input
          type="number"
          placeholder="Ex: 9876543210"
          className="w-full rounded-full px-4 h-12 placeholder:text-[16px] text-[16px] font-thin text-gray-700"
        />
      </Modal>
    </>
  );
};

export default Donation;
