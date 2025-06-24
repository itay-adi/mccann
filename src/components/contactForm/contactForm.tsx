import React, { useState } from "react";
import { dictionary } from "../../dictionary/hebrew";

import "./contactForm.scss";
import TextInput from "../textInput/textInput";
import SelectInput from "../selectField/SelectInput";
import ThankYouDialog from "../thankYouDialog/ThankYouDialog";

const ContactForm = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSuccess, setIsSucess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    exhibitionHall: "",
    email: "",
    marketingConsent: false,
  });

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = dictionary.mandatory;
    if (!/^\d{10}$/.test(formData.mobile))
      newErrors.mobile = dictionary.validNumber;
    if (!formData.exhibitionHall)
      newErrors.exhibitionHall = dictionary.selectCity;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = dictionary.mailValidation;

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validate()) {
      setIsSucess(true);
    }
  };

  const getHeadline = (): React.JSX.Element => {
    return (
      <div className="headline">
        <h1 className="mainHeadline">{dictionary.familyCar}</h1>
        <h1 className="secondary">{dictionary.leaveDetails}</h1>
      </div>
    );
  };

  const getCheckbox = () => {
    return (
      <div className="marketingConsentInput" dir="rtl">
        <input
          type="checkbox"
          id="marketingConsent"
          name="marketingConsent"
          checked={formData.marketingConsent}
          onChange={handleChange}
        />
        <label htmlFor="marketingConsent" className="marketingConsentText">
          {dictionary.marketingConsent}
        </label>
      </div>
    );
  };

  const getSelectFieldOptions = (): {
    value: string;
    label: string;
  }[] => [
    { value: "", label: "אולם תצוגה" },
    { value: "TelAviv", label: "תל אביב" },
    { value: "NofHagalil", label: "נוף הגליל" },
    { value: "Rishon", label: "ראשון לציון" },
    { value: "Tiberias", label: "טבריה" },
    { value: "Raanana", label: "רעננה" },
    { value: "Haifa", label: "חיפה" },
    { value: "Ashdod", label: "אשדוד" },
  ];

  const getButtons = (): React.JSX.Element => (
    <div className="buttons">
      <button
        type="button"
        name="action"
        className="monthlySubscribe"
        value="subscribe"
        onClick={() => console.log("Do something")}
      >
        {dictionary.monthlySubscriber}
      </button>
      <button type="submit" className="callMe" name="action" value="approve">
        {dictionary.callMe}
      </button>
    </div>
  );

  const getForm = (): React.JSX.Element => {
    return (
      <form className="formInputs" noValidate onSubmit={handleSubmit}>
        <h4 className="annotation">{dictionary.validation}</h4>
        <TextInput
          type={"text"}
          id={"fullName"}
          name={"fullName"}
          value={formData.fullName}
          onChange={handleChange}
          placeHolder={dictionary.fullName}
          error={errors.fullName}
        />
        <TextInput
          type={"text"}
          id={"mobile"}
          name={"mobile"}
          value={formData.mobile}
          onChange={handleChange}
          placeHolder={dictionary.mobile}
          error={errors.mobile}
        />
        <SelectInput
          name={"exhibitionHall"}
          label={dictionary.exHall}
          value={formData.exhibitionHall}
          onChange={handleChange}
          options={getSelectFieldOptions()}
          error={errors.exhibitionHall}
        />
        <TextInput
          type={"email"}
          id={"email"}
          name={"email"}
          value={formData.email}
          onChange={handleChange}
          placeHolder={dictionary.email}
          error={errors.email}
        />
        {getCheckbox()}
        {getButtons()}
      </form>
    );
  };

  return (
    <div className="contactForm">
      {!isSuccess && (
        <>
          {getHeadline()}
          {getForm()}
        </>
      )}
      <ThankYouDialog open={isSuccess} onClose={() => setIsSucess(false)} />
    </div>
  );
};

export default ContactForm;
