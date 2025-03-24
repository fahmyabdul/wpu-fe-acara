import { Button, Card, CardBody, CardHeader, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaLocationDot } from "react-icons/fa6";


const DataTiket = [
    {
        "title": "Pangandaran Beach",
        "available": 100,
        "location": "Kabupaten Ciamis",
        "link": "#",
    }
]

const HomeLayout = () => {
    const router = useRouter();

    return (
        <div className="h-screen w-full overflow-y-auto px-10 py-5">
            <Navbar maxWidth="full" shouldHideOnScroll>
                <NavbarBrand>
                    <Image
                        src="/images/general/logo.svg" 
                        alt="logo" 
                        width={100} 
                        height={40}
                        onClick={
                            ()=> {router.push("/")}
                        }
                    />
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarItem isActive>
                        <Link aria-current="page" href="#">
                            Beranda
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Tentang Kami
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Kontak
                        </Link>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem>
                        <Button onPress={()=> router.push("/auth/register")} color="danger" href="#" variant="flat">
                            Daftar
                        </Button>
                    </NavbarItem>
                    <NavbarItem className="hidden lg:flex">
                        <Link href="/auth/login">Masuk</Link>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
            <div className="grid grid-cols-5 gap-4 my-10">
                <Card>
                    <CardHeader className="pb-2 pt-2 px-4 flex-col items-start">
                        <Image
                        alt="Card background"
                        className="object-cover rounded-xl"
                        src="https://heroui.com/images/hero-card-complete.jpeg"
                        width={270}
                        height={10}
                        />
                        <h4 className="font-bold text-large text-danger">Pangandaran Beach</h4>
                        <p className="text-tiny uppercase font-bold">100 tiket tersedia</p>
                        <small className="inline-flex items-center text-default-500">
                            <FaLocationDot style={{ verticalAlign: "bottom", marginRight:"2px" }} />
                            <p>Kabupaten Ciamis</p>
                        </small>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader className="pb-2 pt-2 px-4 flex-col items-start">
                        <Image
                        alt="Card background"
                        className="object-cover rounded-xl"
                        src="https://heroui.com/images/hero-card-complete.jpeg"
                        width={270}
                        height={10}
                        />
                        <h4 className="font-bold text-large text-danger">Pangandaran Beach</h4>
                        <p className="text-tiny uppercase font-bold">100 tiket tersedia</p>
                        <small className="inline-flex items-center text-default-500">
                            <FaLocationDot style={{ verticalAlign: "bottom", marginRight:"2px" }} />
                            <p>Kabupaten Ciamis</p>
                        </small>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader className="pb-2 pt-2 px-4 flex-col items-start">
                        <Image
                        alt="Card background"
                        className="object-cover rounded-xl"
                        src="https://heroui.com/images/hero-card-complete.jpeg"
                        width={270}
                        height={10}
                        />
                        <h4 className="font-bold text-large text-danger">Pangandaran Beach</h4>
                        <p className="text-tiny uppercase font-bold">100 tiket tersedia</p>
                        <small className="inline-flex items-center text-default-500">
                            <FaLocationDot style={{ verticalAlign: "bottom", marginRight:"2px" }} />
                            <p>Kabupaten Ciamis</p>
                        </small>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader className="pb-2 pt-2 px-4 flex-col items-start">
                        <Image
                        alt="Card background"
                        className="object-cover rounded-xl"
                        src="https://heroui.com/images/hero-card-complete.jpeg"
                        width={270}
                        height={10}
                        />
                        <h4 className="font-bold text-large text-danger">Pangandaran Beach</h4>
                        <p className="text-tiny uppercase font-bold">100 tiket tersedia</p>
                        <small className="inline-flex items-center text-default-500">
                            <FaLocationDot style={{ verticalAlign: "bottom", marginRight:"2px" }} />
                            <p>Kabupaten Ciamis</p>
                        </small>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader className="pb-2 pt-2 px-4 flex-col items-start">
                        <Image
                        alt="Card background"
                        className="object-cover rounded-xl"
                        src="https://heroui.com/images/hero-card-complete.jpeg"
                        width={270}
                        height={10}
                        />
                        <h4 className="font-bold text-large text-danger">Pangandaran Beach</h4>
                        <p className="text-tiny uppercase font-bold">100 tiket tersedia</p>
                        <small className="inline-flex items-center text-default-500">
                            <FaLocationDot style={{ verticalAlign: "bottom", marginRight:"2px" }} />
                            <p>Kabupaten Ciamis</p>
                        </small>
                    </CardHeader>
                </Card>
            </div>
        </div>
    )
}

export default HomeLayout;