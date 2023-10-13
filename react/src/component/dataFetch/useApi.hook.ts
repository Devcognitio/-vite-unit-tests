
export const useApi  = ()=> {
    const fetchData  = async ()=> {
        try{
            const res = await fetch('http://example-vite-test.com');
            return await res.json(); 
        }catch (e){
            throw e;
        }
    }
    return {
        fetchData
    }
}
