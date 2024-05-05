export default function Button({ value, numberButtonClick }) {
   return (
     <button 
       key={value}
       className="bg-sky-500 hover:bg-sky-700 text-white font-bold p-6 rounded mx-1"
       onClick={() => numberButtonClick(value)} >
       {value}
     </button>
 )}
 