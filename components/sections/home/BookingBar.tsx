import Container from "@/components/ui/Container";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";

export default function BookingBar() {
  return (
    <div className="relative z-20 -mt-24 mb-20">
      <Container>
        <div className="bg-white p-8 md:p-10 shadow-2xl shadow-black/5 rounded-sm">
          <form className="grid grid-cols-1 md:grid-cols-4 gap-8 items-end">
            
            {/* Check In */}
            <Input label="Check In" type="date" />

            {/* Check Out */}
            <Input label="Check Out" type="date" />

            {/* Guests (Pakai Atom Select yang baru kita buat) */}
            <Select 
              label="Guests"
              options={[
                { label: "1 Adult", value: "1" },
                { label: "2 Adults", value: "2" },
                { label: "Family (2A + 1C)", value: "3" },
              ]} 
            />

            {/* Submit */}
            <Button className="w-full h-[52px]" variant="primary">
              Check Availability
            </Button>
            
          </form>
        </div>
      </Container>
    </div>
  );
}