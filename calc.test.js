const cal = require('../../week4tek/npm/calculator');

describe('cal metodunu test ediyoroz',()=>{
    test('sonuc objesi opResult  olamli', () => {
        expect(cal(1, 2, "+")).toHaveProperty('opResult');
         
    });
    test('10+2= 12 olmalidir', () =>{
        expect(cal(10,2,'+').opResult).toBe(12);
        
        });
    
    
    test('4-2= 2 olmalidir', () =>{
    expect(cal(4,2,'-').opResult).toBe(2);
    
    });
    
    test('4*2= 8olmalidir', () =>{
        expect(cal(4,2,'*').opResult).toBe(8);
        
        });
        
    test('4*2= 8olmalidir', () =>{
        expect(cal(4,2,'u')).toHaveProperty('fault');
        
        });
    
    
    
    //     test('operator hatasi olmali', () =>{
    // const result=cal(3,4,'q');
    // const obj ={opResult:'Unvalid' , unvalid:['your sign is unvalid']};
    
    // expect(result).toMatchObject(obj);
    
    
    //     })
    
    
    // test('birden fazla hata olabilir', ()=>{
    
    // const hata_1=cal(5,0,'/');
    // const hata_2=cal('5',0,'/');
    
    // expect (hata_1.fault.length).toEqual(1);
    
    // expect (hata_2.fault.length).toEqual(2);
    
    
    // })

});

describe('ikinci paketi test ediyoruz', ()=>{

    test('herhangi bir test', () =>{
        expect(1==1).toBe(true);

    });

    test('yasin manka kimdir',() =>{

        expect('yasin manka'=='yasin manka').toBe(true);
    });
});