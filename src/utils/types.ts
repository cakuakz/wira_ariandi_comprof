export type HomeButtonProps = {
    text: string;
    onClick?: () => void;
    className?: string
    dataAos?: string
}

export type CustomButtonProps = {
    text: string;
    onClick?: () => void;
    className?: string
    dataAos?: string
    isActive: boolean
}

export type EtamOfficeLocationProps = {
    location: string;
    address: string;
    email: string;
    imgUrl: string;
    phone?: string
}