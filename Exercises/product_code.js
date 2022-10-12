function parsePartCode(partCode) {
let colonPosition = partCode.indexOf(";");
let supplierCode = partCode.substring(0, colonPosition);





 let partInfo = { 
     supplierCode : "some value",
     productNumber : "some value",
     size : "some size",
};
return partInfo;

    
}

