import { ToastOptions } from "@ionic/react";
export function toast(message: string, duration = 2000) {
    const toast = document.createElement('ion-toast');
    toast.message = message;
    toast.duration = duration;
    toast.dismiss = async () => true;
        
    document.body.appendChild(toast);
    return toast.present();
}
    
