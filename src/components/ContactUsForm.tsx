import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Dropdown } from "./Dropdown";
import { classNames } from "../utils";
import ContactUsInput from "./ContactUsInput";
import { Button } from "./Button";
import { externalRoutes, tiers } from "../config";
const items = tiers
  .map(({ name, id }) => ({ name, id }))
  .concat({
    name: "Other",
    id: "other",
  });

export interface ContactUsForm {
  className?: string;
  title: string;
}
export function ContactUsForm({ className, title }: ContactUsForm) {
  const [isLoading, setIsLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [persona, setPersona] = useState<null | (typeof items)[number]>(null);
  const [firstNameError, setFirstNameError] = useState("");
  const [surnameError, setSurnameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const onFirstNameChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setFirstName(e.target.value);
    },
    [firstName]
  );
  const onSurnameChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setSurname(e.target.value);
    },
    [surname]
  );
  const onEmailChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    },
    [email]
  );
  const onPhoneChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setPhone(e.target.value);
    },
    [phone]
  );
  const onMessageChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      setMessage(e.target.value);
    },
    [message]
  );
  const onPersonaChange = useCallback(
    ({ id, name }: { id: string; name: string }) => {
      console.log("id", id);
      console.log("name", name);
      setPersona({ id, name });
    },
    [persona]
  );

  const onClick = useCallback(() => {
    setIsLoading(true);
    let hasError = false;
    // reset all errors
    setFirstNameError("");
    setSurnameError("");
    setEmailError("");
    setMessageError("");

    if (!firstName) {
      setFirstNameError("Please enter your first name.");
      hasError = true;
    }
    if (!surname) {
      setSurnameError("Please enter your surname.");
      hasError = true;
    }
    if (!email) {
      setEmailError("Please enter your email.");
      hasError = true;
    }
    if (!message) {
      setMessageError("Please enter your message.");
      hasError;
    }
    if (!hasError) {
      const payload = {
        firstName,
        surname,
        email,
        message,
        ...(!phone ? {} : { phone }),
        ...(!persona ? {} : { name: persona.name }),
      };
      fetch(externalRoutes.mailbox.href, {
        body: JSON.stringify(payload),
        method: "POST",
      })
        .then(() => {
          toast.success("Successfully sent message");
          setEmail("");
          setFirstName("");
          setSurname("");
          setPersona(null);
          setMessage("");
          setPhone("");
        })
        .catch((err) => {
          console.log(err);
          toast.error("Failed to send message");
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [isLoading, firstName, surname, email, phone, persona, message]);

  return (
    <section
      className={classNames(
        "pb-24 pt-20 sm:pb-32 lg:py-48",
        !className ? "" : className
      )}
    >
      <div className="mx-auto lg:mr-0">
        <header>
          <h2 className="text-normal text-3xl tracking-tight">{title}</h2>
        </header>
        <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-6 lg:grid-cols-2">
          <ContactUsInput
            disabled={isLoading}
            name="firstname"
            label="Firstname"
            value={firstName}
            error={firstNameError}
            onChange={onFirstNameChange}
          />
          <ContactUsInput
            disabled={isLoading}
            error={surnameError}
            name="surname"
            label="Surname"
            value={surname}
            onChange={onSurnameChange}
          />
          <ContactUsInput
            disabled={isLoading}
            error={emailError}
            name="email"
            label="Email"
            type="email"
            value={email}
            onChange={onEmailChange}
          />
          <ContactUsInput
            disabled={isLoading}
            error={phoneError}
            name="phone"
            label="Phone"
            type="tel"
            optional
            value={phone}
            onChange={onPhoneChange}
          />
          <div className="sm:col-span-1">
            <label
              htmlFor="persona"
              className="text-md block font-normal leading-6 text-black"
            >
              Reason for getting in touch
              <span className="text-base font-normal text-brand-green">
                &nbsp;(Optional)
              </span>
            </label>
            <div className="mt-2.5">
              <Dropdown
                disabled={isLoading}
                items={items}
                className="bg-brand-light-background"
                value={persona}
                onChange={onPersonaChange}
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="text-md block font-normal leading-6 text-black"
            >
              Message
            </label>

            {!messageError ? null : (
              <span className="text-brand-orange">{messageError}</span>
            )}
            <div className="mt-2.5 focus:outline-none focus-visible:outline-none"></div>
            <div className="mt-2.5">
              <textarea
                name="message"
                disabled={isLoading}
                id="message"
                rows={4}
                value={message}
                onChange={onMessageChange}
                className="focus:ring-brand-500 block w-full border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="mt-8 flex">
          <Button
            disabled={isLoading}
            className="w-full text-[1.3rem] lg:w-60"
            id="contact-submit"
            label="Submit"
            onClick={onClick}
          />
        </div>
      </div>
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: "#13BFA2", // brand-green
              color: "#fff",
            },
          },
          error: {
            style: {
              background: "#FF5634", // brand-orange
              color: "#fff",
            },
          },
        }}
      />
    </section>
  );
}

export default ContactUsForm;
