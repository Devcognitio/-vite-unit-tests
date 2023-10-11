import {vi, describe, test, expect, beforeEach} from  'vitest'
import fetchData, { fetchTest } from './fetchData';
import { AxiosTest } from './axiosTest';
import axios from 'axios';

vi.mock('./axiosTest', ()=> ({
    AxiosTest: vi.fn()
}));


vi.mock('axios', ()=> ({
    default: {
        get: vi.fn()
    }
}));

const axiosMock = vi.mocked(axios.get);




describe('fetchData', ()=> {

    describe('fetchData', ()=> {
        beforeEach(()=> {
        });
        test('should fetch success data', async ()=> {

            axiosMock.mockResolvedValue({data: {att: 'foo'}});

            //act
            const result = await fetchData();


            //assert 
            expect(result);
            expect(axiosMock).toHaveBeenNthCalledWith(1, 'https://example.com/api/data' );


        });
    
    
        test('should throw error', async ()=> {

            //arrange 
            axiosMock.mockRejectedValue({data: {att: 'foo'}});

            // act assert 
            await expect(fetchData()).rejects.toEqual({data: {att: 'foo'}});
    
        });

        test('should throw error', async ()=> {

            //arrange 
            axiosMock.mockRejectedValue({data: {att: 'foo'}});

            try{
                // act assert 
                await fetchData();
                // fail
                throw new Error();
            }catch(e){
                expect(e).toEqual({data: {att: 'foo'}});
                return;
            }



        });
    });

  
});
