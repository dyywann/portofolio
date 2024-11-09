import { ArrowDown2, ArrowUp2 } from "iconsax-react";
import { useState } from "react";

interface AccordionProps {
  year: string;
  title: string;
  subtitle: string;
  description: string;
}

const Accordion: React.FC<AccordionProps> = ({ year, title, subtitle, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="text-white p-4 rounded-md mb-4">
      <div className="flex items-center justify-between cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        {/* Tahun dan Judul */}
        <div className="flex items-start gap-6">
          <span className="text-primary-color font-bold text-base md:text-lg">{year}</span>
          <div>
            <h3 className="font-semibold text-base md:text-xl">{title}</h3>
            <p className="text-[#E0E0E0] font-semibold text-xs md:text-base">{subtitle}</p>
          </div>
        </div>

        {/* Ikon untuk menandakan buka/tutup */}
        <span className="text-white">{isOpen ? <ArrowUp2 size="24" color="#FFFFFF" /> : <ArrowDown2 size="24" color="#FFFFFF" />}</span>
      </div>

      {/* Deskripsi */}
      {isOpen && (
        <div className="mt-4 text-[#E0E0E0] text-xs leading-160">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
