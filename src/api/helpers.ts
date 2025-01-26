//через те джейсон парс не типізується робимо додатковий метод
export const  retriveLocalStorage = <T>(key:string)=>{
    const object= localStorage.getItem(key) || '';
    if(!object){
        return {} as T; // строга типізація;
    }
    const parse =JSON.parse(object);
    return parse as T;
}