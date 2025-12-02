Message: Error in Prisma Client request: 


Invalid `STUDIO_EMBED_BUILD<"u"&&STUDIO_EMBED_BUILD?bke():require(`${l.prismaClient}/runtime/${c}`),F=e,k=(0,EH.createHash)("sha256").update()` invocation in
/home/milhomem/Documentos/PROJETOS/FaciBank/backend/node_modules/prisma/build/index.js:4823:10635

  4820       }
  4821     }
  4822   }
→ 4823 `}}),i=n.workspaces.find(a=>a.isDefault);if(!i)throw new Error("No default workspace found");return i};var Lke=require("@prisma/engines");var pFe=require("buffer");function dFe(e,r,n,i){Object.defineProperty(e,r,{get:n,set:i,enumerable:!0,configurable:!0})}var fFe={};dFe(fFe,"serializeRPCMessage",()=>bV);dFe(fFe,"deserializeRPCMessage",()=>wV);var vV="PrismaBigInt::",xV="PrismaBytes::";function bV(e){return JSON.stringify(e,(r,n)=>typeof n=="bigint"?vV+n:n?.type==="Buffer"&&Array.isArray(n?.data)?xV+pFe.Buffer.from(n.data).toString("base64"):n)}function wV(e){return JSON.parse(e,(r,n)=>typeof n=="string"&&n.startsWith(vV)?BigInt(n.substr(vV.length)):typeof n=="string"&&n.startsWith(xV)?n.substr(xV.length):n)}var Cke=G(bFe()),QI=G(P6e()),Pke=G(require("http")),Ake=G(R6e()),Fke=require("zlib");var Vf=require("path");var EH=require("crypto"),Eke=require("fs/promises"),_ke=G(DW());function bH(e,r,n,i){Object.defineProperty(e,r,{get:n,set:i,enumerable:!0,configurable:!0})}var Dke=globalThis,vH={},YI={},wg=Dke.parcelRequire94c2;wg==null&&(wg=function(e){if(e in vH)return vH[e].exports;if(e in YI){var r=YI[e];delete YI[e];var n={id:e,exports:{}};return vH[e]=n,r.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i},wg.register=function(r,n){YI[r]=n},Dke.parcelRequire94c2=wg);var Tke=wg.register;Tke("9lTzd",function(module,exports){bH(module.exports,"guessEnginePaths",()=>guessEnginePaths),bH(module.exports,"guessPrismaClientPath",()=>guessPrismaClientPath);var $5COlq=wg("5COlq");async function guessEnginePaths({forceBinary,forceLibrary,resolveOverrides}){let queryEngineName,queryEngineType;if(forceLibrary?(queryEngineName=await(0,$5COlq.prismaEngineName)("query-engine","library"),queryEngineType="library"):forceBinary?(queryEngineName=await(0,$5COlq.prismaEngineName)("query-engine","binary"),queryEngineType="binary"):(queryEngineName=void 0,queryEngineType=void 0),!queryEngineName||!queryEngineType)return{queryEngine:void 0};let queryEnginePath;if(resolveOverrides[".prisma/client"])queryEnginePath=(0,Vf.resolve)(resolveOverrides[".prisma/client"],`../${queryEngineName}`);else if(resolveOverrides["@prisma/engines"])queryEnginePath=(0,Vf.resolve)(resolveOverrides["@prisma/engines"],`../../${queryEngineName}`);else{let atPrismaEnginesPath;try{atPrismaEnginesPath=eval("require.resolve('@prisma/engines')")}catch(e){throw new Error("Unable to resolve Prisma engine paths. This is a bug.")}queryEnginePath=(0,Vf.resolve)(atPrismaEnginesPath`../../${queryEngineName}`)}return{queryEngine:{type:queryEngineType,path:queryEnginePath}}}function guessPrismaClientPath({resolveOverrides}){let prismaClientPath=resolveOverrides["@prisma/client"]||eval("require.resolve('@prisma/client')");return(0,Vf.resolve)(prismaClientPath,"../")}});Tke("5COlq",function(e,r){bH(e.exports,"prismaEngineName",()=>n);async function n(i,a){let o=await Ni(),u=o==="windows"?".exe":"";if(a==="library")return ls(o,"fs");if(a==="binary")return`${i}-${o}${u}`;throw new Error(`Unknown engine type: ${a}`)}});function s4t(e){return{models:xH(e.models),enums:xH(e.enums),types:xH(e.types)}}function xH(e){let r={};for(let{name:n,...i}of e)r[n]=i;return r}var s_=(0,_ke.debug)("prisma:studio-pcw"),o4t=/^\s*datasource\s+([^\s]+)\s*{/m,u4t=/url *= *env\("(.*)"\)/,c4t=/url *= *"(.*)"/;async function l4t({schema:e,schemaPath:r,dmmf:n,adapter:i,datasourceProvider:a,previewFeatures:o,datasources:u,engineType:c,paths:l,directUrl:p,versions:f}){let g=e.match(o4t)?.[1]??"",v=e.match(u4t)?.[1]??null,x=e.match(c4t)?.[1]??null,{getPrismaClient:b,PrismaClientKnownRequestError:_,PrismaClientRustPanicError:D,PrismaClientInitializationError:C,PrismaClientValidationError:R}=typeof STUDIO_EMBED_BUILD<"u"&&STUDIO_EMBED_BUILD?bke():require(`${l.prismaClient}/runtime/${c}`),F=e,k=(0,EH.createHash)("sha256").update(
Authentication failed against database server, the provided database credentials for `postgres` are not valid.

Please make sure to provide valid database credentials for the database server at the configured address.
  
Query:
{
  "modelName": "Cliente",
  "operation": "findMany",
  "args": {
    "take": 100,
    "skip": 0,
    "select": {
      "id": true,
      "nome": true,
      "email": true,
      "cpf": true,
      "saldo": true,
      "criadoEm": true
    }
  }
}
  