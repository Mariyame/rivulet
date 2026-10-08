import InputError from "@/components/input-error";
import PasswordInput from "@/components/password-input";
import { Button } from "@/components/ui/button";
import { 
    DialogClose, 
    DialogDescription, 
    DialogFooter, 
    DialogHeader, 
    DialogTitle
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { TwoFAStepProps } from "@/types/auth";

export function ConfirmPasswordStep({handleSubmit, errors, message, isLoading}: TwoFAStepProps) {
    return (
        <form onSubmit={handleSubmit}>
            <DialogHeader>
            <DialogTitle>Confirm Password</DialogTitle>
            <DialogDescription>
                Please enter your password to continue.
            </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
            {message && <InputError message={message} className="mt-1" />}
            <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <PasswordInput
                id="password"
                name="password"
                autoFocus
                />
            </div>
            </div>
            <DialogFooter>
            <DialogClose render={
            <Button variant="outline" disabled={isLoading}>
                Cancel
            </Button>
            } />
            <Button type="submit">
                {isLoading ? "Confirming..." : "Confirm"}
            </Button>
            </DialogFooter>
        </form>
    )
}