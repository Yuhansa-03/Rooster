import { ContactForm } from "@/components/contact-form";
import { SitePage } from "@/components/site-page";

export default function ContactPage() {
  return (
    <SitePage
      title="Contact us"
      intro="Tell us what you are building. We will come back with a time to talk."
    >
      <ContactForm />
    </SitePage>
  );
}
