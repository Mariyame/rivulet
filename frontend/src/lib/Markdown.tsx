import { Fragment } from "react"; 

export function Markdown({ text }: { text: string }) {
    const re = /(\*\*(.+?)\*\*|\*(.+?)\*|\[(.+?)\]\((.+?)\))/g;
    const nodes: React.ReactNode[] = [];
    let last = 0;
    let m: RegExpExecArray | null;

    while ((m = re.exec(text))) {
        if (m.index > last) nodes.push(text.slice(last, m.index));
        if (m[2]) {
            nodes.push(<strong key={m.index} className="font-semibold">{m[2]}</strong>);
        } else if (m[3]) {
            nodes.push(<em key={m.index}>{m[3]}</em>);
        } else {
            nodes.push(
                <a
                    key={m.index}
                    href={m[5]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium underline underline-offset-4 hover:opacity-80"
                >
                    {m[4]}
                </a>,
            );
        }
        last = m.index + m[0].length;
    }
    if (last < text.length) nodes.push(text.slice(last));

    return <Fragment>{nodes}</Fragment>;
}