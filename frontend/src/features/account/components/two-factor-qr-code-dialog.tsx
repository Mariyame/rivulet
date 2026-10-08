'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { authService } from "@/services/authService";
import { useState } from "react";
import { getApiError } from "@/lib/error";
import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function TwoFactorQrCodeDialog({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) {
  const [qrCode, setQrCode] = useState<string | null>(null);
  const [recoveryCodes, setRecoveryCodes] = useState<string[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchQrCode = async () => {
    try {
      const response = await authService.getTwoFactorQrCode();
      setQrCode(response.data.qr_code);
    } catch (error: unknown) {
      const apiError = getApiError(error);
      setError(apiError.message);
    }
  };

  const fetchRecoveryCodes = async () => {
    try {
      const response = await authService.getRecoveryCodes();
      setRecoveryCodes(response.data.recovery_codes);
    } catch (error: unknown) {
      const apiError = getApiError(error);
      setError(apiError.message);
    }
  };

  const handleOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen);

    if (nextOpen) {
      setError(null);
      setQrCode(null);
      setRecoveryCodes(null);
      void fetchQrCode();
      void fetchRecoveryCodes();
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-106.25rem">
        <DialogHeader>
          <DialogTitle>Two-Factor Authentication</DialogTitle>
          <DialogDescription>
            Scan the QR code below with your authenticator app and save your recovery codes.
          </DialogDescription>
        </DialogHeader>
        {error && <Alert variant="destructive">{error}</Alert>}
        {qrCode && (
          <div className="flex justify-center my-4">
            <Image src={qrCode} alt="Two-Factor Authentication QR Code" />
          </div>
        )}
        {recoveryCodes && (
          <div className="my-4">
            <h3 className="text-lg font-medium">Recovery Codes</h3>
            <ul className="list disc list-inside">
              {recoveryCodes.map((code, index) => (
                <li key={index} className="font-mono">
                  {code}
                </li>
              ))}
            </ul>
          </div>
        )}
        <DialogFooter>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}       