import { Separator } from "@/components/ui/separator";
import { privacy } from "@/data/legal";
import { PublicPageLayout } from "@/features/public/public-page-layout";

export default function SupportPage() {
    return (
        <PublicPageLayout
            title="How can we help?"
            description="Find answers and get back to your flow."
             >
            <div className="container-page">
               {privacy.sections.map((s, i) => (
                    <>
                    <section key={s.id} id={s.id} className="p-6">
                        <h2 className="font-bold"> <span className="text-berry text-sm mr-3">{s.number}</span>{s.title}</h2>
                        {s.paragraphs?.map((p, i) => <p key={i}>{p}</p>)}
                        {s.list && <ul className="list-disc list-inside">{s.list.map((li, i) => <li key={i}>{li}</li>)}</ul>}
                    </section>
                    {privacy.sections.length > i + 1 && <Separator />}
                    </>
                ))}
           </div>
        </PublicPageLayout>
    );
}