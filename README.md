타입스크립트 연습
==================================
              
### 타입스크리트에 익숙해지기 위해서 듣는 강의
        
### set up
1 . npm install typescript
2 . tsconfig.json 작성 : tsconfig.json 파일은 프로젝트를 컴파일하는 데 필요한 루트 파일과 컴파일러 옵션을 지정한다.(쉽게 말해 Typescript를 어떻게 JavaScript로 변환할지 설정한다)
           
### tsconfig.json
(compilerOption)           
module : 컴파일된 코드가 어떤 모듈시스템을 사용할지 정의         
target : 컴파일된 코드가 어떤 환경에서 실행될 지 정의                 
sourceMap : sourcemap 처리를 할지 안할지 정의        
              

(include : 어떤 파일들이 컴파일 과정에 포함될지 설정한다)       
               

(exclude : 어떤 파일들을 컴파일 대상에서 제외할지 설정한다)         
            
### tsc
ts 파일(index.ts)에 있는 코드를 컴파일해서 (index.js)랑 (index.js.map)을 만들어준다          
         
### node는 타입스크립트를 이해하지 못하기에 ts를 js로 컴파일하는 작업이 필요하다