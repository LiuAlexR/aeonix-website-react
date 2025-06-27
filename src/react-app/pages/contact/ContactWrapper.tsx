import { FormEvent, useState } from "react";
import "./ContactWrapper.css";
interface Inputs {
    name: string;
    email: string;
    message: string
}
export default function ContactWrapper() {
    const [inputs, setInputs] = useState<Inputs>({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<string | null>(null);
    const [isError, setIsError] = useState<boolean>(false);
    const handleChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const target = event.target as HTMLInputElement; // Cast event.target to HTMLInputElement
        const name = target.name;
        const value = target.value;

        setInputs(values => ({ ...values, [name]: value }));
    }

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        setMessage(null);
        setIsError(false);
        setLoading(true);
        const dataToSend = {
            ...inputs
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataToSend),
            });

            if (!response.ok) {
                const errorData = await response.json(); // Parse error response body
                throw new Error(errorData.message || "Failed to submit form. Please try again.");
            }

            const result = await response.json(); // Parse successful response body
            console.log("Form submitted successfully:", result);

            // Set success message and clear the form
            setMessage("Your message has been sent successfully!");
            setIsError(false);
            setInputs({ name: "", email: "", message: "" }); // Clear form fields

        } catch (error: any) {
            console.error("Error submitting form:", error);
            // Set error message
            setMessage(error.message || "An unexpected error occurred. Please try again later.");
            setIsError(true);
        } finally {
            setLoading(false); // Set loading state to false regardless of success or failure
        }
    }
    return(
        <>
         <div className="text-form-contact-wrapper">
                <div className="contact-text">
                    We want to hear from you!
                </div>
                <form onSubmit={handleSubmit} id="form-contact-wrapper">
                    <label className="form-contact-label">Enter your name:<br />
                        <input
                            type="text"
                            name="name"
                            value={inputs.name}
                            onChange={handleChange}
                            className="form-contact-text"
                        />
                    </label>
                    <label className="form-contact-label">Enter your email: <br />
                        <input
                            type="string"
                            name="email"
                            value={inputs.email}
                            onChange={handleChange}
                            className="form-contact-text"
                        />
                    </label>
                    <label className="form-contact-label">Enter your message: <br />
                        <textarea
                            name="message"
                            value={inputs.message}
                            onChange={handleChange}
                            className="form-contact-textarea form-contact-text"
                        />
                    </label>
                    <input type="submit" disabled={loading} className="form-contact-submit" />
                </form>
            </div>
            {message && (
                <div className={isError ? 'form-contact-message-error' : 'form-contact-message-success'}>
                    {message}
                </div>
            )}
        </>
    );
}