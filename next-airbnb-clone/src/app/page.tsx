'use client'
import Button from "@/components/Button"
import Calendar from "@/components/Calendar/Calendar";
import CategoryItem from "@/components/CategoryItem";
import Listing from "@/components/Listing/Listing";


const onDateChange = (range: { startDate: Date; endDate: Date; key: string }) => {
  console.log(range);
} 

export default function Home() {
  
  return (
    <main className="flex flex-col w-fit ">
        Component Sandbox:
        <Button label="Register"  />
        <div className="flex flex-row">
          <CategoryItem category={{name: "Houses", icon: "pi pi-home"}} />
          <CategoryItem category={{name: "Apartments", icon: "pi pi-building"}} />
          <CategoryItem category={{name: "Condos", icon: "pi pi-star-fill"}} />
        </div>
        <Calendar onDateChange={onDateChange} />
        <Listing />
    </main>
  );
}
