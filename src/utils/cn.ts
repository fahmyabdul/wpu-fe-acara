import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    // Supaya bisa merge class-class yang ada di tailwind dan bisa dikombinasikan dengan syntax JSX
    // Supaya nanti kalau ada conditional kita bisa memanfaatkan function tersebut
    return twMerge(clsx(inputs));
}