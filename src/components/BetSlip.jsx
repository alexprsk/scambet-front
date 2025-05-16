export default function BetSlip() {
    return (
        <div className="fixed bottom-0 right-4 bg-stone-400 hover:bg-gray-500 rounded-sm shadow-lg p-2 w-96  h-12 cursor-pointer">
            <div className="flex justify-center items-center">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
</svg>

            </div>
            <button className="hidden mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full">
                Place Bet
            </button>
        </div>        
    );
} 