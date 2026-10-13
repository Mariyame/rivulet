import { Alert, AlertAction, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { 
    DialogClose, 
    DialogDescription, 
    DialogFooter, 
    DialogHeader, 
    DialogTitle
} from "@/components/ui/dialog";
import { Field, FieldLabel } from "@/components/ui/field";

import { Copy, Download } from "lucide-react";
interface SaveRecoveryCodesStepProps {
    recoveryCodes: string[];
    onDone: () => void;
}

export function SaveRecoveryCodesStep({recoveryCodes}: SaveRecoveryCodesStepProps) {

    const handleCopy = async () => {
        await navigator.clipboard.writeText(recoveryCodes.join('\n'))
    }

    const handleDownload = async () => {
        const content = recoveryCodes.join('\n')
        const blob = new Blob([content], {type: 'text/plain;charset=utf-8'});
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'rivulet-recovery-codes.txt';
        link.click();

        URL.revokeObjectURL(url);
    }
    return (
        <>
            <DialogHeader>
            <DialogTitle>Save your recovery codes</DialogTitle>
            <DialogDescription>
                Your two-factor authentication is almost ready. 
                Save these recovery codes in a safe place. 
                You can use them to regain access to your account if you lose your device.
            </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
            {/* {message && <InputError message={message} className="mt-1" />} */}
             <Alert className="flex flex-col justify-center">
                <AlertDescription className="grid grid-cols-2 justify-items-center gap-2">
                    {recoveryCodes.map((code) => (
                            <code key={code}
                                  className="w-full rounded-md bg-muted px-3 text-center font-mono text-xs"
                            >
                                {code}
                            </code>
                    ))}
                  
                </AlertDescription>
                <AlertAction className="flex gap-3 justify-end mt-6">
                    <Button type="button" variant="outline" onClick={handleCopy}>
                        <Copy/>
                        Copy
                    </Button>
                    <Button type="button" variant="outline" onClick={handleDownload}>
                        <Download />
                        Download
                    </Button>
                </AlertAction>
             </Alert>
            <Field orientation="horizontal" data-disabled>
                <Checkbox id="toggle-checkbox" name="toggle-checkbox"/>
                <FieldLabel htmlFor="toggle-checkbox">I saved my recovery codes</FieldLabel>
            </Field>
            </div>
            <DialogFooter>
            <DialogClose render={
            <Button variant="outline">
                Done
            </Button>
            } />
            </DialogFooter>
        </>
    )
}