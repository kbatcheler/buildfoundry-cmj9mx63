import { ContactForm } from "../../components/contact-form";

export default function ContactPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg text-gray-700 mb-6">
        Have questions or need support? Fill out the form below and we will get back to you as soon as possible.
      </p>
      <ContactForm />
    </div>
  );
}