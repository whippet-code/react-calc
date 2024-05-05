export default function Display({ input, mem, operator, result }) {
   return (
      <div className="grid-flow-row text-center pt-4 font-black">
         <div className="grid-flow-row block">
            <h5 className='text-xl text-teal-700'>{mem} {operator} {input}</h5>
         </div>
         <h3 className='text-3xl text-blue-700'>Result: {result}</h3>
      </div>
   )
}