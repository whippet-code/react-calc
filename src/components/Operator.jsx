export default function Operator({ operation, opClick }) {
   return (
     <button 
       key={"key"+operation}
       className="bg-sky-500 hover:bg-sky-700 text-white font-bold p-6 rounded mx-1 operatorButton"
       onClick={() => opClick(operation)} >
       {operation}
     </button>
   )
 }