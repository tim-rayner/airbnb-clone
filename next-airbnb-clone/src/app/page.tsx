import Button from "@/components/Button"
import Calendar from "@/components/Calendar/Calendar";
import CategoryItem from "@/components/CategoryItem";

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
        <Calendar />
    </main>
  );
}
