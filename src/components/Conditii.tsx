

export default function TermsNotice({ 
  text, 
  className = "",
 }: { 
  text: string; 
  className?: string;
 }) {
  return (
    <p className={`text-sm text-center text-gray-600 ${className}`}>
      {text}{""}
      <a href="#" className="text-blue-700 underline hover:text-blue-800">
        Termenele și Condițiile
      </a>{" "}
      și{""}
      <a href="#" className="text-blue-700 underline hover:text-blue-800">
        Politica de Confidențialitate
      </a>
    </p>
  );
}
