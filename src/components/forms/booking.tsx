import {BookingType} from "../../types/boooking";
import {useEffect, useState} from "react";
import {SingleEmployeeType} from "../../types/employee";
import {ClinicServiceType, SubServiceType} from "../../types/service";
import {useGetServices} from "../../hooks/useServices.ts";
import {useGetSubServices} from "../../hooks/useSubServices.ts";
import {useGetEmployeesByClinicService} from "../../hooks/useEmployee.ts";
import {customToast} from "../../lib/utils.tsx";
import {useGetUsers} from "../../hooks/useUsers.ts";
import {SingleUserType} from "../../types/user";
import Select from "react-select";
import {Input, MaskInput} from "../ui/input.tsx";
import {Button} from "../ui/button.tsx";
import {useGetFreeSlots} from "../../hooks/useBookings.ts";

export function BookingForm({action}: { action: "CREATE" | "EDIT", data?: BookingType }) {
    const [clinicServiceId, setClinicServiceId] = useState<number>();
    const [fetchSubServicesEnabled, setFetchSubServicesEnabled] = useState<boolean>(false);
    const [employeeId, setEmployeeId] = useState<number>();
    const [subServiceId, setSubServiceId] = useState<number>();

    const [bookingDate, setBookingDate] = useState<any>(new Date());

    const [comment, setComment] = useState<string>();
    const [bookingUserType, setBookingUserType] = useState<"CREATE" | "IGNORE">("IGNORE");
    const [userName, setUserName] = useState<string>();
    const [userSurname, setUserSurname] = useState<string>();
    const [userPhone, setUserPhone] = useState<string>();

    const [existedUser, setExistedUser] = useState<SingleUserType>();

    const getClinicServicesQuery = useGetServices()
    const clinicServicesData: ClinicServiceType[] = getClinicServicesQuery.data?.data?.services

    const getSubServicesQuery = useGetSubServices(clinicServiceId!, "", fetchSubServicesEnabled)
    const subServicesData: SubServiceType[] = getSubServicesQuery?.data?.data?.clinicSubServices

    const getEmployeesQuery = useGetEmployeesByClinicService(clinicServiceId!, fetchSubServicesEnabled)
    const employeesData: SingleEmployeeType[] = getEmployeesQuery.data?.data?.employees

    const getUsersQuery = useGetUsers(bookingUserType === "IGNORE")
    const usersData = getUsersQuery?.data?.data?.users

    const getFreeSlotsQuery = useGetFreeSlots(employeeId!, subServiceId!, bookingDate, !!(employeeId && subServiceId && bookingDate))
    const slotsData: { time: string }[] = getFreeSlotsQuery?.data?.data?.bookingSlots

    const onSubmit = (e: any) => {
        e.preventDefault();

        if (bookingUserType === "CREATE") {
            if (!userName) {
                return customToast("ERROR", "User name is required!")
            }

            if (!userPhone) {
                return customToast("ERROR", "User phone is required!")
            }
        }

        if (bookingUserType === "IGNORE") {
            if (!existedUser) {
                return customToast("ERROR", "Please select user!")
            }
        }

        if (!bookingDate) {
            return customToast("ERROR", "Please choose booking date!")
        }

        if (!employeeId) {
            return customToast("ERROR", "Employee is required!")
        }

        if (!subServiceId) {
            return customToast("ERROR", "SubService is required!")
        }

        const payload = {
            userId: existedUser?.id,
            employeeId,
            bookingTimeStart: 1,
            bookingTimeEnd: 1,
            bookingUserType,
            name: userName || undefined,
            surname: userSurname || undefined,
            phone: userPhone || undefined,
        }

        console.log(payload)
    }

    useEffect(() => {
        if (fetchSubServicesEnabled) {
            getSubServicesQuery.refetch()
            getEmployeesQuery.refetch()
        }
    }, [clinicServiceId]);

    useEffect(() => {
        getFreeSlotsQuery.refetch()
    }, [bookingDate]);

    return (
        <form onSubmit={onSubmit} className={"flex flex-col gap-4"}>
            <h1 className={"text-xl font-medium"}>{action === "CREATE" ? "Create Booking" : "Update booking"}</h1>

            <div className={"grid grid-cols-3 gap-4 text-sm"}>
                <div className={"flex flex-col gap-1"}>
                    <span className={"font-medium"}>Service:</span>
                    <Select
                        options={clinicServicesData?.map(item => {
                            return {
                                value: item.id,
                                label: item?.service?.name
                            }
                        })}
                        onChange={(item) => {
                            setClinicServiceId(item?.value!)
                            setFetchSubServicesEnabled(true)
                        }}
                        placeholder={"Choose service"}
                    />
                </div>

                <div className={"flex flex-col gap-1"}>
                    <span className={"font-medium"}>Sub-service:</span>

                    <Select
                        options={subServicesData?.map(item => {
                            return {
                                value: item.id,
                                label: item?.name
                            }
                        })}
                        onChange={(item) => setSubServiceId(item?.value!)}
                        placeholder={"Choose sub-service"}
                    />
                </div>

                <div className={"flex flex-col gap-1"}>
                    <span className={"font-medium"}>Employee:</span>
                    <Select
                        options={employeesData?.map(item => {
                            return {
                                value: item.id,
                                label: `${item?.name} ${item?.surname}`,
                            }
                        })}
                        onChange={(item) => {
                            setEmployeeId(item?.value!)
                            setFetchSubServicesEnabled(true)
                        }}
                        placeholder={"Choose employee"}
                    />
                </div>

                <div className={"flex flex-col gap-1"}>
                    <span className={"font-medium"}>Booking Date:</span>
                    <Input
                        type={"date"}
                        onChange={(e) => setBookingDate(new Date(e.target.value).toISOString())}
                    />
                </div>

                <div className={"flex flex-col gap-1"}>
                    <span className={"font-medium"}>Free slots:</span>
                    <Select
                        options={slotsData?.map(item => {
                            return {
                                value: item.time,
                                label: item.time,
                            }
                        })}
                        onChange={(item) => {
                            setBookingDate(item?.value!)
                        }}
                        placeholder={"Choose free slot"}
                    />
                </div>

                <div className={"flex flex-col gap-1"}>
                    <span className={"font-medium"}>Booking User Type:</span>
                    <Select/>
                </div>

                <div className={"flex flex-col gap-1"}>
                    <span className={"font-medium"}>Name:</span>
                    <Input placeholder={"enter name"}/>
                </div>

                <div className={"flex flex-col gap-1"}>
                    <span className={"font-medium"}>Surname:</span>
                    <Input placeholder={"enter surname"}/>
                </div>

                <div className={"flex flex-col gap-1"}>
                    <span className={"font-medium"}>Phone:</span>
                    <MaskInput placeholder={"+998"}/>
                </div>

                <div className={"flex items-end"}>
                    <Button className={"w-full"}>Create</Button>
                </div>
            </div>
        </form>
    )
}
