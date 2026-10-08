import InputError from "@/components/input-error";
import { Button } from "@/components/ui/button";
import { 
    DialogDescription, 
    DialogFooter, 
    DialogHeader, 
    DialogTitle
} from "@/components/ui/dialog";


export function SetupAuthenticatorSetupStep(
    {
        qrCode, 
        message, 
        onContinue}: 
    {
        qrCode: string,
         message: string, 
         onContinue: () => void
    }) {
    return (
        <>
            <DialogHeader>
            <DialogTitle>Set up two-factor authentication</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col items-center justify-center gap-4 py-4">
            {message && <InputError message={message} className="mt-1" />}
            <div dangerouslySetInnerHTML={{__html: qrCode}}></div>
            </div>
            <DialogDescription className="text-center">
                Scan this QR code with an authenticator app such as Google Authenticator, Microsoft Authenticator, or 1Password.
            </DialogDescription>
            <DialogFooter>
            <Button type="submit" onClick={onContinue}>
               Continue
            </Button>
            </DialogFooter>
        </>
    )
}