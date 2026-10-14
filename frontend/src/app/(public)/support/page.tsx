import { PublicPageLayout } from "@/features/public/public-page-layout";
import { FAQs } from "@/features/public/faqs";
import { Contact } from "@/features/public/contact";


export default function SupportPage() {
    return (
        <PublicPageLayout
            title="How can we help?"
            description="Find a quick answer below, or send us a message and a real person will read it."
            // headerContent={<SupportSearch />}
             >
         <FAQs />
         <Contact />
        </PublicPageLayout>
    );
}