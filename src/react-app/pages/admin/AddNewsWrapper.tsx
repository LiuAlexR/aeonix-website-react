import { FormEvent, useState } from "react";
import "./AddNewsWrapper.css";
interface Inputs {
    imageLink: string;
    redirectLink: string;
    blurb: string;
    password: string
}
export default function AddNewsWrapper() {
    const [inputs, setInputs] = useState<Inputs>({ imageLink: "", redirectLink: "", blurb: "", password: "" });
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
        var errorDataMessage = "";
        try {
            const response = await fetch("/api/add/news", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataToSend),
            });

            if (!response.ok) {
                const errorData = await response.json();
                errorDataMessage = errorData.error; 
                console.log(errorDataMessage);
                throw new Error(errorDataMessage || "Failed to submit form. Please try again.");
            }

            const result = await response.json(); // Parse successful response body
            console.log("Form submitted successfully:", result);

            setMessage("Your message has been sent successfully!");
            setIsError(false);
            setInputs({ imageLink: "", redirectLink: "", blurb: "", password: "" }); // Clear form fields

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
         <div className="text-form-admin-news-wrapper">
                <div className="admin-news-text">
                    Add a news article
                </div>
                <form onSubmit={handleSubmit} id="form-admin-news-wrapper">
                    <label className="form-admin-news-label">Enter the image link:<br />
                        <input
                            type="text"
                            name="imageLink"
                            value={inputs.imageLink}
                            onChange={handleChange}
                            className="form-admin-news-text"
                        />
                    </label>
                    <label className="form-admin-news-label">Enter the redirect link: <br />
                        <input
                            type="string"
                            name="redirectLink"
                            value={inputs.redirectLink}
                            onChange={handleChange}
                            className="form-admin-news-text"
                        />
                    </label>
                    <label className="form-admin-news-label">Enter the blurb: <br />
                        <textarea
                            name="blurb"
                            value={inputs.blurb}
                            onChange={handleChange}
                            className="form-admin-news-textarea form-admin-news-text"
                        />
                    </label>
                    <label className="form-admin-news-label">Enter the password: <br />
                        <input
                            type="string"
                            name="password"
                            value={inputs.password}
                            onChange={handleChange}
                            className="form-admin-news-text"
                        />
                    </label>
                    <input type="submit" disabled={loading} className="form-admin-news-submit" />
                </form>
            </div>
            {message && (
                <div className={isError ? 'form-admin-news-message-error' : 'form-admin-news-message-success'}>
                    {message}
                </div>
            )}
        </>
    );
}