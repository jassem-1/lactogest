import React, { useEffect } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../ui/AlertDialog';
import { cn } from '@/utils/tailwind';

interface ConfirmationDialogProps {
  danger?: boolean;
  open: boolean;
  title: string;
  description?: React.ReactNode;
  onConfirm?: () => void;
  onCancel?: () => void;
  children?: React.ReactNode;
}

export function ConfirmationDialog({
  danger,
  open,
  children,
  title,
  description,
  onCancel,
  onConfirm,
}: ConfirmationDialogProps) {
  const [alertOpen, setAlertOpen] = React.useState(false);
  useEffect(() => {
    if (open) {
      setAlertOpen(true);
    } else {
      setAlertOpen(false);
    }
  }, [open]);
  return (
    <AlertDialog
      open={alertOpen}
      onOpenChange={(open) => !open && onCancel?.()}
    >
      {children && <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>}
      <AlertDialogContent className="min-w-[40%]">
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="rounded-md" onClick={onCancel}>
            Annuler
          </AlertDialogCancel>
          <AlertDialogAction
            className={cn(
              'rounded-md',
              danger &&
                'bg-destructive text-destructive-foreground hover:bg-destructive/90',
            )}
            onClick={onConfirm}
          >
            Continuer
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
