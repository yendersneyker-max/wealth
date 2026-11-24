import type {AppData} from './types'
const KEY='wealth-control-2.0-luxury'
const LEGACY_KEY='wealth-control-v1'
export const initialData:AppData={
 transactions:[],
 investments:[],
 debts:[],
 envelopes:[],budgets:[],accounts:[],worthHistory:[],recurring:[],goals:[],trips:[],monthClosures:[],budgetPriorities:['Vivienda','Alimentación','Transporte','Salud','Ocio','Otros'],planMode:'gasto-ahorro',categories:['Alimentación','Vivienda','Transporte','Ocio','Salud','Suscripciones','Compras','Ahorro','Salario','Otros'],
 settings:{
  salarySplit:[{name:'Ahorro',percent:30},{name:'Inversiones',percent:30},{name:'Gastos',percent:20},{name:'Disponible',percent:20}],
  monthlyExpenses:1000,annualReturn:7,targetMonthlyIncome:1500,theme:'luxury'
 }
}
export function loadData():AppData{
 const raw=localStorage.getItem(KEY)??localStorage.getItem(LEGACY_KEY)
 if(!raw) return initialData
 try { const saved=JSON.parse(raw); if(!saved||typeof saved!=='object'||Array.isArray(saved)) throw new Error('Formato inesperado'); return {...initialData,...saved,envelopes:saved.envelopes??[],budgets:saved.budgets??[],accounts:saved.accounts??[],worthHistory:saved.worthHistory??[],recurring:saved.recurring??[],goals:saved.goals??[],trips:saved.trips??[],monthClosures:saved.monthClosures??[],budgetPriorities:saved.budgetPriorities??initialData.budgetPriorities,planMode:saved.planMode??initialData.planMode,categories:saved.categories??initialData.categories,settings:{...initialData.settings,...saved.settings}} }
 catch { throw new Error(`No se pudieron leer los datos guardados. Se han conservado sin cambios en este dispositivo (claves ${KEY} y ${LEGACY_KEY}). No borres los datos del navegador; puedes recuperar el contenido desde el almacenamiento local.`) }
}
export function saveData(data:AppData){
 const serialized=JSON.stringify(data)
 const current=localStorage.getItem(KEY)
 if(current!==null) localStorage.setItem(`${KEY}-previous`,current)
 localStorage.setItem(KEY,serialized)
}
