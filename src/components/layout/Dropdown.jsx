import { IoIosArrowDown } from 'react-icons/io';

const services = [
  "Application Development & Support",
  "Strategy & IT Consulting",
  "Product & Services"
];

export default function Dropdown({ isOpen }) {
  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 w-72 bg-white dark:bg-slate-800 shadow-2xl border-t-4 border-brand-red py-3 z-50 animate-in fade-in slide-in-from-top-2">
      <ul className="text-gray-700 dark:text-gray-200 normal-case font-medium">
        {services.map((service, index) => (
          <li 
            key={index} 
            className={`px-6 py-3 hover:bg-gray-50 dark:hover:bg-slate-700 hover:text-brand-red transition-colors cursor-pointer ${
              index !== services.length - 1 ? 'border-b border-gray-100 dark:border-slate-700' : ''
            }`}
          >
            {service}
          </li>
        ))}
      </ul>
    </div>
  );
}