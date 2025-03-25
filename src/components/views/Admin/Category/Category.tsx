import DataTable from "@/components/ui/DataTable";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Key, ReactNode, useCallback } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { COLUMN_LISTS_CATEGORY } from "./Category.constants";

const Category = () => {
    const router = useRouter();
    const renderCell = useCallback(
        (category: Record<string, unknown>, columnKey: Key) => {
            const cellValue = category[columnKey as keyof typeof category];

            switch(columnKey){
                case "icon":
                    return (
                        <Image src={`${cellValue}`} alt="icon" width={100} height={200}/>
                    );
                case "actions":
                    return (
                        <Dropdown>
                            <DropdownTrigger>
                                <Button isIconOnly size="sm" variant="light">
                                    <CiMenuKebab className="text-default-700"/>
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu>
                                <DropdownItem 
                                    key="detail-category" 
                                    onPress={() => router.push(`/admin/category/${category._id}`)}
                                >
                                    View
                                </DropdownItem>
                                <DropdownItem 
                                    key="delete-category" 
                                    className="text-danger-500"
                                >
                                    Delete
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    );
                default:
                    return cellValue as ReactNode;
            }
        },
        [router.push]
    );
    return (
        <section>
            <DataTable 
                renderCell={renderCell}
                columns={COLUMN_LISTS_CATEGORY}
                data={[
                    {
                        _id: "123",
                        name: "kategory 1",
                        description: "kategory 1 description",
                        icon: "/images/general/logo.png"
                    }
                ]}
            ></DataTable>
        </section>
    )
};

export default Category;