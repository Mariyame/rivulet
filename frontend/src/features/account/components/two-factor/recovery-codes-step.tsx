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
             <Alert>
                <AlertDescription className="grid grid-cols-2 justify-items-center">
                    {recoveryCodes.map((code) => (
                            <span key={code}>{code}</span>
                    ))}
                  
                </AlertDescription>
                <AlertAction className="flex gap-3 justify-end mt-6">
                    <Button variant="outline">
                        <Copy/>
                        Copy
                    </Button>
                    <Button variant="outline">
                        <Download />
                        Download
                    </Button>
                </AlertAction>
             </Alert>
            <Field orientation="horizontal" data-disabled>
                <Checkbox id="toggle-checkbox" name="toggle-checkbox" disabled />
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