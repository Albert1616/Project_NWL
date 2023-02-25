import { Check } from "phosphor-react";

export function FormNewHabit(){
return (
    <form className="w-full flex flex-col mt-6">
        <label htmlFor="title" className="font-semibold leading-tight">
            Qual o seu comprometimento?
        </label>

        <input 
        type='text' 
        placeholder="ex:. caminhar, dormir, etc..."
        className="p-4 rounded-lg mt-3 bg-zinc-800 text-white 
        placeholder:text-zinc-400 outline-none"
        autoFocus/>

        <label htmlFor="" className="font-semibold leading-tight mt-4">Qual a recorrência?</label>
        
        <button 
        className="mt-6 rounded-lg flex items-center 
        justify-center gap-3 bg-green-600 font-semibold p-4 hover:bg-green-500
        text-lg">
            <Check size={20}/>
            Salvar
        </button>
    </form>
)    
}