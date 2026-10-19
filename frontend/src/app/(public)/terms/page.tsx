import { Separator } from "@/components/ui/separator";
import { terms } from "@/data/legal";
import { PublicPageLayout } from "@/features/public/public-page-layout";


export default function SupportPage() {
    return (
        <PublicPageLayout
            title="Terms of Service"
            description="The simple rules for using Rivulet. Please read them before you create an account."
             >
           <div className="container-page">
               {terms.sections.map((s, i) => (
                    <>
                    <section key={s.id} id={s.id} className="p-6">
                        <h2 className="font-bold"> <span className="text-berry text-sm mr-3">{s.number}</span>{s.title}</h2>
                        {s.paragraphs?.map((p, i) => <p key={i}>{p}</p>)}
                        {s.list && <ul className="list-disc list-inside">{s.list.map((li, i) => <li key={i}>{li}</li>)}</ul>}
                    </section>
                    {terms.sections.length > i + 1 && <Separator />}
                    </>
                ))}
           </div>
        </PublicPageLayout>
    );
}